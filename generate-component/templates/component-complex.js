module.exports = (componentUpperCaseName, componentLowerCaseName) => ({
  content: `import * as React from "react";
import { Column } from '../../';  
import { ${componentUpperCaseName}Props } from "./${componentLowerCaseName}.types";

import styles from "./${componentLowerCaseName}.module.css";

const ${componentUpperCaseName}: React.FC<${componentUpperCaseName}Props> = ({ foo }) => {
  return (<Column dataTestId="${componentLowerCaseName}" customClass={styles.${componentUpperCaseName}}>{foo || "missng prop foo"}</Column>)
};

export default ${componentUpperCaseName};

`,
  extension: `.tsx`,
  type: 'complex',
});
