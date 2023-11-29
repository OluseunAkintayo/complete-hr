import { BellIcon, Settings2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="h-16 shadow px-4">
      <div className="h-full max-w-[1280px] mx-auto flex gap-6 items-center justify-between">
        <Link to="/admin/dashboard">[LOGO]</Link>
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
          <Avatar className="cursor-pointer select-none">
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
