export const designation = [
	{
		name: 'Business Analyst',
		value: 'BA'
	},
	{
		name: 'Software Developer',
		value: 'developer'
	},
	{
		name: 'DevOps Engineer',
		value: 'DevOps'
	},
	{
		name: 'Data Analyst',
		value: 'Data Analyst'
	},
	{
		name: 'Project Manager',
		value: 'Project Manager'
	},
	{
		name: 'Product Designer',
		value: 'Product Designer'
	},
	{
		name: 'Database Administrator',
		value: 'Database Administrator'
	},
	{
		name: 'Server Administrator',
		value: 'Server Administrator'
	},
	{
		name: 'Quality Analyst',
		value: 'Quality Analyst'
	},
];

export const grade = [
	{
		name: 'Intern',
		value: 'Intern'
	},
	{
		name: 'Executive Trainee',
		value: 'Executive Trainee'
	},
	{
		name: 'Assistant Executive Officer',
		value: 'Assistant Executive Officer'
	},
	{
		name: 'Executive Officer',
		value: 'Executive Officer'
	},
	{
		name: 'Senior Executive Officer',
		value: 'Senior Executive Officer'
	},
	{
		name: 'Assistant Manager',
		value: 'Assistant Manager'
	},
	{
		name: 'Deputy Manager',
		value: 'Deputy Manager'
	},
	{
		name: 'Manager',
		value: 'Manager'
	},
];

export const department = [
	{
		name: 'HR',
		value: 'HR'
	},
	{
		name: 'Control',
		value: 'Control'
	},
	{
		name: 'Finance',
		value: 'Finance'
	},
	{
		name: 'IT and Enterprise Apps',
		value: 'IT and Enterprise Apps'
	},
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const jsonToUrlEncoded = (obj: any) => Object.keys(obj).map(i => encodeURIComponent(i) + '=' + encodeURIComponent(obj[i])).join('&');