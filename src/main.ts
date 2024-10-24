import * as dotenv from 'dotenv';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe, VersioningType } from '@nestjs/common';
import { json } from 'express';

import { errorConverter, errorHandler, FirebaseJWTAuthMiddleware } from './middleware';
import { AppModule } from "./modules/app.module";
import { connectDB } from "./database";
import config from "./config/config";

dotenv.config();

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableVersioning({
		type: VersioningType.URI,
		prefix: 'v',
		defaultVersion: '1'
	}).setGlobalPrefix('payment-service');

	/*
	app.enableCors({
		origin: [/^https?:\/\/(.*\.)?abovo\.dev$/, /^https?:\/\/(.*\.)?localhost:[0-9]+$/],
		credentials: true,
		allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
	});
	*/


	app.enableCors({
		origin: '*', 
		credentials: true,
		allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  
	});

	//@ts-ignore
	/*
	app.use((req, res, next) => {
		console.log('Request Method:', req.method);
		console.log('Request URL:', req.originalUrl);
		console.log('Request Headers:', req.headers);
		console.log('Request Origin:', req.headers.origin);
		next();
	});
	*/

	const swaggerConfig = new DocumentBuilder()
		.setTitle('Abovo B2B Payment Service')
		.setDescription('Abovo B2B Payment service.')
		.setVersion('1.0')
		.addBearerAuth(
			{ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
			'access-token')
		.build();
	const document = SwaggerModule.createDocument(app, swaggerConfig);
	SwaggerModule.setup('api-docs', app, document);

	app.useGlobalPipes(new ValidationPipe);
	app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))
	app.use(json({ limit: '50mb' }));

	app.use(new FirebaseJWTAuthMiddleware().use);
	app.use(errorConverter);
	app.use(errorHandler);

	await connectDB();

	await app.listen( config.PORT || 3012);
	console.log('server is listening on port:', config.PORT)
}

bootstrap();
