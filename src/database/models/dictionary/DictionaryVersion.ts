import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class DictionaryVersion extends Model {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	dictionary: string;
	version: number;
}

DictionaryVersion.init(
	{
		id: {
			type: DataTypes.INTEGER({ length: 10 }),
			autoIncrement: true,
			primaryKey: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		dictionary: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		version: {
			type: DataTypes.DECIMAL(),
			allowNull: true
		},
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dictionary_version_tbl',
		timestamps: false
	}
);

export default DictionaryVersion;
