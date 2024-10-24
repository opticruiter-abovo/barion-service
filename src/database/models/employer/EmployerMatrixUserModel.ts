import { DataTypes, Model } from 'sequelize';
import { employerDatabase } from "../../connection";

class EmployerMatrixUser extends Model {
}

EmployerMatrixUser.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		company_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		right_level_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
	},
	{
		sequelize: employerDatabase,
		tableName: 'matrix_employer_user',
		modelName: "employer_db",
		timestamps: false
	}
);

// EmployerMatrixUser.sync(config.env['NODE_ENV'] === "production" ? {} : { force: true });

export default EmployerMatrixUser;
