import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";
import { generateStory, validatePath } from "../generate-story";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Template {
  name?: string;
  extension: string;
  content: string;
  isStory?: boolean;
}

interface ComponentConfig {
  type: string;
  componentPath: string;
}

export async function loadTemplate(extension: str): Promise<string> {
  const templatePath = path.join(
    __dirname,
    "templates",
    `template.${extension}`
  );

  if (!(await validatePath(templatePath))) {
    throw new Error(`Template not found: ${templatePath}`);
  }

  try {
    return await fs.readFile(templatePath, "utf-8");
  } catch (error) {
    console.error(`Error loading template ${templateName}:`, error);
    throw error;
  }
}

async function generateComponent({ type, componentPath }: ComponentConfig) {
  try {
    const basePath = path.resolve(__dirname, "../../../lib/components");
    const componentName = path.basename(componentPath);
    const componentDirectory = path.join(basePath, type, componentPath);

    // Create component directory
    await fs.mkdir(componentDirectory, { recursive: true });
    await fs.mkdir(path.join(componentDirectory, "__stories__"), {
      recursive: true,
    });
    await fs.mkdir(path.join(componentDirectory, "__tests__"), {
      recursive: true,
    });

    // Load templates
    const [indexTemplate, componentTemplate, cssTemplate, testTemplate] =
      await Promise.all([
        loadTemplate("index.ts"),
        loadTemplate("component.tsx"),
        loadTemplate("module.css"),
        loadTemplate("test.ts"),
      ]);

    // Replace placeholders

    // Generate story templates
    const componentUpperCaseName =
      componentName.charAt(0).toUpperCase() + componentName.slice(1);
    const componentLowerCaseName = componentName.toLowerCase();
    const atomicTypeName = type.toLowerCase();

    const indexContent = indexTemplate
      .replace(/__COMPONENT_UPPERCASE_NAME__/g, componentUpperCaseName)
      .replace(/__COMPONENT_LOWERCASE_NAME__/g, componentLowerCaseName)
      .replace(/__ATOMIC_TYPE_NAME__/g, atomicTypeName);

    const componentContent = componentTemplate
      .replace(/__COMPONENT_UPPERCASE_NAME__/g, componentUpperCaseName)
      .replace(/__COMPONENT_LOWERCASE_NAME__/g, componentLowerCaseName)
      .replace(/__ATOMIC_TYPE_NAME__/g, atomicTypeName);

    const cssContent = cssTemplate
      .replace(/__COMPONENT_UPPERCASE_NAME__/g, componentUpperCaseName)
      .replace(/__COMPONENT_LOWERCASE_NAME__/g, componentLowerCaseName)
      .replace(/__ATOMIC_TYPE_NAME__/g, atomicTypeName);

    const testContent = testTemplate
      .replace(/__COMPONENT_UPPERCASE_NAME__/g, componentUpperCaseName)
      .replace(/__COMPONENT_LOWERCASE_NAME__/g, componentLowerCaseName)
      .replace(/__ATOMIC_TYPE_NAME__/g, atomicTypeName);

    // Create directory and write files
    await fs.mkdir(componentDirectory, { recursive: true });

    await Promise.all([
      fs.writeFile(path.join(componentDirectory, `index.ts`), indexContent),
      fs.writeFile(
        path.join(componentDirectory, `${componentName}.tsx`),
        componentContent
      ),
      fs.writeFile(
        path.join(componentDirectory, `${componentName}.module.css`),
        cssContent
      ),
      fs.writeFile(
        path.join(componentDirectory, `/__tests__/${componentName}.test.tsx`),
        testContent
      ),
    ]);

    console.log(
      `Successfully created component files in ${componentDirectory}`
    );

    // run the parent generate-story function
    await generateStory({ type, componentPath });

    console.log(
      chalk.green(`Successfully created component under: ${componentDirectory}`)
    );
  } catch (error) {
    console.error("Error generating component:", error);
    process.exit(1);
  }
}

// Main execution
const main = async () => {
  try {
    const args = process.argv.slice(2);
    const typeIndex = args.indexOf("--type");
    const pathIndex = args.indexOf("--path");

    if (typeIndex === -1 || pathIndex === -1) {
      throw new Error("Missing required arguments: --type and --path");
    }

    await generateComponent({
      type: args[typeIndex + 1],
      componentPath: args[pathIndex + 1],
    });
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

main();
