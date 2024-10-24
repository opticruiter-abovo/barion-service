import { DataTypes, Model } from 'sequelize';
import { employerDatabase } from "../../connection";

class MatrixPayment extends Model {
}

MatrixPayment.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		payment_type_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		jobs_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		payed: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
	},
	{
		sequelize: employerDatabase,
		tableName: 'matrix_payment_tbl',
		modelName: "employer_db",
		timestamps: false
	}
);

// MatrixPayment.sync(config.env['NODE_ENV'] === "production" ? {} : { force: true });

export default MatrixPayment;
