import { DataTypes, Model } from 'sequelize';
import { employerDatabase } from "../../connection";

class EmployerMbtiSuitableProfessions extends Model {
}

EmployerMbtiSuitableProfessions.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		mbti_code: {
			type: DataTypes.CHAR(5),
			allowNull: false,
			defaultValue: ''
		},
		profession_hu: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize: employerDatabase,
		tableName: 'mbti_suitable_professions',
		modelName: "employer_db",
		timestamps: false
	}
);

// EmployerMbtiSuitableProfessions.sync(config.env['NODE_ENV'] === "production" ? {} : { force: true });

export default EmployerMbtiSuitableProfessions;
