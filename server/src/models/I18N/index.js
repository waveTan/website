const merge = require('deepmerge');
const Data = require('@/models/Data/');

class I18N
{
	constructor()
	{
		this.defaultLocale = 'en';
	}

	load(locale)
	{
		locale = locale || this.defaultLocale;

		const i18n = {
			default: I18N.read(this.defaultLocale),
			custom: I18N.read(locale)
		};

		return merge(i18n.default, i18n.custom);
	}

	static read(fileName)
	{
		return Data.read(`i18n/${fileName}`);
	}
}

module.exports = I18N;
