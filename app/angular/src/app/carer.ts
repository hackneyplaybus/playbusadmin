export class Carer {
    family_id: string;
	carer_id: string;
	name: string;
	first_name: string;
	last_name: string;
	date_of_birth: string;
	ethnicity: string;
	gender: string;
	address: string;
	postal_code: string;
	city: string;
	latitude: number;
	longitude: number;
	phone: string;
	email: string;
	benefits: string[];
	benefits_other: string;
	lone_carer: boolean;
	first_seen: string;
	photo_consent: boolean;
	info_consent: boolean;
	number_of_visits: number;
	temporary_accommodation: boolean;
	child_relationship: string;
}