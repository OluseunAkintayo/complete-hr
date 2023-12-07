import React, { ChangeEvent, Fragment } from "react";
import Header from "../../Header";
import { Input } from "@/components/ui/input";
import List from "./List";
import axios, { AxiosResponse } from "axios";
import { token } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import { Navigate } from "react-router-dom";

const getApplications = async () => {
	const config = {
		url: "jobs/applications",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	try {
		const response: AxiosResponse = await axios.request(config);
		if (response.status === 200) {
			return response;
		} else {
			return { status: false, message: "Error fetching data" };
		}
	} catch (error) {
		if (axios.isAxiosError(error)) return error;
	}
};

const Applications = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
  });

	const [search, setSearch] = React.useState<string>('');

  return (
    <Fragment>
      <Header />
      <div className="bg-gray-100 px-4">
        <div className="h-16 flex items-center gap-4 justify-between max-w-[1280px] mx-auto">
          <h3 className="text-xl">Job Applications</h3>
        </div>
      </div>
      <div className="px-4 mt-4">
        <div className="flex items-center gap-4 justify-between max-w-[1280px] mx-auto">
          <form className="w-full max-w-[400px]" autoComplete="off">
            <Input placeholder="Search..." onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
          </form>
        </div>
      </div>
      <div className="px-4 mt-4">
        <div className="max-w-[1280px] mx-auto">
          {isLoading ? <Loading /> : (
						data && 'data' in data && data.data.status === 1
						? <List search={search} applications={data.data.applications} />
						: data && axios.isAxiosError(data) && data?.response?.data.error.toLowerCase().includes('expired')
							? <Navigate to="/auth/login" />
							: "Server Error, please contact support"
					)}
        </div>
      </div>
    </Fragment>
  );
};

export default Applications;
