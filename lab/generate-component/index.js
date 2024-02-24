import fs from "fs";
import templates from "./templates/"; // Add the file extension '.js' to the import statement
import chalk from "chalk";

// Rest of the code...
fs.mkdirSync(testsDirectory);
fs.mkdirSync(storiesDirectory);

const generatedTemplates = templates.map((template) =>
  template(componentUpperCaseName, componentLowerCaseName, atomicTypeName)
);

generatedTemplates.forEach((template) => {
  if (
    template.extension === ".stories.mdx" ||
    template.extension === ".test.tsx"
  ) {
    const folder =
      template.extension === ".stories.mdx" ? "__stories__" : "__tests__";

    fs.writeFileSync(
      `${componentDirectory}/${folder}/${componentName}${template.extension}`,
      template.content
    );
  } else {
    if (template.extension === ".ts") {
      fs.writeFileSync(
        `${componentDirectory}/index${template.extension}`,
        template.content
      );
    } else if (
      template.extension === ".d.ts" ||
      (template.extension === ".types.ts" && template.name)
    ) {
      fs.writeFileSync(
        `${componentDirectory}/${template.name}${template.extension}`,
        template.content
      );
    } else {
      if (template.isStory) {
        fs.writeFileSync(
          `${componentDirectory}/__stories__/${componentName}-story${template.extension}`,
          template.content
        );
      } else {
        fs.writeFileSync(
          `${componentDirectory}/${componentName}${template.extension}`,
          template.content
        );
      }
    }
  }
});

log(chalk.green(`Successfully created component under: ${componentDirectory}`));
