import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { lastValueFrom } from "rxjs";

import { Op } from "sequelize";

import { ApiError } from "src/utils";

@Injectable()
export class PaymentService {
    private readonly logger = new Logger('PaymentService');
    private readonly apiUrl = '';
    private readonly callbackUrl = '';

    constructor(private httpService: HttpService) {}

    //TransactionDTO
    async initalizeTransaction(request: any): Promise<any> {
        try {
            this.logger.log('transaction initalized');

            const body = {
                POSKey: request.postKey,
                PaymentType: 'Immediate',
                PaymentReuestId: request.PaymentReuestId,
                FundingSources: ['All'],
                Currency: request.currency,
                RedirectUrl: request.redirectUrl,
                CallbackUrl: this.callbackUrl, 
                Transactions: request.transactions
            };

            const response$ = this.httpService.post(this.apiUrl, body);
            const response = await lastValueFrom(response$);
            return await this.processSuccessResponse(response.data);
        } catch (error) {
            return this.processErrorResponse(error.response?.data || error.message);
        }
    };

    async processSuccessResponse(response: any): Promise<any> {
        try {
            this.logger.log('Processing success response');

            const paymentId = response.PaymentId;
            const transactions = response.Transactions;
            const gatewayUrl = response.GatewayUrl;

            return {
                paymentId,
                transactions,
                gatewayUrl,
            };

        } catch (error) {
            this.logger.error('Error processing success response', error);
            throw new ApiError(1, error.message);
        };
    };

    async processErrorResponse(response: any): Promise<any> {
        try {
            this.logger.error('Processiong error response');

            const errors = response.Errors.map((error: any) => ({
                code: error.ErrorCode,
                title: error.Title,
                description: error.Description
            }));

            return { errors };
        } catch (error) {
            this.logger.error('', error);
            throw new ApiError(1, error.message);
        }
    }

}