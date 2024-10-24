import { DataTypes, Model } from "sequelize";
import { employerDatabase } from "../../connection";

class EmployerUserMatrix extends Model {
	id: number;
	user_id: number;
	company_id: number;
	right_level_id: number;
}

/* Must be a mistake that should be fixed! */

EmployerUserMatrix.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	user_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	company_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	right_level_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
}, {
	sequelize: employerDatabase,
	tableName: 'matrix_employer_user',
	modelName: "EmployerUserMatrix",
	timestamps: false,
});

export default EmployerUserMatrix;