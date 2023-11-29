export interface LoggedInUser {
	firstName: string;
	lastName: string;
	username: string;
	age: number;
	isAdmin?: boolean;
	email: string;
	department: string;
	supervisor?: string;
	suboordinates?: string;
	rank?: string;
}
