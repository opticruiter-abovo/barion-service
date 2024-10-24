import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class ProfessionsDict extends Model {
	id: number;
	mbti_code: string;
	profession_hu: string;
	profession_en: string;
	profession_it: string;
}

ProfessionsDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		mbti_code: {
			type: DataTypes.CHAR(5),
			allowNull: false
		},
		profession_hu: {
			type: DataTypes.STRING,
			allowNull: false
		},
		profession_en: {
			type: DataTypes.STRING,
			allowNull: false
		},
		profession_it: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_professions',
		timestamps: false
	}
);

export default ProfessionsDict;
