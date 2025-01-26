// "use client"

// import { TrendingUp } from "lucide-react"
// import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
// const chartData = [{ month: "january", Sportcar: 1260, mobile: 570 }]

// const chartConfig = {
//     Sportcar: {
//     label: "Sportcar",
//     color: "",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig

// export function Component() {
//   const totalVisitors = chartData[0].Sportcar + chartData[0].mobile

//   return (
//     <div className=" bg-white h-[200px] w-[200px]">
    
//       <CardContent className="flex items-center pb-0">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square w-[230px]"
          
//         >
//           <RadialBarChart
//             data={chartData}
//             endAngle={360}
//             innerRadius={80}
//             outerRadius={130}
//           >
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                     return (
//                       <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) - 16}
//                           className="fill-foreground text-2xl font-bold"
//                         >
//                           {totalVisitors.toLocaleString()}
//                         </tspan>
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 4}
//                           className="fill-muted-foreground"
//                         >
//                           Visitors
//                         </tspan>
//                       </text>
//                     )
//                   }
//                 }}
//               />
//             </PolarRadiusAxis>
//             <RadialBar
//               dataKey="desktop"
//               stackId="a"
//               cornerRadius={5}
//               fill="var(--color-desktop)"
//               className="stroke-transparent stroke-2"
//             />
//             <RadialBar
//               dataKey="mobile"
//               fill="var(--color-mobile)"
//               stackId="a"
//               cornerRadius={5}
//               className="stroke-transparent stroke-2"
//             />
//           </RadialBarChart>
//         </ChartContainer>
//       </CardContent>

//     </div>
//   )
// }


"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

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
  {
    month: "January",
    Sport_Car: 17439,
    SUV: 9478,
    Coupe: 18197,
    Hatchback: 12510,
    MPV: 14406,
  },
];

const chartConfig = {
  Sport_Car: {
    label: "Sport_Car",
    color: "hsl(var(--chart-1))",
  },
  SUV: {
    label: "SUV",
    color: "hsl(var(--chart-2))",
  },
  Coupe: {
    label: "Coupe",
    color: "hsl(var(--chart-3))",
  },
  Hatchback: {
    label: "Hatchback",
    color: "hsl(var(--chart-4))",
  },
  MPV: {
    label: "MPV",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Component() {
  const totalVisitors =
    chartData[0].Sport_Car +
    chartData[0].SUV +
    chartData[0].Coupe +
    chartData[0].Hatchback +
    chartData[0].MPV;

  return (
    <div className="bg-transparent h-[220px] w-[220px] mt-4">
      <CardContent className="flex items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-[300px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={360}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground text-[#90A3BF] text-[14px]"
                        >
                          Rental Car
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            {/* Bars for each section */}
            <RadialBar
              dataKey="Sport_Car"
              stackId="a"
              cornerRadius={5}
              fill="#0D3559"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="SUV"
              stackId="a"
              cornerRadius={5}
              fill="#175D9C"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="Coupe"
              stackId="a"
              cornerRadius={5}
              fill="#2185DE"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="Hatchback"
              stackId="a"
              cornerRadius={5}
              fill="#63A9E8"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="MPV"
              stackId="a"
              cornerRadius={5}
              fill="#A6CEF2"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
}
