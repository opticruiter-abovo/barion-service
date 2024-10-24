import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class PhoneCodeDict extends Model {
	id: number;
	phone_code: number;
	country_name_hu: string;
	country_name_en: string;
	country_name_it: string;
}

PhoneCodeDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		phone_code: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		country_name_hu: {
			type: DataTypes.STRING,
			allowNull: false
		},
		country_name_en: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: null
		},
		country_name_it: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: null
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_phone_code',
		timestamps: false
	}
);

export default PhoneCodeDict;
