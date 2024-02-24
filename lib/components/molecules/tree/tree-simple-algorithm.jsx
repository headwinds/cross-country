import renderRow from "./render-row";

const buildTree = (instructionList) => {
  const title = "Simple Strategy";

  let htmlString = `<div><h1>${title}</h1>`;

  // I need to read the row and determine if it is a parent or child
  let rowCount = 0;
  let prevIndent = null;
  let prevType = null;

  while (rowCount < instructionList.length) {
    const instruction = instructionList[rowCount];
    const { indent, text, type } = instruction;

    htmlString += renderRow(text, type, indent, prevIndent, prevType, rowCount);
    prevIndent = indent;
    prevType = type;

    if (rowCount === instructionList.length - 1) {
      // I am the last row
      htmlString += `</${type}></li>`;
    }

    rowCount++;
  }

  htmlString += `</${prevType}>`;
  htmlString += `</div>`;

  return htmlString;
};

const TreeBuilder = { buildTree };

export default TreeBuilder;
