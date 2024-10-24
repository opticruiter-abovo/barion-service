import { DataTypes, Model } from 'sequelize';
import { employerDatabase } from '../../connection';

class JobsTbl extends Model {
}

JobsTbl.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		//ez jon a draft_id-bol
		jobsID: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0,
			comment: 'jobs_draft_id'
		},
		start_of_ads: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: null
		},
		end_of_ads: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: null
		},
		company_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
			comment: 'Company Inner ID'
		},
		professions_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0,
			comment: 'dic_professions select'
		},
		job_description: {
			type: DataTypes.TEXT({ length: 'long' }),
			allowNull: true
		},
		tasks: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		requirements: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		is_advantage: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		language_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		qualification_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		experience_id: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: ''
		},
		driver_license_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		employment_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		work_schedule_type: {
			type: DataTypes.STRING,
			allowNull: true
		},
		workplace_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		workplace_country_iso3: {
			type: DataTypes.CHAR(3),
			allowNull: true,
			defaultValue: null
		},
		workplace_region_id: {
			type: DataTypes.STRING,
			allowNull: true
		},
		workplace_city: {
			type: DataTypes.STRING,
			allowNull: true
		},
		workplace_zip: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		workplace_address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		workplace_address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		salary_type_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0
		},
		salary_currency_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0
		},
		wage_period_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0
		},
		wage_maximum: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0
		},
		wage_minimum: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0
		},
		benefits_ids: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: '0'
		},
		variable_wage: {
			type: DataTypes.TINYINT,
			allowNull: true,
			defaultValue: 0
		},
		commission: {
			type: DataTypes.TINYINT,
			allowNull: true,
			defaultValue: 0
		},
		bonus: {
			type: DataTypes.TINYINT,
			allowNull: true,
			defaultValue: 0
		},
		premium: {
			type: DataTypes.TINYINT,
			allowNull: true,
			defaultValue: 0
		},
		workplace_benefits_ids: {
			type: DataTypes.STRING,
			allowNull: true
		},
		payment_type_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0
		},
		geopoint: {
			type: DataTypes.GEOMETRY('POINT'),
			allowNull: true,
			defaultValue: null
		},
		active: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0,
		},
		deleted: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0
		},
		isFinished: {
			type: DataTypes.TINYINT,
			allowNull: true,
			defaultValue: 0,
			field: 'is_finished'
		}
	},
	{
		sequelize: employerDatabase,
		tableName: 'jobs_tbl',
		modelName: 'employer_db',
		timestamps: true,
		createdAt: 'create_time',
		updatedAt: 'update_time'
	}
);

export default JobsTbl;