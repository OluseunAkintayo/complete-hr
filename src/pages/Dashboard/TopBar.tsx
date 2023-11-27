import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"


const Topbar = () => {
	return (
		<div className="px-4 h-16 flex items-center justify-center">
			<div className="w-full max-w-[1280px] mx-auto flex items-center gap-4 justify-between">
				<Link to="/dashboard">Home</Link>
				<div className="flex gap-1 items-center">
					<Button asChild className="uppercase px-2 h-auto" variant="link">
						<Link to="/dashboard/settings">Settings</Link>
					</Button>
					<span className="text-gray-600">|</span>
					<Button asChild className="uppercase px-2 h-auto" variant="link">
						<Link to="/auth/login">Logout</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Topbar;