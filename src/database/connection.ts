import { Sequelize } from "sequelize";
import * as process from "node:process";
import config from "../config/config";

export const employeeDatabase = new Sequelize({
	dialect: "mysql",
	host: config.DB_HOST,
	port: Number(config.DB_PORT),
	database: config.EMPLOYEE_DB_DATABASE,
	username: config.EMPLOYEE_DB_USERNAME,
	password: config.EMPLOYEE_DB_PASSWORD,
});

export const employerDatabase = new Sequelize({
	dialect: "mysql",
	host: config.DB_HOST,
	port: Number(config.DB_PORT),
	database: config.EMPLOYER_DB_DATABASE,
	username: config.EMPLOYER_DB_USERNAME,
	password: config.EMPLOYER_DB_PASSWORD,
});

export const dictionaryDatabase = new Sequelize({
	dialect: "mysql",
	host: config.DB_HOST,
	port: Number(config.DB_PORT),
	database: config.DICTIONARY_DB_DATABASE,
	username: config.DICTIONARY_DB_USERNAME,
	password: config.DICTIONARY_DB_PASSWORD,
});


export const connectDB = async () => {
	try {
		console.info("Connecting to database...");
		await employeeDatabase.authenticate();
		await employerDatabase.authenticate();
		await dictionaryDatabase.authenticate();
		console.info("Database connected");
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};
