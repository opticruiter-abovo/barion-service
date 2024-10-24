import { config } from 'dotenv';

const configFile = `./.env`;
config({ path: configFile });

const {
	PORT,
	JWT_SECRET,
	NODE_ENV,
	MESSAGE_BROKER_URL,
	EMPLOYEE_DB_DATABASE,
	EMPLOYEE_DB_USERNAME,
	EMPLOYEE_DB_PASSWORD,
	EMPLOYER_DB_DATABASE,
	EMPLOYER_DB_USERNAME,
	EMPLOYER_DB_PASSWORD,
	DICTIONARY_DB_DATABASE,
	DICTIONARY_DB_USERNAME,
	DICTIONARY_DB_PASSWORD,
	STATISTICS_DB_DATABASE,
	STATISTICS_DB_USERNAME,
	STATISTICS_DB_PASSWORD,
	DB_HOST,
	DB_PORT,
	FIREBASE_SERVICE_ACCOUNT,
	TOKEN_EXPIRATION_HOURS,
	AWS_S3_ACCESS_KEY_ID,
	AWS_S3_SECRET_ACCESS_KEY,
	AWS_S3_BUCKET
} = process.env;

export default {
	PORT,
	JWT_SECRET,
	NODE_ENV,
	env: NODE_ENV,
	msgBrokerURL: MESSAGE_BROKER_URL,
	EMPLOYEE_DB_DATABASE,
	EMPLOYEE_DB_USERNAME,
	EMPLOYEE_DB_PASSWORD,
	EMPLOYER_DB_DATABASE,
	EMPLOYER_DB_USERNAME,
	EMPLOYER_DB_PASSWORD,
	DICTIONARY_DB_DATABASE,
	DICTIONARY_DB_USERNAME,
	DICTIONARY_DB_PASSWORD,
	STATISTICS_DB_DATABASE,
	STATISTICS_DB_USERNAME,
	STATISTICS_DB_PASSWORD,
	DB_HOST,
	DB_PORT,
	FIREBASE_SERVICE_ACCOUNT,
	TOKEN_EXPIRATION_HOURS,
	AWS_S3_ACCESS_KEY_ID,
	AWS_S3_SECRET_ACCESS_KEY,
	AWS_S3_BUCKET
};
