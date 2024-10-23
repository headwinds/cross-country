import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TileGrid from "../tile-grid";
import { TileModelType } from "@cross-country/models/TileModel";

describe("TileGrid component", () => {
  const mockTiles: TileModelType[] = [
    {
      id: "0",
      name: "snowbank",
      label: "",
      description: "",
      material: "snow",
      movement_cost: 0,
      color: 10,
      type: "tile",
      skin: "",
      damage: 0,
      is_obstacle: true,
      obstacle_remover: "shovel",
      fill: "#67bd67",
      elevation: 0,
      age: -1, // doesn't age
    },
    {
      id: "1",
      name: "snowbank",
      label: "",
      description: "",
      material: "snow",
      movement_cost: 0,
      color: 10,
      type: "tile",
      skin: "",
      damage: 0,
      is_obstacle: true,
      obstacle_remover: "shovel",
      fill: "#67bd67",
      elevation: 0,
      age: -1, // doesn't age
    },
  ];

  it("renders the correct number of tiles", () => {
    render(<TileGrid models={mockTiles} />);
    const tileElements = screen.getAllByTestId("tile");
    expect(tileElements).toHaveLength(mockTiles.length);
  });

  // Add more tests as needed
});
