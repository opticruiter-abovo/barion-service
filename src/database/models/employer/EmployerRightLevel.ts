import { DataTypes, Model } from 'sequelize';
import { employerDatabase } from "../../connection";

class EmployerRightLevel extends Model {
}

EmployerRightLevel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		right_level: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		right_level_name_hu: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		right_level_name_en: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: null
		},
		right_level_name_it: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: null
		},
	},
	{
		sequelize: employerDatabase,
		tableName: 'right_level_tbl',
		modelName: "employer_db",
		timestamps: false
	}
);

// EmployerRightLevel.sync(config.env['NODE_ENV'] === "production" ? {} : { force: true });

export default EmployerRightLevel;
