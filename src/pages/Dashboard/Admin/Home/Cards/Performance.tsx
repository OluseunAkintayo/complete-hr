import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TrendingUp } from "lucide-react";
import React from "react";

const Performance = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <Card className="cursor-pointer hover:bg-gray-50">
      {isLoading ? (
        <CardHeader className="space-y-4">
          <CardTitle className="flex gap-2 items-center">
            <Skeleton className="h-12 w-12 aspect-square rounded-full bg-gray-400" />
            <Skeleton className="h-6 w-full bg-gray-400" />
          </CardTitle>
          <Skeleton className="h-4 bg-gray-300" />
        </CardHeader>
      ) : (
        <CardHeader className="space-y-4 relative">
          <CardTitle className="flex gap-2 items-center">
            <span className="text-4xl text-muted-foreground">
              {((Math.random() * 41) + 50).toFixed(2)}%
            </span>
          </CardTitle>
          <span className="flex gap-2 absolute right-4 sm:right-8 top-4">
            <TrendingUp className="text-green-600" size={32} />
            <span className="text-xs font-normal text-green-600">
              +{(Math.random() * 10).toFixed(2)}%
            </span>
          </span>
          <CardDescription>Average Performance</CardDescription>
        </CardHeader>
      )}
    </Card>
  );
};

export default Performance;
