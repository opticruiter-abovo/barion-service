import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class ZipCode1Hu extends Model {
	id: number;
	zip_code: number;
	settlement: string;
	country_name: string;
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
