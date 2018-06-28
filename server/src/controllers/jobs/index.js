const Database = require('@/models/Database');
const I18N = require('@/models/I18N');

const getActive = async (req, res) =>
{
	const db = new Database();
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT
		    j.en_title,
			j.en_description,
			j.contactEmailAddress,
			j.zh_title,
			j.zh_description
		FROM jobs AS j
		WHERE j.active = 1
		ORDER BY j.feature ASC, j.serialNumber DESC, j.id ASC
	`);

	I18N.transformQueryResults(rows, req.get('i18n'));

	res.status(200).json(rows);
};

module.exports = {
	getActive
};
