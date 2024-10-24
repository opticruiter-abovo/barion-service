import { DataTypes, Model } from 'sequelize';
import { employerDatabase } from "../../connection";

class EmployerJobs extends Model {
}

EmployerJobs.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		//ez jon a draft_id-bol
		jobsID: {
			type: DataTypes.INTEGER,
			allowNull: false,
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
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 0,
			comment: 'dic_proffesions select'
		},
		job_description: {
			type: DataTypes.TEXT({ length: 'long' }),
			allowNull: false
		},
		tasks: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		requirements: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		is_advantage: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		language_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		qualification_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		experience_id: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: ''
		},
		driver_license_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		employment_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		work_schedule_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		workplace_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		workplace_country_iso3: {
			type: DataTypes.CHAR(3),
			allowNull: true,
			defaultValue: null
		},
		workplace_region_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		workplace_city: {
			type: DataTypes.STRING,
			allowNull: false
		},
		workplace_zip: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		workplace_address1: {
			type: DataTypes.STRING,
			allowNull: false
		},
		workplace_address2: {
			type: DataTypes.STRING,
			allowNull: false
		},
		salary_type_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		salary_currency_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		wage_period_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		wage_maximum: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		wage_minimum: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		benefits_ids: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '0'
		},
		variable_wage: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0
		},
		commission: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0
		},
		bonus: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0
		},
		premium: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0
		},
		workplace_benefits_ids: {
			type: DataTypes.STRING,
			allowNull: false
		},
		payment_type_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		geopoint: {
			type: DataTypes.GEOMETRY('POINT'),
			allowNull: true,
			defaultValue: null
		},
		active: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		deleted: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		}
	},
	{
		sequelize: employerDatabase,
		modelName: 'employer_db',
		tableName: 'jobs_tbl',
		timestamps: true,
		createdAt: 'create_time',
		updatedAt: 'update_time'
	}
);

// EmployerJobs.sync(config.env['NODE_ENV'] === "production" ? {} : { force: true });

export default EmployerJobs;
