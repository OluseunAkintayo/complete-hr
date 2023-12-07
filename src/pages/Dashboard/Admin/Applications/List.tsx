import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IApplication } from "@/utils/types";
import ViewApplication from "./ViewApplication";
import React from "react";
import dayjs from "dayjs";

interface ListProps {
  applications: IApplication[];
  search: string;
}

const List = ({ applications, search }: ListProps) => {
  const [openApplication, setOpenApplication] = React.useState<boolean>(false);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead><div className="w-32 min-w-32">Applicant Name</div></TableHead>
          <TableHead>Email Address</TableHead>
          <TableHead>Job Applied For</TableHead>
          <TableHead>Application Date</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications
          .filter((application) => {
            if (
              (application.firstName + " " + application.lastName)
                .toLowerCase()
                .includes(search.trim().toLowerCase())
            ) {
              return application;
            }
            if (
              application.email && application.email.toLowerCase().includes(search.trim().toLowerCase())
            ) {
              return application;
            }
            if (
              application.jobAppliedFor && application.jobAppliedFor.toLowerCase().includes(search.trim().toLowerCase())
            ) {
              return application;
            }
            if (
              application.phone && application.phone.toString().toLowerCase().includes(search.trim().toLowerCase())
            ) {
              return application;
            }
          })
          .map((application, i) => (
            <TableRow key={application.firstName + application.lastName + i}>
              <TableCell className="font-light capitalize">
                {application.firstName + " " + application.lastName}
              </TableCell>
              <TableCell className="font-light">{application.email}</TableCell>
              <TableCell className="font-light">{application.jobAppliedFor}</TableCell>
              <TableCell className="font-light">{dayjs(application.createdAt).format('DD/MM/YYYY')}</TableCell>
              <TableCell className="font-light text-center">[STATUS]</TableCell>
              <TableCell className="flex justify-center">
                <ViewApplication application={application} open={openApplication} setOpenApplication={() => setOpenApplication(prev => !prev)} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default List;
