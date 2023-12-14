import renderRow from './render-row';

const buildTree = instructionList => {
  const title = 'Recursive Strategy';
  console.log(title);

  let htmlString = `<div><h1>${title}</h1>`;

  const recurseRenderRow = (prevIndent = null, prevType = null, rowCount = 0, newHtmlStr = '') => {
    if (rowCount < instructionList.length) {
      const { text, type, indent } = instructionList[rowCount];

      newHtmlStr += renderRow(text, type, indent, prevIndent, prevType, rowCount);
      rowCount++;
      prevIndent = indent;
      prevType = type;
      return recurseRenderRow(prevIndent, prevType, rowCount, newHtmlStr);
    } else {
      return newHtmlStr;
    }
  };

  htmlString += recurseRenderRow();

  htmlString += `</div>`;
  console.log('final htmlString: ', htmlString);

  return htmlString;
};

const RecursiveTreeBuilder = { buildTree };

export default RecursiveTreeBuilder;
