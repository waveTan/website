const Database = require('@/models/Database');

const getEverything = async (req, res) =>
{
	const db = new Database();
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT p.name, p.title, p.description, p.linkedIn, p.category, u.url AS image
		FROM teams AS p
		LEFT JOIN upload_file_morph AS m ON m.related_type = "teams" AND m.related_id = p.id
		LEFT JOIN upload_file AS u ON m.upload_file_id = u.id
		ORDER BY p.id desc
	`);

	res.status(200).json(rows);
};

module.exports = {
	getEverything
};
