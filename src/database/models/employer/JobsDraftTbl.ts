import { DataTypes, Model } from 'sequelize';
import { employerDatabase } from '../../connection';

class JobsDraftTbl extends Model {
}

JobsDraftTbl.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		company_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
			comment: 'Company Inner ID'
		},
		professions_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
			comment: 'dic_proffesions select'
		},
		job_description: {
			type: DataTypes.TEXT({ length: 'long' }),
			allowNull: true,
			defaultValue: null
		},
		tasks: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: null
		},
		requirements: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: null
		},
		is_advantage: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: null
		},
		language_id: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		qualification_id: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		experience_id: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: null
		},
		driver_license_id: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		employment_type: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		work_schedule_type: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		workplace_id: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		workplace_country_iso3: {
			type: DataTypes.CHAR(3),
			allowNull: true,
			defaultValue: null
		},
		workplace_region_id: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		workplace_city: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		workplace_zip: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		workplace_address1: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		workplace_address2: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
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
			allowNull: true,
			defaultValue: null
		},
		payment_type_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0
		},
		geopoint: {
			type: DataTypes.GEOMETRY('POINT'),
			allowNull: true,
			defaultValue: null,
			comment: 'WGS84 Dcimel'
		},
		finish_flag: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0
		},
		accepted: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0
		},
		operator_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0,
			comment: 'Who accepted this jobs ads'
		},
	},
	{
		sequelize: employerDatabase,
		modelName: 'employer_db',
		tableName: 'jobs_draft_tbl',
		timestamps: true,
		createdAt: 'create_time',
		updatedAt: 'update_time'
	}
);

export default JobsDraftTbl;