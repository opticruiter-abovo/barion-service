import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class ExperienceDict extends Model {
	id: number;
	experience_hu: string;
	experience_en: string;
	experience_it: string;
}

ExperienceDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		experience_hu: {
			type: DataTypes.STRING,
			allowNull: false
		},
		experience_en: {
			type: DataTypes.STRING,
			allowNull: false
		},
		experience_it: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_experience',
		timestamps: false
	}
);

export default ExperienceDict;
