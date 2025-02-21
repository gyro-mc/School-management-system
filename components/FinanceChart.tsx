"use client";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", income: 186, outcome: 80 },
  { month: "February", income: 305, outcome: 200 },
  { month: "March", income: 237, outcome: 120 },
  { month: "April", income: 73, outcome: 190 },
  { month: "May", income: 209, outcome: 130 },
  { month: "June", income: 214, outcome: 140 },
  { month: "July", income: 300, outcome: 99},

];

const chartConfig = {
  income: {
    label: "income",
    color: "hsl(var(--chart-1))",
  },
  outcome: {
    label: "outcome",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function FinanceChart() {
  return (
    <div className="px-3">
      <Card>
        <CardHeader className='flex flex-row justify-between'>
          <CardTitle>Finance</CardTitle>
         <MoreHorizIcon/>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="income"
                type="monotone"
                stroke="#CFCEFF"
                strokeWidth={4}
                dot={true}
                />
              <Line
                dataKey="outcome"
                stroke="#C3EBFA"
                type="monotone"
                strokeWidth={4}
                dot={true}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        
      </Card>
    </div>
  );
}
