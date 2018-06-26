const Database = require('@/models/Database');

const load = async (req, res) =>
{
	const db = new Database();
	const { offsetId } = req.params;
	const limit = 2;
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT d.id, d.title, d.description, d.link, d.active, u.url AS image
		FROM dapps AS d
		LEFT JOIN upload_file_morph AS m ON m.related_type = "partners" AND m.related_id = d.id
		LEFT JOIN upload_file AS u ON m.upload_file_id = u.id
		WHERE d.id < ?
		ORDER BY d.id desc
		LIMIT ?
	`, [offsetId, limit]);

	res.status(200).json(rows);
};

module.exports = {
	load
};
