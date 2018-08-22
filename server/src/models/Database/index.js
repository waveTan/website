const mysql = require('mysql2/promise');

class Database
{
	/**
	 * Create the database connection
	 * @returns {Promise<*>}
	 */
	static async connect()
	{
		return mysql.createConnection({
			host: process.env.DATABASE_HOST,
			user: process.env.DATABASE_USERNAME,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE_NAME,
			port: process.env.DATABASE_PORT
		});
	}

	/**
	 * Initiate the connection
	 * @returns {Promise<void>}
	 */
	async init()
	{
		try
		{
			this.connection = await Database.connect();
		}
		catch(e)
		{
			throw new Error(e.message);
		}
	}

	end()
	{
		if(this.connection)
		{
			this.connection.end();
		}
	}
}

module.exports = Database;
