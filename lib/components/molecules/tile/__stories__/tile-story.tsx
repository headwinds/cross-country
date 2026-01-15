import Tile from "../tile";
import { useState } from "react";
import type { TileModel } from "../../../../models/TileModel";

const defaultTileModel: TileModel = {
  id: "0",
  fill: "green",
  is_obstacle: false,
  obstacle_remover: "",
  elevation: 0,
  age: 0,
  name: "water",
  color: "lightblue",
  type: "tile",
};

const TileStory = ({ size = 100, model = defaultTileModel }) => {
  const [selectedTile, setSelected] = useState<TileModel | null>(null);

  const handleSelected = (tile) => {
    console.log("setSelected tile: ", tile);
    setSelected(tile);
  };

  const isSelected = selectedTile ? selectedTile.id === model.id : false;

  return (
    <Tile
      size={size}
      model={model}
      setSelected={handleSelected}
      isInteractive
    />
  );
};
export default TileStory;
