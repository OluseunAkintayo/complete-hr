import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Leave = () => {
  return (
    <Card style={{ height: "calc(100vh - 320px)", overflowY: "auto" }}>
      <CardHeader>
        <CardTitle>Leave Management</CardTitle>
        <CardDescription>It's time to take some deserved rest.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="annual" className="w-full flex items-start gap-4">
          <TabsList className="flex flex-col items-start justify-start w-[240px] h-full space-y-2 p-3">
            <TabsTrigger value="annual" className="justify-start w-full">
              Annual Leave
            </TabsTrigger>
            <TabsTrigger value="study" className="justify-start w-full">
              Study Leave
            </TabsTrigger>
            <TabsTrigger value="sick" className="justify-start w-full">
              Sick Leave
            </TabsTrigger>
            <TabsTrigger value="compassionate" className="justify-start w-full">
              Compassionate Leave
            </TabsTrigger>
          </TabsList>
          <TabsContent value="annual" className="mt-0 w-full">
            <Card className="border-none p-0">
              <CardHeader className="py-0">
                <CardTitle>
                  <div className="flex items-center justify-between">
                    <span>Annual Leave</span>
                    {/* <Button className="uppercase">Initiate Leave</Button> */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>CREATE PLAN</Button>
                      </DialogTrigger>
                      <DialogContent className="">
                        <DialogHeader className="pt-4">
                          <DialogTitle>New Leave Plan</DialogTitle>
                          <DialogDescription>
                            Create your leave plan here. Click save when you're
                            done.
                          </DialogDescription>
                        </DialogHeader>
                        <form className="grid gap-6 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="plan_name">Plan Name</Label>
                            <Input id="plan_name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="relief_staff">Relief Staff</Label>
                            <Input id="relief_staff" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="start_date">Start Date</Label>
                            <Input id="start_date" type="date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="end_date">End Date</Label>
                            <Input id="end_date" type="date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="leave_notes">End Date</Label>
                            <Input id="leave_notes" type="file" accept="" />
                          </div>
                          <Button type="submit" className="w-full">
                            Save
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex gap-8">
                  <p>Entitled: 28</p>
                  <span>|</span>
                  <p>Used: 16</p>
                  <span>|</span>
                  <p>Days Left: 12</p>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold text-lg text-gray-500 mb-4">
                    Plans
                  </h4>
                  <div className="space-y-4">
                    <div className="border rounded-sm p-4 hover:bg-gray-100">
                      <div className="flex items-center gap-4 justify-between">
                        <div className="grid space-y-2">
                          <span className="text-lg">Plan Name</span>
                          <span className="uppercase font-light text-sm">
                            Plan status
                          </span>
                          <span>Date: 17 December 2023 - 31 December 2023</span>
                        </div>
                      </div>
                      <div className="space-x-4 mt-4">
                        <Button className="w-24">Edit</Button>
                        <Button variant="destructive" className="w-24">
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className="border rounded-sm p-4 hover:bg-gray-100">
                      <div className="flex items-center gap-4 justify-between">
                        <div className="grid space-y-2">
                          <span className="text-lg">Plan Name</span>
                          <span className="uppercase font-light text-sm">
                            Plan status
                          </span>
                          <span>Date: 17 December 2023 - 31 December 2023</span>
                        </div>
                      </div>
                      <div className="space-x-4 mt-4">
                        <Button className="w-24">Edit</Button>
                        <Button variant="destructive" className="w-24">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="study">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1"></div>
                <div className="space-y-1"></div>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="sick">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1"></div>
                <div className="space-y-1"></div>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="compassionate">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1"></div>
                <div className="space-y-1"></div>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
    </Card>
  );
};

export default Leave;
