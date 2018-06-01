const merge = require('deepmerge');

class Data
{
	static getPath(path, setRoot = true)
	{
		const root = setRoot ? '../../..' : '';

		return `./${root}/data/${path}.json`;
	}

	static getFile(path)
	{
		try
		{
			return require(this.getPath(path));
		}
		catch(e)
		{
			return {};
		}
	}

	static read(path)
	{
		return Data.getFile(`${path}`);
	}
}

module.exports = Data;
