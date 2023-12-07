import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IEmployee } from "@/lib/types";
import ViewEmployee from "./ViewEmployee";

interface ListProps {
  employees: IEmployee[];
  search: string;
}

const List = ({ employees, search }: ListProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-32">Employee ID</TableHead>
          <TableHead><div className="w-32 min-w-32">Employee Name</div></TableHead>
          <TableHead>Email Address</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Supervisor</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees
          .filter((employee) => {
            if (
              (employee.firstName + " " + employee.lastName)
                .toLowerCase()
                .includes(search.trim().toLowerCase())
            ) {
              return employee;
            }
            if (
              employee.email && employee.email.toLowerCase().includes(search.trim().toLowerCase())
            ) {
              return employee;
            }
          })
          .map((employee, i) => (
            <TableRow key={employee.firstName + employee.lastName + i}>
              <TableCell className="font-light uppercase">
                {employee.username}
              </TableCell>
              <TableCell className="capitalize font-light">
                {employee.firstName + " " + employee.lastName}
              </TableCell>
              <TableCell className="font-light">{employee.email}</TableCell>
              <TableCell className="font-light">{employee.department}</TableCell>
              <TableCell className="font-light">{employee?.supervisor}</TableCell>
              <TableCell className="flex justify-center">
                <ViewEmployee employee={employee} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default List;
