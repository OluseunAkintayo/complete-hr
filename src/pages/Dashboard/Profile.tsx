import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LoggedInUser } from "@/utils/types";

interface ProfileProps {
  user: LoggedInUser | null;
}

export default function Profile({ user }: ProfileProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:items-center gap-4 md:flex-row">
          <Avatar className="w-20 h-20">
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback className="font-semibold text-2xl uppercase">{user && (user?.email.split('')[0] + user?.email.split('')[1])}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <CardTitle>Welcome, <span className="capitalize">{user?.username}</span>!</CardTitle>
            <CardDescription>
              Welcome to <strong>CompleteHR</strong>. Manage your profile, complete tasks, and report issues.
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
