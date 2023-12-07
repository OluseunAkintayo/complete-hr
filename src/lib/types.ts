export interface ILoggedInUser {
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

export interface IJob {
  id: number;
  title: string;
  isOpen: boolean;
  yearsOfExperience: 2;
  description: string;
  duties: string;
  qualifications: string;
  skills: string;
  end_date: string;
  createdAt: string;
  updatedAt: string;
}

export interface IApplication {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number | string;
  address: string;
  location: string;
  skills: string;
  total_years_of_experience: number;
  proffessional_qualifications: string;
  jobAppliedFor: string;
  createdAt: string;
}