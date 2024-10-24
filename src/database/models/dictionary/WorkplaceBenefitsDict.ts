import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class WorkplaceBenefitsDict extends Model {
	id: number;
	workplace_benefits_hu: string;
	workplace_benefits_en: string;
	workplace_benefits_it: string;
}

WorkplaceBenefitsDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		workplace_benefits_hu: {
			type: DataTypes.STRING,
			allowNull: false
		},
		workplace_benefits_en: {
			type: DataTypes.STRING,
			allowNull: false
		},
		workplace_benefits_it: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_workplace_benefits',
		timestamps: false
	}
);

export default WorkplaceBenefitsDict;
