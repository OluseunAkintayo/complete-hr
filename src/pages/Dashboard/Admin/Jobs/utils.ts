import * as yup from 'yup';

export const JobSchema = yup.object().shape({
  title: yup.string().required('This is a required field'),
	isOpen: yup.string().required('This is a required field'),
	yearsOfExperience: yup.number().typeError('Field value must be a number').integer().required('This is a required field'),
	description: yup.string().required('This is a required field'),
	duties: yup.string().required('This is a required field'),
	qualifications: yup.string().required('This is a required field'),
	skills: yup.string().required('This is a required field'),
	end_date: yup.string().required('This is a required field'),
});

export interface INewJob {
	title: string;
	isOpen: string;
	yearsOfExperience:number;
	description: string;
	duties: string;
	qualifications: string;
	skills: string;
	end_date: string;
}
