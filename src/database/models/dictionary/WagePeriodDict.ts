import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class WagePeriodDict extends Model {
	id: number;
	period_name_hu: string;
	period_name_en: string;
	period_name_it: string;
}

WagePeriodDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		period_name_hu: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		period_name_en: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		period_name_it: {
			type: DataTypes.STRING(200),
			allowNull: false
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_wage_period',
		timestamps: false
	}
);

export default WagePeriodDict;
