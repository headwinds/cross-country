import fs from "fs";
import templates from "./templates/story"; // Add the file extension '.js' to the import statement
import chalk from "chalk";

/*
npm new:story --type organims --path world/carbon
*/

const generatedTemplates = templates.map((template) =>
  template(componentUpperCaseName, componentLowerCaseName, atomicTypeName)
);

generatedTemplates.forEach((template) => {
  if (template.extension === ".mdx") {
    fs.writeFileSync(
      `${componentDirectory}/__stories__/${componentName}${template.extension}`,
      template.content
    );
  } else {
    fs.writeFileSync(
      `${componentDirectory}/__stories__/${componentName}${template.extension}`,
      template.content
    );
  }
});

log(
  chalk.green(`Successfully created story files under: ${componentDirectory}`)
);
