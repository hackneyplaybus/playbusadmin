import { Project } from "./project"

export class Location {
    location_id: string;
	name: string;
	description: string;
	address: string;
	postal_code: string;
	city: string;
	country: string;
	latitude: number;
	longitude: number;

	projects: Project[];
}