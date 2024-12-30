"use client"
import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { browser: "chrome", visitors: 2, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 2, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 2, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 2, fill: "var(--color-edge)" },
  { browser: "other", visitors: 3, fill: "var(--color-other)" },
  { browser: "sss", visitors: 3, fill: "brown" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "orange",
  },
  sss : {
    label : "sss",
    color : "brown"
  },
  safari: {
    label: "Safari",
    color: "purple",
  },
  firefox: {
    label: "Firefox",
    color: "green",
  },
  edge: {
    label: "Edge",
    color: "blue",
  },
  other: {
    label: "Other",
    color: "red",
  },
}

export default function PanelCategoryChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col border h-full w-full lg:w-[50%] border-gray-200 dark:border-gray-600 bg-white dark:bg-[#1B2631]">
      <CardHeader className='flex w-full flex-col bg-white dark:bg-[#1B2631] rounded-lg p-5 items-center gap-10'>
       <h4 className='font-Kalame w-full text-[1.1rem] border-b pb-4 dark:border-gray-600 relative text-black pr-8 dark:text-white'> نمودار دسته بندی ها
        <div className='bg-blue-600 w-5 h-5 rounded-full absolute top-1 right-0'></div>
       </h4>
      </CardHeader>
      <CardContent className="flex-1 pb-0 pt-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[17rem]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              className="dark:bg-[#111827] bg-[#F9FAFB] text-black dark:text-white"
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="dark:fill-gray-400 fill-gray-700 font-Kalame"
                      >
                        <tspan
                          className="text-3xl fill-foreground font-bold"
                          x={viewBox.cx}
                          y={viewBox.cy}
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="font-Kalame font-bold ill-muted-foreground"
                        >
                          بازدید کننده
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
