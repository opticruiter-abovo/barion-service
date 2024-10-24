import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from '../../connection';

class ZipCode2Hu extends Model {
}

ZipCode2Hu.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		settlement: {
			type: DataTypes.STRING,
			allowNull: false
		},
		zip: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		country_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		country_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		slug: {
			type: DataTypes.STRING,
			allowNull: false
		},
		populity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		type: {
			type: DataTypes.STRING(150),
			allowNull: false
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_zip_code2_hu',
		timestamps: false
	}
);

export default ZipCode2Hu;
