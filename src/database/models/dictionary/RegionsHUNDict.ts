import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class RegionsHUNDict extends Model {
	id: number;
	region_name: string;
}

RegionsHUNDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		region_name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_regions_hun',
		timestamps: false
	}
);

export default RegionsHUNDict;
