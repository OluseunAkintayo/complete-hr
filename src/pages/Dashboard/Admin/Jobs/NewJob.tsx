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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { INewJob, JobSchema } from "./utils";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Error from "./Error";
import { cn, token } from "@/lib/utils";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { jsonToUrlEncoded } from "@/lib/dist";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import dayjs from "dayjs";

interface NewJobProps {
  open: boolean;
  setOpen: () => void;
  refetch: () => void;
}

const NewJob = ({ open, setOpen, refetch }: NewJobProps) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const form = useForm<INewJob>({ resolver: yupResolver(JobSchema) });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const { toast } = useToast();

  const newJob: SubmitHandler<INewJob> = async (data: INewJob) => {
    setLoading(true);
    const newJobData = jsonToUrlEncoded({
      ...data,
      isOpen: data.isOpen === "active" ? true : false,
      endDate: new Date(data.end_date).toISOString(),
    });

    const config: AxiosRequestConfig = {
      method: "POST",
      url: "jobs/applications",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: newJobData,
    };

    try {
      const response: AxiosResponse = await axios.request(config);
      if (response.status === 200 || (201 && response.data.status === 1)) {
        setLoading(false);
        refetch();
        toast({
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
          title: "Success!",
          description: "Job created successfully. Updating jobs...",
          duration: 5000,
        });
        setOpen();
        reset();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("ERROR", error);
        toast({
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
          title: "Something went wrong!",
          description: "Error creating job at this time.",
          duration: 20000,
        });
        setLoading(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="uppercase">New Job</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[750px] max-h-[70vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>New Job</DialogTitle>
          <DialogDescription>Add a new job</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="grid gap-4 py-4"
            autoComplete="off"
            onSubmit={handleSubmit(newJob)}
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <FormField
                  control={control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title</FormLabel>
                      <Input
                        id="title"
                        name="title"
                        onChange={field.onChange}
                        value={field.value}
                      />
                    </FormItem>
                  )}
                />
                {errors.title?.message && (
                  <Error message={errors.title.message} />
                )}
              </div>
              <div className="space-y-2">
                <FormField
                  control={control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        id="description"
                        onChange={field.onChange}
                        value={field.value}
                      />
                    </FormItem>
                  )}
                />
                {errors.description?.message && (
                  <Error message={errors.description.message} />
                )}
              </div>
              <div className="space-y-2">
                <FormField
                  control={control}
                  name="duties"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duties</FormLabel>
                      <Textarea
                        id="duties"
                        onChange={field.onChange}
                        value={field.value}
                      />
                    </FormItem>
                  )}
                />
                {errors.duties?.message && (
                  <Error message={errors.duties.message} />
                )}
              </div>
              <div className="space-y-2">
                <FormField
                  control={control}
                  name="qualifications"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qualifications</FormLabel>
                      <Textarea
                        id="qualifications"
                        onChange={field.onChange}
                        value={field.value}
                      />
                    </FormItem>
                  )}
                />
                {errors.qualifications?.message && (
                  <Error message={errors.qualifications.message} />
                )}
              </div>
            </div>
            <div className="space-y-2">
              <FormField
                control={control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills</FormLabel>
                    <Textarea
                      id="skills"
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormItem>
                )}
              />
              {errors.skills?.message && (
                <Error message={errors.skills.message} />
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <FormField
                  control={control}
                  name="yearsOfExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Experience Required</FormLabel>
                      <Input
                        type="number"
                        min="1"
                        id="yearsOfExperience"
                        onChange={field.onChange}
                        value={field.value}
                      />
                    </FormItem>
                  )}
                />
                {errors.yearsOfExperience?.message && (
                  <Error message={errors.yearsOfExperience.message} />
                )}
              </div>
              <div className="space-y-2 mb-4">
                <FormField
                  control={form.control}
                  name="isOpen"
                  defaultValue="active"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue="active"
                      >
                        <FormControl>
                          <SelectTrigger className="h-[48px]">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                {errors.isOpen?.message && (
                  <Error message={errors.isOpen.message} />
                )}
              </div>
              <div className="space-y-2 mb-4">
                <FormField
                  control={form.control}
                  name="end_date"
                  defaultValue={dayjs().format("YYYY-MM-DD")}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block">Closing Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                dayjs(field.value).format("MMM D, YYYY")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={new Date(field.value)}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
                {errors.isOpen?.message && (
                  <Error message={errors.isOpen.message} />
                )}
              </div>
            </div>
            <div className="grid place-items-end">
              <Button type="submit" className="px-12 w-32" disabled={loading}>
                {loading ? <Loader className="animate-spin" /> : "Save"}
              </Button>
            </div>
          </form>
        </Form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewJob;
