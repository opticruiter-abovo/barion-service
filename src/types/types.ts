import { ApiProperty } from "@nestjs/swagger";

export class Geometry {
	@ApiProperty()
	type: 'Point' | 'LineString' | 'Polygon' | 'Polyline';

	@ApiProperty({
		isArray: true,
		description: 'Geometry type',
	})
	coordinates: [ number, number ]
}

export class UserCredential {
	@ApiProperty({
		type: String,
		required: true,
		description: 'User auth id',
	})
	user_id: string

	@ApiProperty({
		type: String,
		required: true,
		description: 'User token',
	})
	token: string;
}

export type SupportedLanguage = 'en' | 'hu' | 'it';

export enum CompanyPictureType {
	COVER_PICTURE = 1,
	TEAM_PICTURE = 2,
}
