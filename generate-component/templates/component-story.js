module.exports = componentUpperCaseName => ({
  content: `import * as React from "react";
  import ${componentUpperCaseName} from "../${componentUpperCaseName.toLowerCase()}";
  
  const ${componentUpperCaseName}Story = () => {
    return <${componentUpperCaseName} />;
  };
  
  export default ${componentUpperCaseName}Story;

`,
  extension: `.tsx`,
  isStory: true,
});
