import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class BenefitsDict extends Model {
	id: number;
	benefits_hu: string;
	benefits_en: string;
	benefits_it: string;
}

BenefitsDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		benefits_hu: {
			type: DataTypes.STRING,
			allowNull: false
		},
		benefits_en: {
			type: DataTypes.STRING,
			allowNull: false
		},
		benefits_it: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_benefits',
		timestamps: false
	}
);

export default BenefitsDict;
