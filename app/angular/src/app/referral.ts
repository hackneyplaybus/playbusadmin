import { Service } from "./service"

export class Referral {
    referral_id: string;
	family_id: string;
	referred_by: string;
	service_id: string;
	date_referred: string;
	date_recorded: string;

	service: Service;
}