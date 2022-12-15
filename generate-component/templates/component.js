module.exports = componentUpperCaseName => ({
  content: `import * as React from "react";
import { ${componentUpperCaseName}Props } from "./${componentUpperCaseName.toLowerCase()}.types";

import styles from "./${componentUpperCaseName.toLowerCase()}.scss";

const ${componentUpperCaseName}: React.FC<${componentUpperCaseName}Props> = ({ foo }) => (
    <div data-testid="${componentUpperCaseName.toLowerCase()}" className={styles.fooBar}>{foo}</div>
);

export default ${componentUpperCaseName};

`,
  extension: `.tsx`,
});
