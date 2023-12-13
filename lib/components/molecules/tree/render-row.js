const renderRow = (text, type, indent, prevIndent, prevType, rowCount) => {
  console.log('----------------------');
  console.log('rowCount: ', rowCount);
  console.log('recurse prevType: ', prevType);
  console.log('recurse indent: ', indent);
  console.log('recurse prevIndent: ', prevIndent);
  console.log('htmlString: ', htmlString);
  console.log('----------------------');
  let htmlString = '';
  if (!prevType) {
    htmlString += `<${type}><li>${text}</li>`;
  } else {
    // do I go up, or remain on the same level?
    if (indent < prevIndent) {
      console.log('...going up');
      console.log('recurse prevType: ', prevType);
      console.log('recurse text: ', text);
      console.log('recurse type: ', type);
      console.log('levels to jump up: ', prevIndent - indent);
      // go up - close the previous node and open a new one
      for (let i = 0; i < prevIndent - indent; i++) {
        htmlString += `</${prevType}>`;
      }

      htmlString += `<li>${text}</li>`;
    } else if (indent > prevIndent) {
      console.log('going down...');
      console.log('recurse prevType: ', prevType);
      console.log('recurse text: ', text);
      console.log('recurse type: ', type);
      // go down
      //htmlString += `</${prevType}>`;
      htmlString += `<li><${type}><li>${text}</li>`;
    } else {
      console.log('- staying on the same level -');
      console.log('recurse prevType: ', prevType);
      console.log('recurse text: ', text);
      console.log('recurse type: ', type);

      if (prevType === type) {
        console.log('...same type');
        // same level, same type
        console.log('prev htmlString: ', htmlString);
        htmlString += `<li>${text}</li>`;
      } else {
        console.log('...different type');
        // same level, different type
        htmlString += `</${prevType}>`;
        htmlString += `<${type}><li>${text}</li>`;
      }
    }
  }
  //console.log('build htmlString: ', htmlString);
  return htmlString;
};

export default renderRow;
