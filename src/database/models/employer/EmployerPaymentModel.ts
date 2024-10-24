import { DataTypes, Model } from 'sequelize';
import { employerDatabase } from "../../connection";

class EmployerPayment extends Model {
}

EmployerPayment.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		payment_type_name_hu: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		payment_type_name_en: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		payment_type_name_it: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
	},
	{
		sequelize: employerDatabase,
		tableName: 'payment_tbl',
		modelName: "employer_db",
		timestamps: false
	}
);

// EmployerPayment.sync(config.env['NODE_ENV'] === "production" ? {} : { force: true });

export default EmployerPayment;
