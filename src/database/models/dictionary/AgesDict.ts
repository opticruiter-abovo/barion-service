import { DataTypes, Model } from "sequelize";
import { dictionaryDatabase } from "src/database/connection";

class AgesDict extends Model {
	id: number;
	ages_group: string;
}

AgesDict.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	ages_group: {
		type: DataTypes.STRING(50),
		allowNull: false
	}
}, {
	sequelize: dictionaryDatabase,
	modelName: 'dictionary_db',
	tableName: 'dic_ages',
	timestamps: false
});

export default AgesDict;
