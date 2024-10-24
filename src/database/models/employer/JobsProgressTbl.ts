import { DataTypes, Model } from 'sequelize';
import { employerDatabase } from '../../connection';

class JobProgressTable extends Model {
}

JobProgressTable.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		jobs_draft_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		steps: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0
		}
	},
	{
		sequelize: employerDatabase,
		modelName: 'employer_db',
		tableName: 'jobs_progress_tbl',
		timestamps: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
);

export default JobProgressTable;
