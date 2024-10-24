import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class IndustryDict extends Model {
	id: number;
	industry_name_hu: string;
	industry_name_en: string;
	industry_name_it: string;
}

IndustryDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		industry_name_hu: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		industry_name_en: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: null
		},
		industry_name_it: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: null
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_industries',
		timestamps: false
	}
);

export default IndustryDict;
