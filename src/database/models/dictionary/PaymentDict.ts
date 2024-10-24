import { DataTypes, Model } from 'sequelize';
import { dictionaryDatabase } from 'src/database/connection';

class PaymentDict extends Model {
	id: number;
	payment_methods_name_hu: string;
	payment_methods_name_en: string;
	payment_methods_name_it: string;
}

PaymentDict.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		payment_methods_name_hu: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		payment_methods_name_en: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		payment_methods_name_it: {
			type: DataTypes.STRING(150),
			allowNull: true,
			defaultValue: null
		}
	},
	{
		sequelize: dictionaryDatabase,
		modelName: 'dictionary_db',
		tableName: 'dic_payment',
		timestamps: false
	}
);

export default PaymentDict;
