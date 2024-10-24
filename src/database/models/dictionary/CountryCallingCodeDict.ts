import { DataTypes, Model } from "sequelize";
import { dictionaryDatabase } from "src/database/connection";

class CountryCallingCodeDict extends Model {
	"id": number;
	"FIFA": string;
	"Dial": string;
	"ISO3166-1-Alpha-3": string;
	"MARC": string;
	"is_independent": string;
	"ISO3166-1-numeric": string;
	"GAUL": string;
	"FIPS": string;
	"WMO": string;
	"ISO3166-1-Alpha-2": string;
	"ITU": string;
	"IOC": string;
	"DS": string;
	"UNTERM Spanish Formal": string;
	"Global Code": string;
	"Intermediate Region Code": string;
	"official_name_fr": string;
	"UNTERM French Short": string;
	"ISO4217-currency_name": string;
	"Developed / Developing Countries": string;
	"UNTERM Russian Formal": string;
	"UNTERM English Short": string;
	"ISO4217-currency_alphabetic_code": string;
	"Small Island Developing States (SIDS)": string;
	"UNTERM Spanish Short": string;
	"ISO4217-currency_numeric_code": string;
	"UNTERM Chinese Formal": string;
	"UNTERM French Formal": string;
	"UNTERM Russian Short": string;
	"M49": string;
	"Sub-region Code": string;
	"Region Code": string;
	"official_name_ar": string;
	"ISO4217-currency_minor_unit": string;
	"UNTERM Arabic Formal": string;
	"UNTERM Chinese Short": string;
	"Land Locked Developing Countries (LLDC)": string;
	"Intermediate Region Name": string;
	"official_name_es": string;
	"UNTERM English Formal": string;
	"official_name_cn": string;
	"official_name_en": string;
	"ISO4217-currency_country_name": string;
	"Least Developed Countries (LDC)": string;
	"Region Name": string;
	"UNTERM Arabic Short": string;
	"Sub-region Name": string;
	"official_name_ru": string;
	"Global Name": string;
	"Capital": string;
	"Continent": string;
	"TLD": string;
	"Languages": string;
	"Geoname ID": string;
	"CLDR display name": string;
	"EDGAR": string;
}

CountryCallingCodeDict.init({
	"id": {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	"FIFA": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Dial": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"ISO3166-1-Alpha-3": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"MARC": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"is_independent": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"ISO3166-1-numeric": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"GAUL": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"FIPS": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"WMO": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"ISO3166-1-Alpha-2": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"ITU": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"IOC": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"DS": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"UNTERM Spanish Formal": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Global Code": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Intermediate Region Code": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"official_name_fr": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"UNTERM French Short": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"ISO4217-currency_name": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Developed / Developing Countries": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"UNTERM Russian Formal": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"UNTERM English Short": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"ISO4217-currency_alphabetic_code": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Small Island Developing States (SIDS)": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"UNTERM Spanish Short": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"ISO4217-currency_numeric_code": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"UNTERM Chinese Formal": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"UNTERM French Formal": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"UNTERM Russian Short": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"M49": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Sub-region Code": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Region Code": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"official_name_ar": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"ISO4217-currency_minor_unit": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"UNTERM Arabic Formal": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"UNTERM Chinese Short": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Land Locked Developing Countries (LLDC)": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Intermediate Region Name": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"official_name_es": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"UNTERM English Formal": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"official_name_cn": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"official_name_en": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"ISO4217-currency_country_name": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Least Developed Countries (LDC)": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Region Name": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"UNTERM Arabic Short": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Sub-region Name": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"official_name_ru": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Global Name": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Capital": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Continent": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"TLD": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Languages": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"Geoname ID": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"CLDR display name": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	},
	"EDGAR": {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	}
}, {
	sequelize: dictionaryDatabase,
	modelName: 'dictionary_db',
	tableName: 'dic_country_calling_code',
	timestamps: false
});

export default CountryCallingCodeDict;
