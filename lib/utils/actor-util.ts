import { ActorModel } from "../models/ActorModel";
import { GridPosition } from "./grid-position-util";

/**
 * Creates an actor model with grid positioning
 * @param options - Actor creation options
 * @returns ActorModel with grid position
 */
export const createActorWithGridPosition = (options: {
  id: number;
  name: string;
  variant: string;
  gridPosition: GridPosition;
  health?: number;
  mana?: number;
  status?: string;
  alignment?: string;
  type?: string;
}): ActorModel => {
  const {
    id,
    name,
    variant,
    gridPosition,
    health = 100,
    mana = 100,
    status = "idle",
    alignment = "friendly",
    type = "player",
  } = options;

  return {
    id,
    name,
    variant,
    gridPosition,
    health,
    mana,
    status,
    alignment,
    type,
    position: { x: 0, y: 0, z: 0 }, // Will be calculated by Stage component
    customStyle: {
      position: "absolute",
      zIndex: 0,
      left: 0,
      top: 0,
      backgroundColor: "transparent",
    },
  };
};

/**
 * Creates multiple actors with grid positions
 * @param actors - Array of actor creation options
 * @returns Array of ActorModel with grid positions
 */
export const createActorsWithGridPositions = (
  actors: Array<{
    id: number;
    name: string;
    variant: string;
    gridPosition: GridPosition;
    health?: number;
    mana?: number;
    status?: string;
    alignment?: string;
    type?: string;
  }>
): ActorModel[] => {
  return actors.map((actorOptions) =>
    createActorWithGridPosition(actorOptions)
  );
};
