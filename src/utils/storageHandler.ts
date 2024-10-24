import {
	GetObjectCommand,
	GetObjectCommandInput,
	PutObjectCommand,
	PutObjectCommandInput,
	S3Client
} from "@aws-sdk/client-s3";
import { v4 as uuIdv4 } from "uuid";
import config from "../config/config";
import { PictureDTO } from "../services/jobs/jobs.service.dto";

export class StorageHandler {
	private static s3Client: S3Client = new S3Client({
		region: 'eu-central-1',
		credentials: {
			accessKeyId: config.AWS_S3_ACCESS_KEY_ID,
			secretAccessKey: config.AWS_S3_SECRET_ACCESS_KEY,
		}
	});

	static async savePictureToStorage(coverPicture: PictureDTO): Promise<string> {
		const remoteFileName = uuIdv4();

		const params: PutObjectCommandInput = {
			Bucket: config.AWS_S3_BUCKET,
			Key: remoteFileName,
			Body: Buffer.from(coverPicture.data),
		};

		const command = new PutObjectCommand(params);

		await this.s3Client.send(command);

		return remoteFileName;
	}

	static async getPictureFromStorage(name: string): Promise<string> {
		const params: GetObjectCommandInput = { Bucket: config.AWS_S3_BUCKET, Key: name };

		const command = new GetObjectCommand(params);

		return ( await this.s3Client.send(command) ).Body.transformToString();
	}
}
