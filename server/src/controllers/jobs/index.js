const Database = require('@/models/Database');

const getActive = async (req, res) =>
{
	const db = new Database();
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT j.title, j.description, j.contactEmailAddress
		FROM jobs AS j
		WHERE j.active = 1
		ORDER BY j.feature ASC, j.id ASC
	`);

	res.status(200).json(rows);
};

module.exports = {
	getActive
};
