import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DictionaryController } from "../controllers/dictionaryController";
import { DictionaryService } from "../services/dictionary";

@Module({
	imports: [ ConfigModule.forRoot({ cache: true }) ],
	controllers: [ DictionaryController ],
	providers: [ DictionaryService ],
})

export class DictionaryModule {
}
