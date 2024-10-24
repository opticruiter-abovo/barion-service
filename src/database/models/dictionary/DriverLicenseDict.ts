import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class DriverLicenseDict extends Model {
	id: number;
	driver_license_type_hu: string;
	driver_license_definition_hu: string;
	driver_license_type_en: string;
	driver_license_definition_en: string;
	driver_license_type_it: string;
	driver_license_definition_it: string;
}

DriverLicenseDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		driver_license_type_hu: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		driver_license_definition_hu: {
			type: DataTypes.TEXT({ length: 'long' }),
			allowNull: false
		},
		driver_license_type_en: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		driver_license_definition_en: {
			type: DataTypes.TEXT({ length: 'long' }),
			allowNull: false
		},
		driver_license_type_it: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: null
		},
		driver_license_definition_it: {
			type: DataTypes.TEXT({ length: 'long' }),
			allowNull: true,
			defaultValue: null
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_driver_license',
		timestamps: false
	}
);

export default DriverLicenseDict;
