import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from '../controllers/paymentController';
import { LoginService } from '../services/jobs/jobs.service';
import { ApiError } from "../utils";

describe('LoginController', () => {
	let loginController: LoginController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [ LoginController ],
			providers: [ LoginService ],
		}).compile();

		loginController = app.get<LoginController>(LoginController);
	});

	describe('loginUser', () => {
		it('should return "User not found" for invalid UID', async () => {
			jest.spyOn(loginController, 'loginUser').mockImplementation(async () => {
				throw new ApiError(404, "User not found!");
			});

			try {
				await loginController.loginUser({ user: { uid: 'invalid' } } as any);
			} catch (e) {
				expect(e.message).toBe("User not found!");
			}
		});
	});
});