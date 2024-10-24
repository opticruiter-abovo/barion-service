import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class QualificationDict extends Model {
	id: number;
	qualification_type_hu: string;
	qualification_definition_hu: string;
	qualification_type_en: string;
	qualification_definition_en: string;
	qualification_type_it: string;
	qualification_definition_it: string;
}

QualificationDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		qualification_type_hu: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		qualification_definition_hu: {
			type: DataTypes.TEXT({ length: 'medium' }),
			allowNull: false
		},
		qualification_type_en: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		qualification_definition_en: {
			type: DataTypes.TEXT({ length: 'medium' }),
			allowNull: false
		},
		qualification_type_it: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		qualification_definition_it: {
			type: DataTypes.TEXT({ length: 'medium' }),
			allowNull: false
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_qualification',
		timestamps: false
	}
);

export default QualificationDict;
