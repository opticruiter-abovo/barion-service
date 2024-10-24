import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class HobbiesDict extends Model {
	id: number;
	hobbies_hu: string;
	hobbies_en: string;
	hobbies_it: string;
}

HobbiesDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		hobbies_hu: {
			type: DataTypes.STRING,
			allowNull: false
		},
		hobbies_en: {
			type: DataTypes.STRING,
			allowNull: false
		},
		hobbies_it: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_hobbies',
		timestamps: false
	}
);

export default HobbiesDict;
