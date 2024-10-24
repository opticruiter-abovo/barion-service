import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentController } from 'src/controllers/paymentController';
import { PaymentService } from 'src/services/payment/payment.service';

@Module({
	imports: [ ConfigModule.forRoot({ cache: true }) ],
	controllers: [ PaymentController ],
	providers: [ PaymentService],
})

export class PaymentModule {}
