const Database = require('@/models/Database');

const resultsLimit = 12; // This should be changed on the frontend too -> `\client\src\store\dApps\index.js::appsPerPage`

const load = async (req, res) =>
{
	const db = new Database();
	const { offsetId = 0 } = req.params;
	const extra = {};
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT d.id, d.title, d.description, d.link, d.active, u.url AS image
		FROM dapps AS d
		LEFT JOIN upload_file_morph AS m ON m.related_type = "dapps" AND m.related_id = d.id
		LEFT JOIN upload_file AS u ON m.upload_file_id = u.id
		WHERE
		CASE
			WHEN 0 != ? THEN d.id < ?
			ELSE 1=1
		END
		ORDER BY d.id DESC
		LIMIT ?
		`, [offsetId, offsetId, resultsLimit]);

	if(offsetId === 0) // This means it's the initial load so get additional data such as total number of applications
	{
		extra.count = await db.connection.execute('SELECT COUNT(id) AS count FROM dapps');
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
			d.title,
			d.description,
			d.link,
			d.active,
			u.url AS image,
			MATCH (d.title) AGAINST (? IN BOOLEAN MODE) AS title_relevance,
			MATCH (d.title, d.description) AGAINST (? IN BOOLEAN MODE) AS relevance
		FROM dapps AS d
		LEFT JOIN upload_file_morph AS m ON m.related_type = "dapps" AND m.related_id = d.id
		LEFT JOIN upload_file AS u ON m.upload_file_id = u.id
		WHERE
		CASE
			WHEN 0 != ? THEN d.id < ?
			ELSE 1=1
		END
		AND MATCH (d.title, d.description) AGAINST (? IN BOOLEAN MODE)
		ORDER BY title_relevance DESC, relevance DESC
		LIMIT ?
		`, [searchQuery, searchQuery, offsetId, offsetId, searchQuery, resultsLimit]);

	if(offsetId === 0) // This means it's the initial load so get additional data such as total number of applications
	{
		extra.count = await db.connection.execute(`
			SELECT COUNT(d.id) AS count FROM dapps AS d
			WHERE MATCH (d.title, d.description) AGAINST (? IN BOOLEAN MODE)
			`, [searchQuery]);
		extra.count = extra.count[0][0].count;
	}

	res.status(200).json({ ...extra, rows });
};

const item = async (req, res) =>
{
	const db = new Database();
	const { item } = req.params;
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT d.*, u.url AS image
		FROM dapps AS d
		LEFT JOIN upload_file_morph AS m ON m.related_type = "dapps" AND m.related_id = d.id
		LEFT JOIN upload_file AS u ON m.upload_file_id = u.id
		WHERE d.id = ?
		LIMIT 1
		`, [item]);

	res.status(200).json(rows);
};

module.exports = {
	load,
	search,
	item
};
