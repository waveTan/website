const Database = require('@/models/Database');

const getEverything = async (req, res) =>
{
	const db = new Database();
	await db.init();

	const [rows] = await db.connection.execute('SELECT * FROM partners ORDER BY id desc');

	res.status(200).json(rows);
};

module.exports = {
	getEverything
};
