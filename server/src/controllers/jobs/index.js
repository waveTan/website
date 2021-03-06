const I18N = require('@/models/I18N');

const getActive = async (req, res) =>
{
	const { db } = req;
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT
		    j.en_title,
			j.en_content,
			j.contactEmailAddress,
			j.zh_title,
			j.zh_content
		FROM jobs AS j
		WHERE j.active = 1
		ORDER BY j.feature DESC, j.serialNumber IS NULL, j.serialNumber ASC, j.id DESC
	`);

	I18N.transformQueryResults(rows, req.get('i18n'));

	res.status(200).json(rows);
};

module.exports = {
	getActive
};
