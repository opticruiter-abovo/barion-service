import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class DictionaryList extends Model {
	id: number;
	dictionary_name_hu: string;
	dictionary_name_en: string;
	dictionary_name_it: string;
	dic_table_name: string;
	developing: boolean;
	active: boolean
}

DictionaryList.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		dictionary_name_hu: {
			type: DataTypes.STRING,
			allowNull: false
		},
		dictionary_name_en: {
			type: DataTypes.STRING,
			allowNull: false
		},
		dictionary_name_it: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null,
		},
		dic_table_name: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		developing: {
			type: DataTypes.TINYINT,
			allowNull: true,
			defaultValue: 0
		},
		active: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: '1'
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dictionary_list',
		timestamps: false
	}
);

export default DictionaryList;
