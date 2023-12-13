import { Fragment } from "react";
import Header from "../../Header";
import EmployeeCard from "./Cards/EmployeeCard";
import ApplicationsCard from "./Cards/ApplicationsCard";
import JobsCard from "./Cards/JobsCard";
import Performance from "./Cards/Performance";
import EmployeeChartII from "./Charts/EmployeeChartII";
import EmployeeChart from "./Charts/EmployeeChart";


const Admin = () => {
	return (
		<Fragment>
			<Header />
			<main className="px-4">
				<div className="max-w-[1280px] mx-auto">
					<h2 className="text-2xl my-4">Dashboard</h2>
					<div className="grid gap-4 sm:gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4">
						<EmployeeCard />
						<ApplicationsCard />
						<JobsCard />
						<Performance />
					</div>
					<div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2">
						<EmployeeChartII />
						<EmployeeChart />
					</div>
				</div>
			</main>
		</Fragment>
	)
}

export default Admin;
