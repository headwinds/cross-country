"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DataPoint {
  date: string;
  dayOfWeek: string;
  value: number;
  goal: string;
  result?: string;
}

interface ChartProps {
  currentWeekPlanned?: DataPoint[];
  currentWeekActual?: DataPoint[];
  lastWeekPlanned?: DataPoint[];
  lastWeekActual?: DataPoint[];
  thresholdValue?: number;
}

const defaultCurrentWeekPlanned: DataPoint[] = [
  { date: "Nov 3, 2024", dayOfWeek: "Sunday", value: 5, goal: "Start of week" },
  {
    date: "Nov 4, 2024",
    dayOfWeek: "Monday",
    value: 5,
    goal: "Goal for Monday",
  },
  {
    date: "Nov 5, 2024",
    dayOfWeek: "Tuesday",
    value: 8,
    goal: "Goal for Tuesday",
  },
  {
    date: "Nov 6, 2024",
    dayOfWeek: "Wednesday",
    value: 5,
    goal: "Goal for Wednesday",
  },
  {
    date: "Nov 7, 2024",
    dayOfWeek: "Thursday",
    value: 6,
    goal: "Goal for Thursday",
  },
  {
    date: "Nov 8, 2024",
    dayOfWeek: "Friday",
    value: 5,
    goal: "Goal for Friday",
  },
  { date: "Nov 9, 2024", dayOfWeek: "Saturday", value: 5, goal: "End of week" },
];

const defaultCurrentWeekActual: DataPoint[] = [
  {
    date: "Nov 3, 2024",
    dayOfWeek: "Sunday",
    value: 5,
    goal: "Start of week",
    result: "Result for Sunday",
  },
];

const defaultLastWeekPlanned: DataPoint[] = [
  {
    date: "Oct 27, 2024",
    dayOfWeek: "Sunday",
    value: 5,
    goal: "Start of week",
  },
  {
    date: "Oct 28, 2024",
    dayOfWeek: "Monday",
    value: 5,
    goal: "Goal for Monday",
  },
  {
    date: "Oct 29, 2024",
    dayOfWeek: "Tuesday",
    value: 8,
    goal: "Goal for Tuesday",
  },
  {
    date: "Oct 30, 2024",
    dayOfWeek: "Wednesday",
    value: 5,
    goal: "Goal for Wednesday",
  },
  {
    date: "Oct 31, 2024",
    dayOfWeek: "Thursday",
    value: 6,
    goal: "Goal for Thursday",
  },
  {
    date: "Nov 1, 2024",
    dayOfWeek: "Friday",
    value: 5,
    goal: "Goal for Friday",
  },
  { date: "Nov 2, 2024", dayOfWeek: "Saturday", value: 5, goal: "End of week" },
];

const defaultLastWeekActual: DataPoint[] = [
  {
    date: "Oct 27, 2024",
    dayOfWeek: "Sunday",
    value: 5,
    goal: "Start of week",
    result: "Result for Sunday",
  },
  {
    date: "Oct 28, 2024",
    dayOfWeek: "Monday",
    value: 2,
    goal: "Goal for Monday",
    result: "Result for Monday",
  },
  {
    date: "Oct 29, 2024",
    dayOfWeek: "Tuesday",
    value: 4,
    goal: "Goal for Tuesday",
    result: "Result for Tuesday",
  },
  {
    date: "Oct 30, 2024",
    dayOfWeek: "Wednesday",
    value: 9,
    goal: "Goal for Wednesday",
    result: "Result for Wednesday",
  },
  {
    date: "Oct 31, 2024",
    dayOfWeek: "Thursday",
    value: 4,
    goal: "Goal for Thursday",
    result: "Result for Thursday",
  },
  {
    date: "Nov 1, 2024",
    dayOfWeek: "Friday",
    value: 3,
    goal: "Goal for Friday",
    result: "Result for Friday",
  },
  {
    date: "Nov 2, 2024",
    dayOfWeek: "Saturday",
    value: 5,
    goal: "End of week",
    result: "Result for Saturday",
  },
];

