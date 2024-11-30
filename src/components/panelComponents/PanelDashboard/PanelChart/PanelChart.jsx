"use client"

import { Area, AreaChart, XAxis, YAxis } from "recharts"

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

export const description = "An area chart with axes"

const chartData = [
  { month: "مهر", desktop: 186, mobile: 80 },
  { month: "آبان", desktop: 305, mobile: 200 },
  { month: "آدر", desktop: 237, mobile: 120 },
  { month: "دی", desktop: 73, mobile: 190 },
  { month: "بهمن", desktop: 209, mobile: 130 },
  { month: "اسفند", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "خرید",
    color: "#77CDFF",
  },
  mobile: {
    label: "فروش",
    color: "#00FF9C",
  },
}

export default function Component() {
  return (
    <Card className="border-none font-Kalame">
      <CardHeader>
      <div className="border-b pb-6 border-gray-300 dark:border-gray-600">
        <div className="dark:text-white text-black text-[1.2rem] relative font-Kalame">
          <p className="pr-8">نمودار فروش طی 7 روز گدشته</p>
          <div className="bg-blue-500 w-5 h-5 rounded-full absolute top-2 right-0"></div>
        </div>
      </div>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[20rem] w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
              direction={"rtl"}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <ChartTooltip cursor={false} className="bg-black" content={<ChartTooltipContent />} />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
