import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ILoggedInUser } from "@/lib/types";
interface ProfileProps {
  employee: ILoggedInUser | null;
}

export default function ProfileHeader({ employee }: ProfileProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:items-center gap-4 md:flex-row">
          {employee && employee.email ? (
            <Avatar className="w-32 h-32 rounded-none">
              <AvatarFallback className="font-semibold text-2xl uppercase rounded-none">
                {employee?.email.split("")[0] + employee?.email.split("")[1]}
              </AvatarFallback>
            </Avatar>
          ) : (
            <Avatar className="w-32 h-32 rounded-none">
              <AvatarFallback className="font-semibold text-2xl uppercase rounded-none">
                CH
              </AvatarFallback>
            </Avatar>
          )}
          <div className="grid gap-1">
            <CardTitle>
              Welcome, <span className="capitalize">{employee?.username}</span>!
            </CardTitle>
            <CardDescription>
              Welcome to <strong>CompleteHR</strong>. Manage your profile,
              complete tasks, and report issues.
            </CardDescription>
            <CardDescription>
              {/* Line Manager: <strong>Elijah Michaelson</strong> */}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
