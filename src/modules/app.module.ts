import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { HealthModule } from "./health.module";
import { PaymentModule } from "./payment.module";
import { DictionaryModule } from "./dictionary.module";

@Module({
	imports: [
		ConfigModule.forRoot({ cache: true }),
		HealthModule,
		PaymentModule,
		DictionaryModule
	],
})

export class AppModule {
}