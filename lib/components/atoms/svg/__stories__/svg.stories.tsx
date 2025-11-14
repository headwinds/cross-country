import type { Meta, StoryObj } from "@storybook/react";
import SVG from "../svg";
import * as d3 from 'd3';

const meta: Meta<typeof SVG> = {
  title: "components/atoms/svg",
  component: SVG,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SVG>;

export const Default = {
  render: () => <SVG />,
};

export const WithText = {
  render: () => (
    <SVG
      customStyle={{
        border: "4px solid pink",
      }}
    >
      <text
        x={20}
        y={30}
        style={{
          font: "bold 30px sans-serif",
        }}
      >
        hello world
      </text>
    </SVG>
  ),
};

export const WithSineWave = {
  render: () => (
    <SVG
      customStyle={{
        border: "4px solid pink",
      }}
    >
      <path
        d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
        fill="transparent"
        stroke="black"
        strokeWidth={2}
      />
    </SVG>
  ),
};

export const WithAIFailThreeSineWave = {
  args: {
    amplitude: 70,
    waveCount: 3,
    strokeWidth: 2,
    strokeColor: "black",
  },
  render: (args) => {
    // Calculate the path based on the controls
    const { amplitude, waveCount, strokeWidth, strokeColor } = args;
    const svgWidth = 600;
    const svgHeight = 160;
    const centerY = svgHeight / 2;

    // Generate sine wave path
    let path = `M 10 ${centerY} `;
    const waveWidth = (svgWidth - 20) / waveCount;
    const controlPointDistance = waveWidth / 3;

    for (let i = 0; i < waveCount; i++) {
      const startX = 10 + i * waveWidth;
      // First half of wave (down to up)
      path += `C ${startX + controlPointDistance} ${centerY - amplitude}, 
               ${startX + 2 * controlPointDistance} ${centerY - amplitude}, 
               ${startX + waveWidth / 2} ${centerY} `;

      // Second half of wave (up to down)
      path += `C ${startX + waveWidth / 2 + controlPointDistance} ${
        centerY + amplitude
      }, 
               ${startX + waveWidth / 2 + 2 * controlPointDistance} ${
        centerY + amplitude
      }, 
               ${startX + waveWidth} ${centerY} `;
    }

    return (
      <SVG
        customStyle={{
          border: "4px solid pink",
          width: svgWidth,
          height: svgHeight,
        }}
      >
        <path
          d={path}
          fill="transparent"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </SVG>
    );
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const WithThreeSineWave = {
  args: {
    amplitude: 70,
    waveCount: 3,
    strokeWidth: 2,
    strokeColor: 'black',
  },
  render: (args) => {
    // Calculate the path based on the controls
    const { amplitude, waveCount, strokeWidth, strokeColor } = args;
    const svgWidth = 600;
    const svgHeight = 160;
    const centerY = svgHeight / 2;
    
    // Create D3 scales
    const xScale = d3.scaleLinear()
      .domain([0, 2 * Math.PI * waveCount])
      .range([10, svgWidth - 10]);
    
    // Create D3 line generator for a sine wave
    const lineGenerator = d3.line()
      .x(d => xScale(d))
      .y(d => centerY - amplitude * Math.sin(d))
      .curve(d3.curveCardinal);
    
    // Generate points along the sine wave
    const points = d3.range(0, 2 * Math.PI * waveCount, 0.1);
    const pathData = lineGenerator(points);
    
    return (
      <SVG
        customStyle={{
          border: "4px solid pink",
          width: svgWidth,
          height: svgHeight,
        }}
      >
        <path
          d={pathData}
          fill="transparent"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </SVG>
    );
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
