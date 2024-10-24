/**
 * ez a middleware megnezi a JWT-t a headerb
 * ha ott a JWT levalidalja a firebase SDK-val
 * vagy tovabb enged, vagy pedig hibat dob.
 **/

import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from 'express';
import admin from "firebase-admin";
import config from "../config/config";

const serviceAccountCredentials = JSON.parse(config.FIREBASE_SERVICE_ACCOUNT);

const firebaseAdmin = admin.initializeApp(
	{ credential: admin.credential.cert(serviceAccountCredentials as admin.ServiceAccount) })

@Injectable()
export class FirebaseJWTAuthMiddleware implements NestMiddleware {
	async use(req: Request, res: Response, next: NextFunction) {
		const token = req.headers.authorization?.split(' ')[1];

		const isHealthCheck = req.path.split('/').pop();

		if (!!isHealthCheck && isHealthCheck.toUpperCase() === 'HEALTH') {
			next();
			return;
		}

		if (!token) {
			return res.status(401).json({ message: 'Authorization token is missing.' });
		}

		if (config.NODE_ENV === 'development' && token.toUpperCase() === 'SKIP') {
			console.log('Skipping token verification');
			req['user'] = { uid: 'string' };
			next();
		} else {
			try {
				req['user'] = await firebaseAdmin.auth().verifyIdToken(token);
				next();
			} catch (error) {
				//TODO hogyan ellenorizzuk hogy lejart - e? A refressher token mindig refresseli..
				res.status(401).json({
					message: 'Authorization token is invalid or expired.',
					error: error.message,
				});
			}
		}
	}
}
