import { DataTypes, Model } from 'sequelize';
import { employerDatabase } from "../../connection";

/* The following Model might be a mistake!
   I couldn't find a Database table called like
   `draft_tbl`, if it is not the case, then the
   model is probably out-dated! */

class EmployerDraft extends Model {
}

EmployerDraft.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		position_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		job_description: {
			type: DataTypes.TEXT({ length: 'long' }),
			allowNull: false,
		},
		tasks: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		requirements: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		is_advantage: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		language_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		qualification_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		experience_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		driver_license_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		employement_type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		work_schedule_type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		workplace_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		workplace_country_iso3: {
			type: DataTypes.CHAR(3),
			allowNull: false,
		},
		workplace_region_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		workplace_city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		workplace_zip: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		workplace_address1: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		workplace_address2: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		salary_type_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		salary_current_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		wage_period_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		wage_minimum: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		wage_maximum: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		benefits_ids: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		variable_wage: {
			type: DataTypes.TINYINT(),
			allowNull: false,
		},
		commission: {
			type: DataTypes.TINYINT(),
			allowNull: false,
		},
		bonus: {
			type: DataTypes.TINYINT(),
			allowNull: false,
		},
		premium: {
			type: DataTypes.TINYINT(),
			allowNull: false,
		},
		workplace_benefits_ids: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		payment_type_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		active: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		delete: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize: employerDatabase,
		tableName: 'draft_tbl',
		modelName: "employer_db",
		timestamps: true
	}
);

// EmployerDraft.sync(config.env['NODE_ENV'] === "production" ? {} : { force: true });

export default EmployerDraft;
