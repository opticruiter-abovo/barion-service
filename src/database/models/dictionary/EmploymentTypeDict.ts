import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class EmploymentTypeDict extends Model {
	id: number;
	employment_type_hu: string;
	employment_definition_hu: string;
	employment_type_en: string;
	employment_definition_en: string;
	employment_type_it: string;
	employment_definition_it: string;
}

EmploymentTypeDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		employment_type_hu: {
			type: DataTypes.STRING,
			allowNull: false
		},
		employment_definition_hu: {
			type: DataTypes.TEXT({ length: 'long' }),
			allowNull: false
		},
		employment_type_en: {
			type: DataTypes.STRING,
			allowNull: false
		},
		employment_definition_en: {
			type: DataTypes.TEXT({ length: 'long' }),
			allowNull: false
		},
		employment_type_it: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		employment_definition_it: {
			type: DataTypes.TEXT({ length: 'long' }),
			allowNull: true,
			defaultValue: null
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_employment_type',
		timestamps: false
	}
);

export default EmploymentTypeDict;
