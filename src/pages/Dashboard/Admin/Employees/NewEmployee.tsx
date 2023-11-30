import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const managers = [
  {
    value: "Oludare Drey",
    label: "Oludare Drey",
  },
  {
    value: "Nick Michaelson",
    label: "Nick Michaelson",
  },
  {
    value: "Jon Max",
    label: "John Max",
  },
  {
    value: "Thomas Partey",
    label: "Thomas Partey",
  },
  {
    value: "Elon Miller",
    label: "Elon Miller",
  },
  {
    value: "Duff Hardy",
    label: "Duff Hardy",
  },
];

const managersII = [
  {
    value: "Levi Jones",
    label: "Levi Jones",
  },
  {
    value: "Carl Johnson",
    label: "Carl Johnson",
  },
  {
    value: "Leah Roberts",
    label: "Leah Roberts",
  },
  {
    value: "Ed Snowball",
    label: "Ed Snowball",
  },
];

const NewEmployee = () => {
  const [openLineManager, setOpenLineManager] = React.useState(false);
  const [openLineManagerII, setOpenLineManagerII] = React.useState(false);
  const [managerI, setManagerI] = React.useState<string>("");
  const [managerII, setManagerII] = React.useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="uppercase">New Employee</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[750px] max-h-[70vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>New Employee Profile</DialogTitle>
          <DialogDescription>
            {" "}
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" autoComplete="off">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstname" className="text-right">
                First Name
              </Label>
              <Input id="firstname" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="othername" className="text-right">
                Other Name
              </Label>
              <Input id="othername" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastname" className="text-right">
                Last Name
              </Label>
              <Input id="lastname" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input id="phone" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-right">
              Email Address
            </Label>
            <Input id="name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-right">
              Residential Address
            </Label>
            <Input id="name" />
          </div>
          <h4 className="text-xl font-semibold my-4">Work Details</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-right">
                Designation
              </Label>
              <Input id="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-right">
                Unit
              </Label>
              <Input id="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-right">
                Line Manager
              </Label>
              <br />
              <Popover open={openLineManager} onOpenChange={setOpenLineManager}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openLineManager}
                    className="w-full justify-between"
                  >
                    {managerI
                      ? managers.find((manager) => manager.value === managerI)
                          ?.label
                      : "Select..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>No results.</CommandEmpty>
                    <CommandGroup>
                      {managers.map((manager) => (
                        <CommandItem
                          key={manager.value}
                          value={manager.value}
                          onSelect={(currentValue) => {
                            setManagerI(
                              currentValue === managerI ? "" : currentValue
                            );
                            setOpenLineManager(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              managerI === manager.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {manager.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-right">
                Second Line Manager
              </Label>
              <br />
              <Popover
                open={openLineManagerII}
                onOpenChange={setOpenLineManagerII}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openLineManagerII}
                    className="w-full justify-between"
                  >
                    {managerII
                      ? managersII.find(
                          (manager) => manager.value === managerII
                        )?.label
                      : "Select..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>No results.</CommandEmpty>
                    <CommandGroup>
                      {managersII.map((manager) => (
                        <CommandItem
                          key={manager.value}
                          value={manager.value}
                          onSelect={(currentValue) => {
                            setManagerII(
                              currentValue === managerII ? "" : currentValue
                            );
                            setOpenLineManagerII(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              managerII === manager.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {manager.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button type="submit" className="px-12">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewEmployee;
