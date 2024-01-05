const renderRow = (text, type, indent, prevIndent, prevType, rowCount) => {

  let htmlString = '';
  if (!prevType) {
    htmlString += `<${type}><li>${text}</li>`;
  } else {
    // do I go up, or remain on the same level?
    if (indent < prevIndent) {
      for (let i = 0; i < prevIndent - indent; i++) {
        htmlString += `</${prevType}>`;
      }
      htmlString += `<li>${text}</li>`;
    } else if (indent > prevIndent) {

      htmlString += `<li><${type}><li>${text}</li>`;
    } else {
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
  return htmlString;
};

export default renderRow;
