import { DataTypes, Model } from 'sequelize';
import { employerDatabase } from "../../connection";

class EmployerJobsPicture extends Model {
}

EmployerJobsPicture.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		comment: 'Inner ID'
	},
	create_time: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW,
		comment: 'Upload time'
	},
	jobs_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
		comment: 'Jobs Advertisements ID'
	},
	picture_type_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
		comment: '1 = logo, 2 = company life picture'
	},
	picture_file_name: {
		type: DataTypes.STRING(200),
		allowNull: false,
		defaultValue: '0',
		comment: 'Picture file name'
	},
	remote_file_name: {
		type: DataTypes.STRING(255),
		allowNull: false,
		defaultValue: '0',
		comment: 'Picture file name on remote'
	},
}, {
	sequelize: employerDatabase,
	modelName: 'employer_db',
	tableName: 'jobs_picture_tbl',
	timestamps: false
});

// EmployerJobsPicture.sync(config.env['NODE_ENV'] === "production" ? {} : {});

export default EmployerJobsPicture;
