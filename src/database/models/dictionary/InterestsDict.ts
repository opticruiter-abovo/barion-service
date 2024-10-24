import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class InterestsDict extends Model {
	id: number;
	interests_hu: string;
	interests_en: string;
	interests_it: string;
}

InterestsDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		interests_hu: {
			type: DataTypes.STRING,
			allowNull: false
		},
		interests_en: {
			type: DataTypes.STRING,
			allowNull: false
		},
		interests_it: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_interests',
		timestamps: false
	}
);

export default InterestsDict;
