import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class WorkplaceDict extends Model {
	id: number;
	workplace_name_hu: string;
	workplace_name_en: string;
	workplace_name_it: string;
}

WorkplaceDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		workplace_name_hu: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		workplace_name_en: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: null
		},
		workplace_name_it: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: null
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_workplace',
		timestamps: false
	}
);

export default WorkplaceDict;
