import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class ZipCode2Hu extends Model {
	id: number;
	settlement: string;
	zip: number;
	county_id: number;
	county_name: string;
	slug: string;
	populity: number;
	type: string;
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
			allowNull: false,
		},
		zip: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		county_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		county_name: {
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
