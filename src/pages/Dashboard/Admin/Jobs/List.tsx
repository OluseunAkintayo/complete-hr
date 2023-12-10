import dayjs from "dayjs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IJob } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface ListProps {
  jobs: IJob[];
  search: string;
}

const List = ({ jobs, search }: ListProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-48">Job Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-center">Years of Experience</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead className="text-center">Job Applications</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs
          .filter((job) => {
            if (job.title.toLowerCase().includes(search.trim().toLowerCase()))
              return job;
            if (search.trim().toLowerCase().length === 0) return job;
          })
          .map((job) => (
            <TableRow key={job.id}>
              <TableCell className="font-light uppercase">
                {job.title}
              </TableCell>
              <TableCell className="capitalize font-light">
                {job.isOpen ? "Open" : "Closed"}
              </TableCell>
              <TableCell className="font-light text-center">
                {job.yearsOfExperience}
              </TableCell>
              <TableCell className="font-light">
                {dayjs(job?.end_date).format("MMM D, YYYY")}
              </TableCell>
              <TableCell className="font-light text-center">
                {Math.floor(Math.random() * 50)}
              </TableCell>
              <TableCell className="flex justify-center">
                <Button>VIEW</Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default List;