export default function Component({
  currentWeekPlanned = defaultCurrentWeekPlanned,
  currentWeekActual = defaultCurrentWeekActual,
  lastWeekPlanned = defaultLastWeekPlanned,
  lastWeekActual = defaultLastWeekActual,
  thresholdValue = 5,
}: ChartProps = {}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [showPlanned, setShowPlanned] = useState(true);
  const [showActual, setShowActual] = useState(true);
  const [isCurrentWeek, setIsCurrentWeek] = useState(true);

  useEffect(() => {
    if (!svgRef.current) return;

    const plannedDataSet = isCurrentWeek ? currentWeekPlanned : lastWeekPlanned;
    const actualDataSet = isCurrentWeek ? currentWeekActual : lastWeekActual;

    const margin = { top: 20, right: 30, bottom: 50, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(plannedDataSet.map((d) => d.dayOfWeek))
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear().domain([0, 10]).range([height, 0]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    svg.append("g").attr("transform", `translate(0,${height})`).call(xAxis);

    svg.append("g").call(yAxis);

    const line = d3
      .line<DataPoint>()
      .curve(d3.curveCardinal.tension(0.3))
      .x((d) => x(d.dayOfWeek)! + x.bandwidth() / 2)
      .y((d) => y(d.value));

    const area = d3
      .area<DataPoint>()
      .curve(d3.curveCardinal.tension(0.3))
      .x((d) => x(d.dayOfWeek)! + x.bandwidth() / 2)
      .y0(height)
      .y1((d) => y(d.value));

    // Gradient for planned line
    const plannedGradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "plannedGradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");

    plannedGradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "gray")
      .attr("stop-opacity", 0.4);

    plannedGradient
      .append("stop")
      .attr("offset", "50%")
      .attr("stop-color", "gray")
      .attr("stop-opacity", 0);

    // Gradient for actual line
    const actualGradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "actualGradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");

    actualGradient
      .append("stop")
      .attr("offset", "0%")
      .attr(
        "stop-color",
        actualDataSet[0].value >= thresholdValue ? "green" : "orange"
      )
      .attr("stop-opacity", 0.4);

    actualGradient
      .append("stop")
      .attr("offset", "50%")
      .attr(
        "stop-color",
        actualDataSet[0].value >= thresholdValue ? "green" : "orange"
      )
      .attr("stop-opacity", 0);

    // Planned line and area
    if (showPlanned) {
      svg
        .append("path")
        .datum(plannedDataSet)
        .attr("fill", "url(#plannedGradient)")
        .attr("d", area);

      svg
        .append("path")
        .datum(plannedDataSet)
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("stroke-width", 2)
        .attr("d", line)
        .attr("stroke-dasharray", (d, i, nodes) => {
          if (!isCurrentWeek) return "none";
          const totalLength = nodes[i].getTotalLength();
          const mondayIndex = plannedDataSet.findIndex(
            (d) => d.dayOfWeek === "Monday"
          );
          const mondayX = x("Monday")! + x.bandwidth() / 2;
          const dashLength =
            (width - mondayX) / (plannedDataSet.length - mondayIndex - 1);
          return `0 ${mondayX}, ${dashLength}`;
        });
    }

    // Actual line and area
    if (showActual) {
      svg
        .append("path")
        .datum(actualDataSet)
        .attr("fill", "url(#actualGradient)")
        .attr("d", area);

      svg
        .append("path")
        .datum(actualDataSet)
        .attr("fill", "none")
        .attr(
          "stroke",
          actualDataSet[0].value >= thresholdValue ? "green" : "orange"
        )
        .attr("stroke-width", 2)
        .attr("d", line);
    }

    // Threshold line
    svg
      .append("line")
      .attr("x1", 0)
      .attr("x2", width)
      .attr("y1", y(thresholdValue))
      .attr("y2", y(thresholdValue))
      .attr("stroke", "red")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "4");

    // Vertical lines for "window" effect
    svg
      .append("line")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", 0)
      .attr("y2", height)
      .attr("stroke", "black")
      .attr("stroke-width", 2);

    svg
      .append("line")
      .attr("x1", width)
      .attr("x2", width)
      .attr("y1", 0)
      .attr("y2", height)
      .attr("stroke", "black")
      .attr("stroke-width", 2);

    // Current day marker (only for current week)
    if (isCurrentWeek) {
      svg
        .append("line")
        .attr("x1", x("Monday")! + x.bandwidth() / 2)
        .attr("x2", x("Monday")! + x.bandwidth() / 2)
        .attr("y1", 0)
        .attr("y2", height)
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "5,5");

      svg
        .append("text")
        .attr("x", x("Monday")! + x.bandwidth() / 2)
        .attr("y", height + 30)
        .attr("text-anchor", "middle")
        .text("Current Day");
    }
  }, [
    currentWeekPlanned,
    currentWeekActual,
    lastWeekPlanned,
    lastWeekActual,
    thresholdValue,
    showPlanned,
    showActual,
    isCurrentWeek,
  ]);

  const toggleWeek = () => {
    setIsCurrentWeek(!isCurrentWeek);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex justify-between items-center w-full max-w-[600px]">
        <h2 className="text-xl font-bold">
          {isCurrentWeek ? "Current Week" : "Last Week"}
        </h2>
        <Button onClick={toggleWeek} variant="outline" size="sm">
          {isCurrentWeek ? (
            <ArrowLeft className="mr-2 h-4 w-4" />
          ) : (
            <ArrowRight className="mr-2 h-4 w-4" />
          )}
          {isCurrentWeek ? "View Last Week" : "View Current Week"}
        </Button>
      </div>
      <svg ref={svgRef} width="600" height="400"></svg>
      <div className="flex space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showPlanned}
            onChange={() => setShowPlanned(!showPlanned)}
          />
          <span>Show Planned</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showActual}
            onChange={() => setShowActual(!showActual)}
          />
          <span>Show Actual</span>
        </label>
      </div>
      <div>
        {isCurrentWeek
          ? `Sunday: ${currentWeekActual[0].date}`
          : `Sunday: ${lastWeekActual[0].date}`}
      </div>
    </div>
  );
}
