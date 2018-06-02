require('dotenv').config();
const axios = require('axios');
const Database = require('./../../models/Database');

const run = async () =>
{
	const db = new Database();
	await db.init();

	const start = async () =>
	{
		const res = await axios('https://api.coinmarketcap.com/v1/ticker/nuls/');
		db.connection.query('INSERT INTO coinmarketcap SET ?', {
			token: 'nuls',
			data: JSON.stringify(res.data[0]),
			timestamp: Math.floor(new Date() / 1000)
		});
	};

	start();
	setInterval(() =>
	{
		start();
	}, 60000 * 5); // Every 5 minutes
};

run();
