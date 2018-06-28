const Database = require('@/models/Database');

const getEverything = async (req, res) =>
{
	const db = new Database();
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT p.type, p.link, u.url AS image
		FROM partners AS p
		LEFT JOIN upload_file_morph AS m ON m.related_type = "partners" AND m.related_id = p.id
		LEFT JOIN upload_file AS u ON m.upload_file_id = u.id
		ORDER BY p.serialNumber DESC, p.id DESC
	`);

	res.status(200).json(rows);
};

module.exports = {
	getEverything
};
