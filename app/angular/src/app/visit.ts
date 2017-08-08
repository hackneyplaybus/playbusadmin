import { Project } from "./project"
import { Location } from "./location"


export class Visit {
    visit_id: string;
	family_id: string;
	child_id: string;
	carer_id: string;
	date_attended: string;
	date_recorded: string;
	project_id: string;
	location_id: string;
	session_type: string;

	project: Project;
	location: Location;
}