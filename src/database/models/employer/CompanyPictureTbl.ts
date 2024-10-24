import { DataTypes, Model } from "sequelize";
import { employerDatabase } from "src/database/connection";

class CompanyPictureTbl extends Model {
	id: number;
	createdAt: string;
	updatedAt: string;
	companyId: number;
	pictureType: number;
	fileName: string;
	remoteFileName: string;
}

CompanyPictureTbl.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			comment: 'Inner ID',
			field: 'id'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: 'Company Inner ID',
			field: 'company_id'
		},
		pictureType: {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: 'Type of picture (Logo1, Logo2,etc)',
			field: 'picture_type'
		},
		fileName: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null,
			comment: 'Picture file name',
			field: 'file_name'
		},
		remoteFileName: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null,
			comment: 'Picture file name',
			field: 'remote_file_name'
		}
	},
	{
		sequelize: employerDatabase,
		modelName: 'employer_db',
		tableName: 'company_picture_tb', // TODO: Typo in the Database!
		// tableName: 'company_picture_tbl', // TODO: Typo in the Database!
		timestamps: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
);

// CompanyPictureTbl.sync(config.NODE_ENV === "production" ? {} : {});

export default CompanyPictureTbl;
