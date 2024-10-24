import bcrypt from 'bcryptjs';

class ApiError extends Error {
	statusCode: number;
	isOperational: boolean;

	constructor(
		statusCode: number,
		message: string | undefined,
		isOperational = true,
		stack = ''
	) {
		console.error(message);
		super(message);
		this.statusCode = statusCode;
		this.isOperational = isOperational;
		if (stack) {
			this.stack = stack;
		} else {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

const encryptPassword = async (password: string) => {
	return await bcrypt.hash(password, 12);
};

const isPasswordMatch = async (password: string, userPassword: string) => {
	return await bcrypt.compare(password, userPassword);
};

export { ApiError, encryptPassword, isPasswordMatch };
