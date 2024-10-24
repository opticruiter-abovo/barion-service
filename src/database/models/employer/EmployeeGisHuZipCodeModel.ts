import { DataTypes, Model } from 'sequelize';
import { employeeDatabase } from "../../connection";

class EmployeeGisHuZipCode extends Model {
}

EmployeeGisHuZipCode.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		settlement: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		zip: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		country_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		country_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		slug: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		populity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		type: {
			type: DataTypes.STRING(150),
			allowNull: false,
		},
	},
	{
		sequelize: employeeDatabase,
		tableName: 'gis_hu_zip_code2',
		modelName: "employee_db",
		timestamps: false
	}
);

// EmployeeGisHuZipCode.sync(config.env['NODE_ENV'] === "production" ? {} : { force: true });

export default EmployeeGisHuZipCode;
