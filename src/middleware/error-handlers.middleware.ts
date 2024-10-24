import { ErrorRequestHandler } from "express";
import { ApiError } from "../utils";
import config from "../config/config";

export const errorConverter: ErrorRequestHandler = (err, req, res, next) => {
	let error = err;
	if (!( error instanceof ApiError )) {
		const statusCode =
			error.statusCode ||
			( error instanceof Error ? 400 : 500 ); // Bad Request or Internal Server Error
		const message =
			error.message ||
			( statusCode === 400 ? "Bad Request" : "Internal Server Error" );
		error = new ApiError(statusCode, message, false, err.stack.toString());
	}
	next(error);
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	let { statusCode, message } = err;
	if (config.env['NODE_ENV'] === "production" && !err.isOperational) {
		statusCode = 500; // Internal Server Error
		message = "Internal Server Error";
	}

	res.locals.errorMessage = err.message;

	const response = {
		code: statusCode,
		message,
		...( config.env['NODE_ENV'] === "development" && { stack: err.stack } ),
	};

	if (config.env['NODE_ENV'] === "development") {
		console.error(err);
	}

	res.status(statusCode).json(response);
	next();
};