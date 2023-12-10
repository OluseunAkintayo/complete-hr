import { BellIcon, Settings2Icon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();
  const logout = (): void => {
    localStorage.clear();
    sessionStorage.clear();
    setTimeout(() => navigate('/auth/login'), 500);
  }

  const location = useLocation();
  return (
    <header className="h-16 shadow px-4">
      <div className="h-full max-w-[1280px] mx-auto flex gap-6 items-center justify-between">
        <Link to="/admin/dashboard">[LOGO]</Link>
        <div className="flex gap-4">
          <Button
            asChild
            className={`rounded-none pb-2 px-1 h-auto bg-transparent text-gray-700 hover:bg-transparent hover:border-b-2 hover:border-b-gray-900 ${
              location.pathname === "/admin/dashboard"
                ? "border-b-2 border-b-gray-900"
                : ""
            }`}
          >
            <Link to="/admin/dashboard">Dashboard</Link>
          </Button>
          <Button
            asChild
            className={`rounded-none pb-2 px-1 h-auto bg-transparent text-gray-700 hover:bg-transparent hover:border-b-2 hover:border-b-gray-900 ${
              location.pathname === "/admin/dashboard/employees"
                ? "border-b-2 border-b-gray-900"
                : ""
            }`}
          >
            <Link to="/admin/dashboard/employees">Employees</Link>
          </Button>
          <Button
            asChild
            className={`rounded-none pb-2 px-1 h-auto bg-transparent text-gray-700 hover:bg-transparent hover:border-b-2 hover:border-b-gray-900 ${
              location.pathname === "/admin/dashboard/jobs"
                ? "border-b-2 border-b-gray-900"
                : ""
            }`}
          >
            <Link to="/admin/dashboard/jobs">Jobs</Link>
          </Button>
          <Button
            asChild
            className={`rounded-none pb-2 px-1 h-auto bg-transparent text-gray-700 hover:bg-transparent hover:border-b-2 hover:border-b-gray-900 ${
              location.pathname === "/admin/dashboard/applications"
                ? "border-b-2 border-b-gray-900"
                : ""
            }`}
          >
            <Link to="/admin/dashboard/applications">Applications</Link>
          </Button>
        </div>
        <div className="right-content flex gap-4 items-center">
          <div className="relative">
            <BellIcon className="animate-pulse cursor-pointer" />
            <div className="absolute -top-1 right-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
            </div>
          </div>
          <Settings2Icon className="cursor-pointer" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* <Button variant="outline">Open</Button> */}
              <Avatar className="cursor-pointer select-none">
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32 -ml-20 mt-1">
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuGroup>
                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500 cursor-pointer" onClick={logout}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
