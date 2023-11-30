export interface LoggedInUser {
	firstName: string;
	lastName: string;
	username: string;
	age: number;
	isAdmin?: boolean;
	email: string;
	department: string;
	supervisor?: string;
	suboordinates?: [];
	rank?: string;
}

export interface IEmployee {
	firstName: string;
	lastName: string;
	username: string;
	age: number;
	isAdmin?: boolean;
	email: string;
	department: string;
	supervisor?: string;
	suboordinates?: [];
}
