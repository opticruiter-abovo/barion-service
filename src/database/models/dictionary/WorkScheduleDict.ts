import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class WorkScheduleDict extends Model {
	id: number;
	work_schedule_type_hu: string;
	work_schedule_definition_hu: string;
	work_schedule_type_en: string;
	work_schedule_definition_en: string;
	work_schedule_type_it: string;
	work_schedule_definition_it: string;
}

WorkScheduleDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		work_schedule_type_hu: {
			type: DataTypes.STRING,
			allowNull: false
		},
		work_schedule_definition_hu: {
			type: DataTypes.STRING,
			allowNull: false
		},
		work_schedule_type_en: {
			type: DataTypes.STRING,
			allowNull: false
		},
		work_schedule_definition_en: {
			type: DataTypes.STRING,
			allowNull: false
		},
		work_schedule_type_it: {
			type: DataTypes.STRING,
			allowNull: false
		},
		work_schedule_definition_it: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_work_schedule',
		timestamps: false
	}
);

export default WorkScheduleDict;
