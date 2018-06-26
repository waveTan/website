const Database = require('@/models/Database');

const resultsLimit = 2;

const load = async (req, res) =>
{
	const db = new Database();
	const { offsetId = 0 } = req.params;
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT d.id, d.title, d.description, d.link, d.active, u.url AS image
		FROM dapps AS d
		LEFT JOIN upload_file_morph AS m ON m.related_type = "dapps" AND m.related_id = d.id
		LEFT JOIN upload_file AS u ON m.upload_file_id = u.id
		WHERE
		CASE
			WHEN 0 != ? THEN id < ?
			ELSE 1=1
		END
		ORDER BY d.id desc
		LIMIT ?
	`, [offsetId, offsetId, resultsLimit]);

	res.status(200).json(rows);
};

const search = async (req, res) =>
{
	const db = new Database();
	const { offsetId = 0 } = req.params;
	const { query } = req.body;
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT d.id, d.title, d.description, d.link, d.active
		FROM dapps AS d
		WHERE
		CASE
			WHEN 0 != ? THEN id < ?
			ELSE 1=1
		END
		AND MATCH (d.title, d.description) AGAINST (? IN BOOLEAN MODE)
		ORDER BY d.id desc
		LIMIT ?
	`, [offsetId, offsetId, query, resultsLimit]);

	res.status(200).json(rows);
};

module.exports = {
	load,
	search
};
