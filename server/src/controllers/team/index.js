const Database = require('@/models/Database');
const I18N = require('@/models/I18N');

const getEverything = async (req, res) =>
{
	const db = new Database();
	await db.init();

	const [rows] = await db.connection.execute(`
		SELECT
			t.en_name,
			t.en_title,
			t.en_description,
			t.zh_name,
			t.zh_title,
			t.zh_description,
			t.linkedIn,
			t.category,
			u.url AS image
		FROM teams AS t
		LEFT JOIN upload_file_morph AS m ON m.related_type = "teams" AND m.related_id = t.id
		LEFT JOIN upload_file AS u ON m.upload_file_id = u.id
		ORDER BY t.serialNumber DESC, t.id DESC
	`);

	I18N.transformQueryResults(rows, req.get('i18n'));

	res.status(200).json(rows);
};

module.exports = {
	getEverything
};
