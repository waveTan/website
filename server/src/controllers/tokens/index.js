const Database = require('@/models/Database');

const getTokenPrice = async (req, res) =>
{
	const { token } = req.params;
	const db = new Database();
	await db.init();

	const [rows] = await db.connection.execute('SELECT * FROM coinmarketcap WHERE token = ? ORDER BY id DESC LIMIT 1', [token]);
	const [row] = rows;

	res.status(200).json(row.data);
};

module.exports = {
	getTokenPrice
};
