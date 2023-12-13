import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { fakerDE as faker } from "@faker-js/faker";

const labels = ["Sales", "IT", "Media", "HR", "Marketing"];
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#008085"];

const data = labels.map((item, index) => {
  return {
    name: item,
    value: faker.number.int({ min: 0, max: 600 }),
    color: colors[index],
  };
});

const EmployeeChart = () => {
  return (
    <div>
      <h3 className="mt-8 mb-4 text-lg font-semibold text-gray-700 text-center">
        Employee Distribution by Department
      </h3>
      <div>
        <ResponsiveContainer width={"100%"} height={320}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={50}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={(props) => props.name}
              legendType="square"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmployeeChart;
