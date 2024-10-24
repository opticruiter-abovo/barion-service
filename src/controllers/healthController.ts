import { Controller, Get } from "@nestjs/common";
import {
	HealthCheck,
	HealthCheckService,
	HttpHealthIndicator,
	SequelizeHealthIndicator,
	TypeOrmHealthIndicator
} from "@nestjs/terminus";
import config from "../config/config";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("healthCheck")
@Controller('health')
export class HealthController {
	constructor(
		private health: HealthCheckService,
		private db: TypeOrmHealthIndicator,
		private dbOrm: SequelizeHealthIndicator,
		private http: HttpHealthIndicator,
		// @InjectConnection('employeeDatabase')
		// private employeeConnection: Connection,
		// @InjectConnection('employerDatabase')
		// private employerConnection: Connection,
		// @InjectConnection('dictionaryDatabase')
		// private dictionaryConnection: Connection
	) {
	}

	@Get()
	@HealthCheck()
	check() {
		return this.health.check([
			() => this.db.pingCheck(config.DB_HOST),
			// () => this.dbOrm.pingCheck(config.DB_HOST, { connection: this.employeeConnection }),
			// () => this.dbOrm.pingCheck(config.DB_HOST, { connection: this.employerConnection }),
			// () => this.dbOrm.pingCheck(config.DB_HOST, { connection: this.dictionaryConnection }),
			() => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
		]);
	}
}
