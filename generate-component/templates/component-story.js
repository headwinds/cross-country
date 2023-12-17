module.exports = (componentUpperCaseName, conponentLowerCaseName) => ({
  content: `import * as React from "react";
  import ${componentUpperCaseName} from "../${conponentLowerCaseName}";
  
  const ${componentUpperCaseName}Story = () => {
    return <${componentUpperCaseName} />;
  };
  
  export default ${componentUpperCaseName}Story;

`,
  extension: `.tsx`,
  isStory: true,
});
