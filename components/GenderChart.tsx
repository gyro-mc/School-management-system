"use client";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { RadialBar, RadialBarChart } from "recharts";
import {
  Card,
  CardContent,
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
  { gender: "optimusPrime", Count: 50, fill: "white" },
  { gender: "girls", Count: 25, fill: "#FAE27C" },
  { gender: "boys", Count: 25, fill: "#C3EBFA" },
];

const chartConfig = {
  count: {
    label: "Count",
  },
  boys: {
    label: "Boys",
    color: "#C3EBFA",
  },
  girls: {
    label: "girls",
    color: "#FAE27C",
  },
} satisfies ChartConfig;

export function GenderChart() {
  return (
    <Card className="flex flex-col w-full lg:w-[40%] ">
      <CardHeader className="items-center  flex flex-row pb-6 justify-between">
        <CardTitle>Students</CardTitle>
        <MoreHorizIcon/>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart data={chartData} innerRadius={20} outerRadius={140}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="gender" />}
            />
            <RadialBar dataKey="Count" background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="gap-4 flex flex-row justify-evenly">
        <div className="flex flex-col">
          <div className="w-5 h-5 bg-lamaYellow rounded-full " />
          <h4 className='font-bold'>1,234</h4>
          <h4 className='text-sm opacity-[0.5]'>Girls (55%)</h4>
        </div>
        <div>
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h4 className='font-bold'>1,234</h4>
          <h4 className='text-sm opacity-[0.5]'>Boys (55%)</h4>
        </div>
      </CardFooter>
    </Card>
  );
}
