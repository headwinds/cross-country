// scripts/generate-story.ts
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface StoryConfig {
  type: string;
  componentPath: string;
}

export async function validatePath(path: string): Promise<boolean> {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
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

export async function generateStory({ type, componentPath }: StoryConfig) {
  try {
    const basePath = path.resolve(__dirname, "../../../lib/components");
    const componentName = path.basename(componentPath);
    const fullPath = path.join(basePath, type, componentPath, "__stories__");

    console.log("Loading templates from:", path.join(__dirname, "templates"));
    console.log("Creating stories in:", fullPath);

    // Load templates
    const [mdxTemplate, storiesTemplate] = await Promise.all([
      loadTemplate("ts"),
      loadTemplate("stories.ts"),
    ]);

    // Replace placeholders

    // Generate story templates

    // the component name may 1 word or more than 1 word
    // so capitalize the first letter of the component name and make each character after the dash uppercase removing the dashes
    const componentUpperCaseName = componentName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
    const componentLowerCaseName = componentName.toLowerCase();
    const atomicTypeName = type.toLowerCase();

    const mdxContent = mdxTemplate
      .replace(/__COMPONENT_UPPERCASE_NAME__/g, componentUpperCaseName)
      .replace(/__COMPONENT_LOWERCASE_NAME__/g, componentLowerCaseName)
      .replace(/__ATOMIC_TYPE_NAME__/g, atomicTypeName);

    const storiesContent = storiesTemplate
      .replace(/__COMPONENT_UPPERCASE_NAME__/g, componentUpperCaseName)
      .replace(/__COMPONENT_LOWERCASE_NAME__/g, componentLowerCaseName)
      .replace(/__ATOMIC_TYPE_NAME__/g, atomicTypeName);

    // Create directory and write files
    await fs.mkdir(fullPath, { recursive: true });

    await Promise.all([
      fs.writeFile(path.join(fullPath, `${componentName}.mdx`), mdxContent),
      fs.writeFile(
        path.join(fullPath, `${componentName}.stories.tsx`),
        storiesContent
      ),
    ]);

    console.log(chalk.blue(`Successfully created story files in ${fullPath}`));
  } catch (error) {
    console.error("Error in generateStory:", error);
    throw error;
  }
}

// Main execution
const main = async () => {
  process.on("unhandledRejection", (error) => {
    console.error("Unhandled rejection:", error);
    process.exit(1);
  });

  try {
    const args = process.argv.slice(2);
    const typeIndex = args.indexOf("--type");
    const pathIndex = args.indexOf("--path");

    if (typeIndex === -1 || pathIndex === -1) {
      throw new Error("Missing required arguments: --type and --path");
    }

    await generateStory({
      type: args[typeIndex + 1],
      componentPath: args[pathIndex + 1],
    });
  } catch (error) {
    console.error("Error in main:", error);
    process.exit(1);
  }
};

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
