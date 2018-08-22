const submit = async (req, res) =>
{
	const { name, email, message } = req.body;
	const { db } = req;
	await db.init();

	await db.connection.query('INSERT INTO contacts SET ?', { name, email, message });

	res.status(200).json({ success: true });
};

module.exports = {
	submit
};
