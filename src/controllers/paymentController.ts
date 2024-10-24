import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SupportedLanguage } from "../types/types";
import { PaymentService } from 'src/services/payment/payment.service';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {} //TODO: Auth


	@Post("initalizeTransaction")
    async initalizeTransaction(@Body() paymentRequest: any) {
        try {
            return await this.paymentService.initalizeTransaction(paymentRequest);
        } catch (error) {
            throw new Error('Failed to initialize transaction.');
        }
    }

	/*
	@Post("initalizeTransaction")
	@ApiBearerAuth('access-token')
	@ApiResponse({
		status: 200,
		description: 'Start Transaction',
		type: GetJobPicturesDTO, //TODO DTO
		isArray: false,
	})
	@ApiResponse({ status: 400, description: 'Bad Request' })
	@ApiResponse({ status: 401, description: 'Unauthorized' })
	@ApiResponse({ status: 403, description: 'Forbidden' })
	@ApiResponse({ status: 404, description: 'Failed to initialize transaction.' })
	async initalizeTransaction(
		@Query('jobId') jobId: number,
	): Promise<GetJobPicturesDTO> {
		return await this.jobsService.getPicturesByJobId(jobId);
	}
	*/
}







/*
	@Get("pictureByCompanyId")
	@ApiBearerAuth('access-token')
	@ApiResponse({
		status: 200,
		description: 'Job picture data',
		type: GetJobPicturesDTO,
		isArray: true,
	})
	@ApiResponse({ status: 400, description: 'Bad Request' })
	@ApiResponse({ status: 401, description: 'Unauthorized' })
	@ApiResponse({ status: 403, description: 'Forbidden' })
	@ApiResponse({ status: 404, description: 'Job not found' })
	async getJobPicturesByCompanyId(
		@Query('companyId') companyId: number,
	): Promise<GetJobPicturesDTO[]> {
		return await this.jobsService.getPicturesByCompanyId(companyId);
	}

	@Get()
	@ApiBearerAuth('access-token')
	@ApiResponse({
		status: 200,
		description: 'Retrieved data',
		type: GetJobDTO,
		isArray: true,
	})
	@ApiResponse({ status: 400, description: 'Bad Request' })
	@ApiResponse({ status: 401, description: 'Unauthorized' })
	@ApiResponse({ status: 403, description: 'Forbidden' })
	@ApiResponse({ status: 404, description: 'Job not found' })
	async getJob(
		@Query('companyId') id: number,
		@Query('isActive') isActive: number = 1,
		@Query('isFinished') isFinished: number = 1,
	): Promise<GetJobDTO[]> {
		return await this.jobsService.getJob(id, isActive, isFinished);
	}

	@Post()
	@ApiBearerAuth('access-token')
	@ApiResponse({ status: 201, description: 'Data entry created successfully', type: JobDTO })
	@ApiResponse({ status: 400, description: 'Bad Request' })
	@ApiResponse({ status: 401, description: 'Unauthorized' })
	@ApiResponse({ status: 403, description: 'Forbidden' })
	@ApiResponse({ status: 404, description: 'Job not found' })
	async saveNewJob(
		@Body() req: AddJobDTO
	): Promise<JobDTO> {
		return await this.jobsService.saveNewJob(req);
	}

	@Put()
	@ApiBearerAuth('access-token')
	@ApiResponse({ status: 200, description: 'Data entry modified successfully', type: JobDTO })
	@ApiResponse({ status: 400, description: 'Bad Request' })
	@ApiResponse({ status: 401, description: 'Unauthorized' })
	@ApiResponse({ status: 403, description: 'Forbidden' })
	@ApiResponse({ status: 404, description: 'Job not found' })
	async updateJob(
		@Body() req: ModifyJobDTO
	): Promise<JobDTO> {
		return await this.jobsService.updateJob(req.jobId, req.data);
	}

	@Delete()
	@ApiBearerAuth('access-token')
	@ApiResponse({ status: 200, description: 'Data entry deleted successfully' })
	@ApiResponse({ status: 400, description: 'Bad Request' })
	@ApiResponse({ status: 401, description: 'Unauthorized' })
	@ApiResponse({ status: 403, description: 'Forbidden' })
	@ApiResponse({ status: 404, description: 'Job not found' })
	async removeJob(
		@Body() req: DeleteJobDTO
	): Promise<void> {
		return await this.jobsService.deleteJob(req.jobId);
	}
*/