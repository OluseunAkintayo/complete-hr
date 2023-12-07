import React from "react";
import { EyeIcon } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
import { Switch } from "@/components/ui/switch";
import { department, designation, grade } from "@/lib/dist";
import { IEmployee } from "@/lib/types";

interface IViewEmployee {
  employee: IEmployee;
}

const ViewEmployee = ({ employee }: IViewEmployee) => {
  const [disabled, setDisabled] = React.useState<boolean>(true);
  return (
    <Dialog>
      <DialogTrigger>
        <EyeIcon className="text-muted-foreground cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-w-[750px] max-h-[70vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="capitalize sm:text-2xl">
            Employee Overview
          </DialogTitle>
          <DialogDescription>Manage employee data</DialogDescription>
        </DialogHeader>
        <ProfileHeader employee={employee} />
        <div className="flex items-center space-x-2">
          <Switch
            id="edit-mode"
            className="cursor-pointer"
            onCheckedChange={() => setDisabled(prev => !prev)}
          />
          <Label htmlFor="edit-mode" className="cursor-pointer">
            Edit Mode
          </Label>
        </div>
        <div>
          <form autoComplete="off" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstname" className="text-right">
                  First Name
                </Label>
                <Input
                  id="firstname"
                  defaultValue={employee?.firstName}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname" className="text-right">
                  Last Name
                </Label>
                <Input
                  id="firstname"
                  defaultValue={employee?.lastName}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-right">
                  Email Address
                </Label>
                <Input
                  id="email"
                  defaultValue={employee?.email}
                  disabled={disabled}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-right">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  defaultValue={"01234567890"}
                  disabled={disabled}
                />
              </div>
            </div>
            <h4 className="text-xl font-semibold mt-8 mb-4">Employment Info</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="employeeId" className="text-right">
                  Employee ID
                </Label>
                <Input
                  id="employeId"
                  defaultValue={employee.username}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employeeRole" className="text-right">
                  Employee Role
                </Label>
                <Select disabled={disabled}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Fruits</SelectLabel> */}
                      {designation
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((item) => (
                          <SelectItem value={item.value}>
                            {item.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="employeeRole" className="text-right">
                  Department
                </Label>
                <Select disabled={disabled}>
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder={
                        employee.department
                          ? employee.department
                          : "Select department"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Fruits</SelectLabel> */}
                      {department
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((item) => (
                          <SelectItem value={item.value}>
                            {item.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="employeeId" className="text-right">
                  Employee Grade
                </Label>
                <Select disabled={disabled}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Fruits</SelectLabel> */}
                      {grade.map((item) => (
                        <SelectItem value={item.value}>{item.name}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="firstLineManager" className="text-right">
                  Line Manager
                </Label>
                <Input
                  id="firstLineManager"
                  defaultValue={"Nick Jonas"}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondLineManager" className="text-right">
                  Second Line Manager
                </Label>
                <Input
                  id="secondLineManager"
                  defaultValue={"Second Line Manager"}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateAppointed" className="text-right">
                  Appointment Date
                </Label>
                <Input id="dateAppointed" type="date" disabled={disabled} />
              </div>
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button className="w-24">Save</Button>
          {/* <Button className="w-24" variant="outline">close</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewEmployee;
