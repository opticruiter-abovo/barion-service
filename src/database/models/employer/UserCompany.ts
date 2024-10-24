import { DataTypes, Model } from "sequelize";
import { employerDatabase } from "../../connection";


class Company extends Model {
	id: number;
	create_time: Date;
	update_time: Date;
	company_name: string;
	address_iso3: string;
	address_zip: string;
	address_city: string;
	address1: string;
	address2: string;
	email: string;
	phone_country_code: number;
	phone_number: number;
	tax_number: string;
	payment_id: number;
	industry_type_id: number;
	number_of_employees: string;
	geopoint: string;
	status: number;
	deleted: number;
}

Company.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	company_name: {
		type: DataTypes.STRING,
		allowNull: false,
		comment: 'Company name'
	},
	address_iso3: {
		type: DataTypes.CHAR(3),
		allowNull: false,
		comment: 'ISO3'
	},
	address_zip: {
		type: DataTypes.STRING(10),
		allowNull: false,
		comment: 'ZIP Code'
	},
	address_city: {
		type: DataTypes.STRING(200),
		allowNull: false,
		comment: 'Name of settlement'
	},
	address1: {
		type: DataTypes.STRING(200),
		allowNull: false,
		comment: 'Address - Line 1'
	},
	address2: {
		type: DataTypes.STRING(200),
		allowNull: true,
		defaultValue: null,
		comment: 'Addess - Line 2'
	},
	email: {
		type: DataTypes.STRING(200),
		allowNull: false,
		comment: 'Company email'
	},
	phone_country_code: {
		type: DataTypes.STRING(50),
		allowNull: true,
		defaultValue: null,
		comment: 'Phone country code'
	},
	phone_number: {
		type: DataTypes.STRING(50),
		allowNull: true,
		defaultValue: null,
		comment: 'Phone  number'
	},
	tax_number: {
		type: DataTypes.STRING(200),
		allowNull: false,
	},
	payment_id: {
		type: DataTypes.INTEGER,
		allowNull: true,
		defaultValue: 0
	},
	industry_type_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0
	},
	number_of_employees: {
		type: DataTypes.STRING(50),
		allowNull: false,
		defaultValue: '0'
	},
	geopoint: {
		type: DataTypes.GEOMETRY('POINT'),
		allowNull: true,
		defaultValue: null
	},
	status: {
		type: DataTypes.TINYINT,
		allowNull: false,
		defaultValue: 1
	},
	deleted: {
		type: DataTypes.TINYINT,
		allowNull: false,
		defaultValue: 0
	},
}, {
	sequelize: employerDatabase,
	modelName: 'employer_db',
	tableName: 'company_tbl',
	timestamps: true,
	createdAt: 'create_time',
	updatedAt: 'update_time'
});

export default Company;