import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Loading = () => {

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-32">Employee ID</TableHead>
          <TableHead>Employee Name</TableHead>
          <TableHead>Email Address</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
				{
					Array.from({ length: 12 }, (_, i) => i).map(item => (
					<TableRow key={item}>
						<TableCell className="font-medium">
							<Skeleton className="bg-gray-300 h-4 w-full" />
						</TableCell>
						<TableCell><Skeleton className="bg-gray-300 h-4 w-full" /></TableCell>
						<TableCell><Skeleton className="bg-gray-300 h-4 w-full" /></TableCell>
						<TableCell><Skeleton className="bg-gray-300 h-4 w-full" /></TableCell>
					</TableRow>
					))
				}
      </TableBody>
    </Table>
  );
};

export default Loading;
