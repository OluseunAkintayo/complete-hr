import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IEmployee } from "@/utils/types";

interface ListProps {
  users: IEmployee[];
}

const List = ({ users }: ListProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-32">Employee ID</TableHead>
          <TableHead>Employee Name</TableHead>
          <TableHead>Email Address</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Supervisor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users
          // .filter((user) => {})
          .map((user, i) => (
            <TableRow key={user.firstName + user.lastName + i}>
              <TableCell className="font-medium uppercase">{user.username}</TableCell>
              <TableCell>{user.firstName + " " + user.lastName}</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>Credit Card</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default List;
