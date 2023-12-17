module.exports = (componentUpperCaseName, componentLowerCaseName) => ({
  content: `import * as React from "react";
import { ${componentUpperCaseName}Props } from "./${componentLowerCaseName}.types";

import styles from "./${componentLowerCaseName}.module.css";

const ${componentUpperCaseName}: React.FC<${componentUpperCaseName}Props> = ({ foo }) => {
  return (<div data-testid="${componentLowerCaseName}" className={styles.${componentUpperCaseName}}>{foo || "plan & start building"}</div>)
};

export default ${componentUpperCaseName};

`,
  extension: `.tsx`,
  type: 'base',
});
