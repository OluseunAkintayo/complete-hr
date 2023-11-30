import { Fragment } from "react";
import Header from "../../Header";
import { Input } from "@/components/ui/input";
import List from "./List";
import axios, { AxiosResponse } from "axios";
import { token } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import NewEmployee from "./NewEmployee";
import Loading from "./Loading";

const Employees = () => {
  const getEmployees = async () => {
    const config = {
      url: "employees",
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

  const { isPending, error, data, isError } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  console.log({ isPending, error, data, isError });

  return (
    <Fragment>
      <Header />
      <div className="bg-gray-100 px-4">
        <div className="h-16 flex items-center gap-4 justify-between max-w-[1280px] mx-auto">
          <h3 className="">Employees</h3>
        </div>
      </div>
      <div className="px-4 mt-4">
        <div className="flex items-center gap-4 justify-between max-w-[1280px] mx-auto">
          <form className="w-full max-w-[400px]" autoComplete="off">
            <Input placeholder="Search..." />
          </form>
          <NewEmployee />
        </div>
      </div>
      <div className="px-4 mt-4">
        <div className="max-w-[1280px] mx-auto">
          {isPending ? <Loading /> : (
						data && 'data' in data && data.data.status === 1 ? <List users={data.data.users} /> : 'Error retrieving users'
					)}
        </div>
      </div>
    </Fragment>
  );
};

export default Employees;
