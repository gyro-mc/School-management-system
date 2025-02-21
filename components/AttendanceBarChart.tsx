"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import {
  Card,
  CardContent,
  CardDescription,
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
  { month: "January", present: 186, absent: 80 },
  { month: "February", present: 305, absent: 200 },
  { month: "March", present: 237, absent: 120 },
  { month: "April", present: 73, absent: 190 },
  { month: "May", present: 209, absent: 130 },
  { month: "June", present: 214, absent: 140 },
];

const chartConfig = {
  present: {
    label: "present",
    color: "hsl(var(--chart-1))",
  },
  absent: {
    label: "absent",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function AttendanceBarChart() {
  return (
    <div className="w-full lg:w-[60%]">
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-row justify-between pb-4">
            <h1>Attendance</h1>
            <MoreHorizIcon />
          </CardTitle>

          <CardDescription className="flex flex-row gap-10">
            <div className="flex flex-row gap-2">
              <div className="w-5 h-5 bg-lamaYellow rounded-full " />
              <h4>absent</h4>
            </div>
            <div className="flex flex-row gap-2">
              <div className="w-5 h-5 bg-lamaSky rounded-full" />
              <h4>present</h4>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="present" fill="#C3EBFA" radius={1} />
              <Bar dataKey="absent" fill="#FAE27C" radius={1} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
