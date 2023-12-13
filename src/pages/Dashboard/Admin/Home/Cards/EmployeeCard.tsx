import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { token } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { TrendingUp } from "lucide-react";

const getEmployees = async () => {
  const config = {
    url: "employees",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response: AxiosResponse = await axios.request(config);
    if (response.status === 200 && response.data.status === 1) {
      return response.data;
    } else {
      return { status: 0, message: "Error fetching data" };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) return error;
  }
};

const EmployeeCard = () => {
  const { isLoading, data: users } = useQuery({
    queryKey: ["employees-db"],
    queryFn: getEmployees,
  });

  return (
    <Card className="cursor-pointer hover:bg-gray-50">
      {isLoading ? (
        <>
          <CardHeader className="space-y-4">
            <CardTitle className="flex gap-2 items-center">
              <Skeleton className="h-12 w-12 aspect-square rounded-full bg-gray-400" />
              <Skeleton className="h-6 w-full bg-gray-400" />
            </CardTitle>
            <Skeleton className="h-4 bg-gray-300" />
          </CardHeader>
        </>
      ) : users && users.name === "AxiosError" ? (
        <CardHeader>
          <span className="text-red-600">{users.message}</span>
        </CardHeader>
      ) : (
        users &&
        users.users && (
          <CardHeader className="space-y-4 relative p-4 sm:p-6">
            <CardTitle className="flex gap-2 items-center">
              <span className="text-4xl text-muted-foreground">
                {Math.ceil(users.users.length * Math.random() * 20)}
              </span>
            </CardTitle>
            <span className="flex gap-2 sm:absolute right-4 sm:right-8 top-4">
              <TrendingUp className="text-green-600" size={32} />
              <span className="text-xs font-normal text-green-600">+7.8%</span>
            </span>
            <CardDescription>Active Employees</CardDescription>
          </CardHeader>
        )
      )}
    </Card>
  );
};

export default EmployeeCard;
