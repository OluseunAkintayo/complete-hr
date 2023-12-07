import { IApplication } from "@/utils/types";
import { EyeIcon, Loader, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import dayjs from "dayjs";
import React from "react";

interface IViewApplication {
  application: IApplication;
  open: boolean;
  setOpenApplication: () => void;
}

const ViewApplication = ({ application, open, setOpenApplication }: IViewApplication) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const editApplication = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };
  
  return (
    <Dialog onOpenChange={setOpenApplication} open={open}>
      <DialogTrigger>
        <EyeIcon className="text-muted-foreground cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-w-[750px] max-h-[70vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="capitalize sm:text-2xl">
            Application Overview
          </DialogTitle>
          <DialogDescription>Manage application data</DialogDescription>
        </DialogHeader>
        <div>
          <div className="mt-6">
            <h3 className="mb-4 text-xl capitalize font-semibold text-gray-500 flex gap-3">
              <User2 />
              {application.firstName + " " + application.lastName}
            </h3>
            <Separator className="mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="">
                <Label>Role Applied For:</Label>
                <p>{application.jobAppliedFor}</p>
              </div>
              <div className="">
                <Label>Email Address:</Label>
                <p>{application.email}</p>
              </div>
              <div className="">
                <Label>Residential Address:</Label>
                <p>{application.address}</p>
              </div>
              <div className="">
                <Label>Location:</Label>
                <p>{application.location}</p>
              </div>
              <div className="">
                <Label>Phone:</Label>
                <p>(+234) - {application.phone}</p>
              </div>
              <div className="">
                <Label>Professional Qualifications:</Label>
                <p>{application.proffessional_qualifications}</p>
              </div>
              <div className="">
                <Label>Skills:</Label>
                <p>{application.skills}</p>
              </div>
              <div className="">
                <Label>Total Years of Experience:</Label>
                <p>{application.total_years_of_experience}</p>
              </div>
              <div className="">
                <Label>Github / Portfolio Profile:</Label>
                <p>
                  <a
                    href="https://github.com"
                    target="_blank"
                    className="text-gray-400 hover:text-red-600"
                  >
                    https://github.com
                  </a>
                </p>
              </div>
              <div className="">
                <Label>Application Status:</Label>
                <p>Pending</p>
              </div>
              <div className="">
                <Label>Application Date:</Label>
                <p>
                  {dayjs(application.createdAt).format(
                    "ddd, MMM D, YYYY h:mm A"
                  )}
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-2 mb-8">
              <Label>Application Verdict</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select verdict" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Archive">Archive</SelectItem>
                    <SelectItem value="in view">Keep in view</SelectItem>
                    <SelectItem value="First interview">
                      First interview
                    </SelectItem>
                    <SelectItem value="Second interview">
                      Second interview
                    </SelectItem>
                    <SelectItem value="Proceed to hire">
                      Proceed to hire
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            className="w-32"
            disabled={isLoading}
            onClick={editApplication}
          >
            {isLoading ? <Loader className="animate-spin" /> : "Save"}
          </Button>
          {/* <Button className="w-24" variant="outline">close</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewApplication;
