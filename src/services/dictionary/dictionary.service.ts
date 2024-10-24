import { Injectable } from "@nestjs/common";
import { DictionaryDataDTO, DictionaryVersionDTO } from "./dictionary.service.dto";
import { ApiError } from "../../utils";
import DictionaryVersion from "../../database/models/dictionary/DictionaryVersion";
import AgesDict from "../../database/models/dictionary/AgesDict";
import BenefitsDict from "../../database/models/dictionary/BenefitsDict";
import CountriesDict from "../../database/models/dictionary/CountriesDict";
import DriverLicenseDict from "../../database/models/dictionary/DriverLicenseDict";
import EmploymentTypeDict from "../../database/models/dictionary/EmploymentTypeDict";
import ExperienceDict from "../../database/models/dictionary/ExperienceDict";
import HobbiesDict from "../../database/models/dictionary/HobbiesDict";
import IndustryDict from "../../database/models/dictionary/IndustryDict";
import InterestsDict from "../../database/models/dictionary/InterestsDict";
import LanguagesDict from "../../database/models/dictionary/LanguagesDict";
import PaymentDict from "../../database/models/dictionary/PaymentDict";
import PhoneCodeDict from "../../database/models/dictionary/PhoneCodeDict";
import ProfessionsDict from "../../database/models/dictionary/ProfessionsDict";
import QualificationDict from "../../database/models/dictionary/QualificationDict";
import RegionsHUNDict from "../../database/models/dictionary/RegionsHUNDict";
import SalaryCurrencyDict from "../../database/models/dictionary/SalaryCurrencyDict";
import WagePeriodDict from "../../database/models/dictionary/WagePeriodDict";
import WorkplaceBenefitsDict from "../../database/models/dictionary/WorkplaceBenefitsDict";
import ZipCode2Hu from "../../database/models/employer/ZipCode2Hu";
import ZipCode1Hu from "../../database/models/employer/ZipCode1Hu";
import WorkplaceDict from "../../database/models/dictionary/WorkplaceDict";
import WorkScheduleDict from "../../database/models/dictionary/WorkScheduleDict";
import CountryCallingCodeDict from "../../database/models/dictionary/CountryCallingCodeDict";

@Injectable()
export class DictionaryService {
	private dictionaries = {
		dic_ages: AgesDict,

		dic_benefits: BenefitsDict,

		dic_countries: CountriesDict,

		dic_country_calling_code: CountryCallingCodeDict,

		dic_driver_license: DriverLicenseDict,

		dic_employment_type: EmploymentTypeDict,

		dic_experience: ExperienceDict,

		dic_hobbies: HobbiesDict,

		dic_industries: IndustryDict,

		dic_interests: InterestsDict,

		dic_languages: LanguagesDict,

		dic_payment: PaymentDict,

		dic_phone_code: PhoneCodeDict,

		dic_professions: ProfessionsDict,

		dic_qualification: QualificationDict,

		dic_regions_hun: RegionsHUNDict,

		dic_salary_currency: SalaryCurrencyDict,

		dic_wage_period: WagePeriodDict,

		dic_workplace: WorkplaceDict,

		dic_workplace_benefits: WorkplaceBenefitsDict,

		dic_work_schedule: WorkScheduleDict,

		dic_zip_code2_hu: ZipCode2Hu,

		dic_zip_code_hu: ZipCode1Hu,
	};

	async getDictionaryById(dictionary: string[] | string): Promise<DictionaryDataDTO[]> {
		const result: DictionaryDataDTO[] = [];

		if (typeof dictionary !== 'string') {
			for (const dictionaryKey of dictionary) {
				result.push(await this.getCurrentDictionary(dictionaryKey));
			}

			return result;
		}

		result.push(await this.getCurrentDictionary(dictionary as string));

		return result;
	}

	async getDictionaryVersions(): Promise<DictionaryVersionDTO[]> {
		const data = await DictionaryVersion.findAll();

		if (data.length < 1) {
			throw new ApiError(400, 'Error fetching dictionaryVersions');
		}

		const processedData: DictionaryVersionDTO[] = [];

		data.forEach(dto => {
			processedData.push(dto.toJSON<DictionaryVersionDTO>());
		});

		return processedData;
	}

	private async getCurrentDictionary(dictionaryKey: string) {
		try {
			const data = [];
			( await this.dictionaries[dictionaryKey].findAll() ).forEach((currentData: any) => {
				data.push(currentData.toJSON())
			});

			return { dictionary: dictionaryKey, data };
		} catch (error: any) {
			throw new ApiError(404, `${ dictionaryKey } not found`);
		}
	}
}