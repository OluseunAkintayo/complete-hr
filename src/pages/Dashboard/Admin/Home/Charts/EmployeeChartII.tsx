import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fakerDE as faker } from '@faker-js/faker';

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];

const chartData = labels.map(item => {
  return {
    name: item,
    entry: faker.number.int({ min: 0, max: 700 }),
    exit: faker.number.int({ min: 0, max: 400 }),
  }
});

const EmployeeChartII = () => {
  return (
    <div>
      <h3 className="mt-8 mb-4 text-lg font-semibold text-gray-700 text-center">
        Employee Attrition Chart
      </h3>
      <div>
        <ResponsiveContainer width={"100%"} height={320}>
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 50,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="exit" stroke="#d70900" />
            <Line type="monotone" dataKey="entry" stroke="#008080" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmployeeChartII;
