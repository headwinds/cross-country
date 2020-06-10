export function drawGrid() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const tileX = 10;
  const tileY = 10;
  const tileSize = 50;

  const circleArray = [];

  const greens = d3.scaleOrdinal(d3.schemeGreens[3]);
  // const colorArray = [d3.schemeCategory10, d3.schemeAccent];

  const colorScheme = greens; // multi colour is colorArray

  const getRandFill = () => {
    const ranIndex = Math.floor(Math.random() * 10);
    return colorScheme(ranIndex);
  };

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const drawTile = (x, y, z) => {
    svg
      .append("g")
      .attr("transform", "translate (" + x + "," + y + ")")
      .append("rect")
      .attr("fill", getRandFill())
      .attr("stroke", "#DDD")
      .attr("stroke-width", 1)
      .attr("width", z)
      .attr("height", z);
  };

  const processRow = (y, z) => {
    for (x = 0; x < tileX; x++) {
      const xPos = x * z;
      const yPos = y * z;
      drawTile(xPos, yPos, z);
    }
  };

  const processLayer = z => {
    for (y = 0; y < tileY; y++) {
      processRow(y, z);
    }
  };

  processLayer(tileSize);
}
