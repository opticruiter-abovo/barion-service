import { DataTypes, Model } from 'sequelize';
import { employerDatabase } from "../../connection";

class EmployerPreregistration extends Model {
}

EmployerPreregistration.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		uid: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '0'
		},
		company_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		company_email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		address_iso3: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: null
		},
		address_zip: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		address_city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		address1: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		address2: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		tax_number: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		industry_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		number_of_employee: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		contact_person_first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		contact_person_last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		contact_person_email: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		phone_country_code: {
			type: DataTypes.STRING(10),
			allowNull: true,
			defaultValue: null
		},
		phone_number: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: null
		},
		contact_person_position: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		terms_and_conditions: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		data_protection_terms: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		subscribes_to_newsletter: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		geopoint: {
			type: DataTypes.GEOMETRY('POINT'),
			allowNull: true,
			defaultValue: null
		},
		token_email_sent: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		token: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		token_expire: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		validated: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
	},
	{
		sequelize: employerDatabase,
		tableName: 'employer_preregistration',
		modelName: "employer_db",
		timestamps: true,
		createdAt: 'reg_date',
		updatedAt: 'update_time'
	}
);

// EmployerPreregistration.sync(config.env['NODE_ENV'] === "production" ? {} : { force: true });

export default EmployerPreregistration;
