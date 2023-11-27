import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:items-center gap-4 md:flex-row">
          <Avatar className="w-20 h-20">
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback className="font-semibold text-2xl">AN</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <CardTitle>Welcome, Michaelson!</CardTitle>
            <CardDescription>
              Welcome to <strong>CompleteHR</strong>. Manage your profile, complete
              tasks, and report issues.
            </CardDescription>
            <CardDescription>
              Line Manager: <strong>Elijah Michaelson</strong>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
