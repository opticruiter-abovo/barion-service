import { DataTypes, Model } from 'sequelize';
import { employerDatabase } from "../../connection";

class Employer extends Model {
}

Employer.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		firebase_id: {
			type: DataTypes.STRING(150),
			allowNull: true,
			defaultValue: '0',
			comment: 'Firebase ID'
		},
		first_name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: 'Manager First Name'
		},
		middle_name: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: null,
			comment: 'Manager Middle Name'
		},
		last_name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: 'Manager Last Name'
		},
		email: {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: 'Manager contact email'
		},
		phone_country_code: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0',
			comment: 'Country Calling Codes'
		},
		phone_number: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0',
			comment: 'Phone Number'
		},
		company_position: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '0',
			comment: 'The position of the manager in the company'
		},
		terms_and_conditions: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0,
			comment: 'Conditions accept'
		},
		data_protection_terms: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0,
			comment: 'Terms accept'
		},
		subscribes_to_newsletter: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0,
			comment: 'Subscribes accept'
		},
		user_status_id: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0,
			comment: 'Active/Inactive status'
		},
		deleted: {
			type: DataTypes.TINYINT,
			allowNull: false,
			defaultValue: 0,
			comment: 'Deleted flag'
		}
	},
	{
		sequelize: employerDatabase,
		tableName: 'user_tbl',
		modelName: "employer_db",
		timestamps: true,
		createdAt: 'registration_time',
		updatedAt: 'update_time'
	}
);

// Employer.sync(config.env['NODE_ENV'] === "production" ? {} : { force: true });

export default Employer;
