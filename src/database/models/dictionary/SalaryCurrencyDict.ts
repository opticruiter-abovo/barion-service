import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class SalaryCurrencyDict extends Model {
	id: number;
	currency_code: string;
	currency_name_hu: string;
}

SalaryCurrencyDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		currency_code: {
			type: DataTypes.CHAR(5),
			allowNull: true,
			defaultValue: null
		},
		currency_name_hu: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_salary_currency',
		timestamps: false
	}
);

export default SalaryCurrencyDict;
