import { DataTypes, Model } from "sequelize";
import { dictionaryDatabase } from "src/database/connection";

class CountriesDict extends Model {
	id: number;
	country_name: string;
	numeric_code: number;
	iso3: string;
	iso2: string;
}

CountriesDict.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	country_name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	numeric_code: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0
	},
	iso3: {
		type: DataTypes.CHAR(3),
		allowNull: false
	},
	iso2: {
		type: DataTypes.CHAR(2),
		allowNull: false
	}
}, {
	sequelize: dictionaryDatabase,
	modelName: 'dictionary_db',
	tableName: 'dic_countries',
	timestamps: false
});


export default CountriesDict;
