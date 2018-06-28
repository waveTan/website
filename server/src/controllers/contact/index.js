const submit = async (req, res) =>
{
	const { name, email, message } = req.body;

	console.log(name);
	console.log(email);
	console.log(message);

	res.status(200).json({ success: true });
};

module.exports = {
	submit
};
