import { DataTypes, Model } from "sequelize";
import { employerDatabase } from "../../connection";

class UserPicture extends Model {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	uid: number;
	file_name: string;
}

UserPicture.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		comment: 'Inner ID'
	},
	uid: {
		type: DataTypes.INTEGER,
		allowNull: false,
		comment: 'User Inner ID'
	},
	file_name: {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null,
		comment: 'Picture file name'
	},
}, {
	sequelize: employerDatabase,
	modelName: 'employer_db',
	tableName: 'user_picture_tbl',
	timestamps: true,
	createdAt: 'createdAt',
	updatedAt: 'updatedAt'
});

export default UserPicture;