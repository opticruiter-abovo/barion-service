import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from '../../connection';

class ZipCode1Hu extends Model {
}

ZipCode1Hu.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		zip_code: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		settlement: {
			type: DataTypes.STRING,
			allowNull: false
		},
		country_name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_zip_code_hu',
		timestamps: false
	}
);

export default ZipCode1Hu;
