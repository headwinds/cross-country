import React from "react";
import Stage from "../stage";
import {
  createActorWithGridPosition,
  createActorsWithGridPositions,
} from "@/lib/utils/actor-util";
import { GridPosition } from "@/lib/utils/grid-position-util";
import CrossCountryProvider from "@headwinds/cross-country/providers/cross-country-provider";

/**
 * Example demonstrating grid-based actor positioning
 */
const StageGridExample = () => {
  // Example 1: Single actor with grid position
  const singleActor = createActorWithGridPosition({
    id: 1,
    name: "Hunter",
    variant: "hunter",
    gridPosition: { row: 1, col: 1 }, // Position at grid [1,1]
  });

  // Example 2: Multiple actors with grid positions
  const multipleActors = createActorsWithGridPositions([
    {
      id: 1,
      name: "Hunter",
      variant: "hunter",
      gridPosition: { row: 0, col: 0 }, // Top-left tile
    },
    {
      id: 2,
      name: "Warrior",
      variant: "warrior",
      gridPosition: { row: 0, col: 1 }, // Top-center tile
    },
    {
      id: 3,
      name: "Wisp",
      variant: "wisp",
      gridPosition: { row: 1, col: 1 }, // Center tile
    },
  ]);

  // Example 3: Custom grid configuration
  const customGridConfig = {
    tileSize: 80,
    gapSize: 5,
    totalInRow: 4,
    width: 400,
  };

  return (
    <CrossCountryProvider>
      <div style={{ padding: "20px" }}>
        <h2>Grid Positioning Examples</h2>

        <h3>Single Actor Example</h3>
        <div
          style={{
            border: "1px solid #ccc",
            marginBottom: "20px",
            height: 320,
          }}
        >
          <Stage actorModels={[singleActor]} />
        </div>

        <h3>Multiple Actors Example</h3>
        <div
          style={{
            border: "1px solid #ccc",
            marginBottom: "20px",
            height: 320,
          }}
        >
          <Stage actorModels={multipleActors} />
        </div>

        <h3>Custom Grid Configuration</h3>
        <div
          style={{
            border: "1px solid #ccc",
            marginBottom: "20px",
            height: 320,
          }}
        >
          <Stage actorModels={multipleActors} gridConfig={customGridConfig} />
        </div>
      </div>
    </CrossCountryProvider>
  );
};

export default StageGridExample;
