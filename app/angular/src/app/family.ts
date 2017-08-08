import { Note } from "./note"
import { Child } from "./child"
import { Carer } from "./carer"
import { Visit } from "./Visit"
import { Referral } from "./Referral"

export class Family {
	family_id: string;
	children: Child[];
	carers: Carer[];
	notes: Note[];
	visits: Visit[];
	referrals: Referral[];
}