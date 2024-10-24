import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class LanguagesDict extends Model {
	id: number;
	language_hu: string;
	language_en: string;
	language_it: string;
}

LanguagesDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		language_hu: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '0'
		},
		language_en: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '0'
		},
		language_it: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '0'
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_languages',
		timestamps: false
	}
);

export default LanguagesDict;
