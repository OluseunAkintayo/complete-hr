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
import { TrendingDown } from "lucide-react";

const getApplications = async () => {
  const config = {
    url: "jobs/applications",
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

const ApplicationsCard = () => {
  const { isLoading, data: applications } = useQuery({
    queryKey: ["apllications-list"],
    queryFn: getApplications,
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
      ) : applications && applications.name === "AxiosError" ? (
        <CardHeader>
          <span className="text-red-600">{applications.message}</span>
        </CardHeader>
      ) : (
        applications &&
        applications.applications && (
          <CardHeader className="space-y-4 relative">
            <CardTitle className="flex gap-2 items-center">
              <span className="text-4xl text-muted-foreground">
                {Math.ceil(applications.applications.length * Math.random() * 20)}
              </span>
            </CardTitle>
            <span className="flex gap-2 absolute right-4 sm:right-8 top-4">
              <TrendingDown className="text-red-600" size={32} />
              <span className="text-xs font-normal text-red-600">+{(Math.random() * 10).toFixed(2)}%</span>
            </span>
            <CardDescription>Pending Applications</CardDescription>
          </CardHeader>
        )
      )}
    </Card>
  );
};

export default ApplicationsCard;
