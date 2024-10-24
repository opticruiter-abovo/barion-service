import { ApiProperty } from "@nestjs/swagger";

export class DictionaryVersionDTO {
	@ApiProperty({
		type: Number,
	})
	id: number;

	@ApiProperty({
		type: Date
	})
	createdAt: Date;

	@ApiProperty({
		type: Date
	})
	updatedAt: Date;

	@ApiProperty({
		type: String,
		maxLength: 50
	})
	dictionary: string;

	@ApiProperty({
		type: Number,
	})
	version: number;
}

export class DictionaryDataDTO {
	@ApiProperty({
		type: String
	})
	dictionary: string;

	@ApiProperty({
		type: Object,
	})
	data: object;
}
