const Database = require('@/models/Database');
const I18N = require('@/models/I18N');

const resultsLimit = 2; // This should be changed on the frontend too -> `\client\src\store\dApps\index.js::appsPerPage`

const load = async (req, res) =>
{
	const db = new Database();
	const { offsetId = 0 } = req.params;
	const extra = {};
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT
			d.id,
			d.en_title,
			d.en_description,
			d.zh_title,
			d.zh_description,
			d.active
		FROM announcements AS d
		WHERE d.active = 1
		AND CASE
				WHEN ? != 0 THEN d.id < ?
				ELSE 1=1
			END
		ORDER BY d.id DESC
		# CASE
		#	 WHEN ? = 0 THEN d.serialNumber
		# END DESC, d.id DESC
		LIMIT ?
		`, [offsetId, offsetId, resultsLimit]);

	I18N.transformQueryResults(rows, req.get('i18n'));

	if(offsetId === 0) // This means it's the initial load so get additional data such as total number of applications
	{
		extra.count = await db.connection.execute('SELECT COUNT(id) AS count FROM announcements');
		extra.count = extra.count[0][0].count;
	}

	res.status(200).json({ ...extra, rows });
};

const search = async (req, res) =>
{
	const db = new Database();
	const { offsetId = 0 } = req.params;
	const { searchQuery } = req.body;
	const extra = {};
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT
			d.id,
			d.en_title,
			d.en_description,
			d.zh_title,
			d.zh_description,
			d.active,
			MATCH (d.en_title, d.zh_title) AGAINST (? IN BOOLEAN MODE) AS title_relevance,
			MATCH (d.en_title, d.en_description, d.zh_title, d.zh_description) AGAINST (? IN BOOLEAN MODE) AS relevance
		FROM announcements AS d
		WHERE d.active = 1
		CASE
			WHEN ? != 0 THEN d.id < ?
			ELSE 1=1
		END
		AND MATCH (d.en_title, d.en_description, d.zh_title, d.zh_description) AGAINST (? IN BOOLEAN MODE)
		ORDER BY title_relevance DESC, relevance DESC
		LIMIT ?
		`, [searchQuery, searchQuery, offsetId, offsetId, searchQuery, resultsLimit]);

	if(offsetId === 0) // This means it's the initial load so get additional data such as total number of applications
	{
		extra.count = await db.connection.execute(`
			SELECT COUNT(d.id) AS count FROM announcements AS d
			WHERE MATCH (d.en_title, d.en_description, d.zh_title, d.zh_description) AGAINST (? IN BOOLEAN MODE)
			`, [searchQuery]);
		extra.count = extra.count[0][0].count;
	}

	I18N.transformQueryResults(rows, req.get('i18n'));

	res.status(200).json({ ...extra, rows });
};

const item = async (req, res) =>
{
	const db = new Database();
	const { item } = req.params;
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT
			d.id,
			d.en_title,
			d.en_description,
			d.zh_title,
			d.zh_description,
			d.active
		FROM announcements AS d
		WHERE d.id = ?
		LIMIT 1
		`, [item]);

	I18N.transformQueryResults(rows, req.get('i18n'));

	res.status(200).json(rows);
};

module.exports = {
	load,
	search,
	item
};
