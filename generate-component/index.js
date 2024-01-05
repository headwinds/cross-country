/*
currently broken - needs to upgrade it entirely from require to import
*/

import fs from 'fs';
import templates from './templates';
import chalk from 'chalk';

const log = console.log;

const componentName = process.argv[2];
const atomicTypeName = process.argv[3];

const capitalize = str => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

const detectMultipleWords = str => {
  if (str.includes('-')) {
    return str
      .split('-')
      .map(word => capitalize(word))
      .join('');
  }
  return capitalize(str);
};

const componentUpperCaseName = detectMultipleWords(componentName);
const componentLowerCaseName = componentName.toLowerCase(); // ie gold vs gold-leaf vs gold-leaf-view - want to preserve the hyphen

if (!componentName) {
  log(chalk.yellow(`Please supply a valid component name`));
  process.exit(1);
}

log('Creating Component: ' + componentUpperCaseName);

const componentDirectory = `./src/components/${atomicTypeName}/${componentName}`;
const testsDirectory = `./src/components/${atomicTypeName}/${componentName}/__tests__`;
const storiesDirectory = `./src/components/${atomicTypeName}/${componentName}/__stories__`;

if (fs.existsSync(componentDirectory)) {
  log(chalk.yellow(`Component ${componentName} already exists.`));
  process.exit(1);
}

fs.mkdirSync(componentDirectory);
fs.mkdirSync(testsDirectory);
fs.mkdirSync(storiesDirectory);

const generatedTemplates = templates.map(template =>
  template(componentUpperCaseName, componentLowerCaseName, atomicTypeName)
);

generatedTemplates.forEach(template => {
  if (template.extension === '.stories.mdx' || template.extension === '.test.tsx') {
    const folder = template.extension === '.stories.mdx' ? '__stories__' : '__tests__';

    fs.writeFileSync(`${componentDirectory}/${folder}/${componentName}${template.extension}`, template.content);
  } else {
    if (template.extension === '.ts') {
      fs.writeFileSync(`${componentDirectory}/index${template.extension}`, template.content);
    } else if (template.extension === '.d.ts' || (template.extension === '.types.ts' && template.name)) {
      fs.writeFileSync(`${componentDirectory}/${template.name}${template.extension}`, template.content);
    } else {
      if (template.isStory) {
        fs.writeFileSync(
          `${componentDirectory}/__stories__/${componentName}-story${template.extension}`,
          template.content
        );
      } else {
        fs.writeFileSync(`${componentDirectory}/${componentName}${template.extension}`, template.content);
      }
    }
  }
});

log(chalk.green(`Successfully created component under: ${componentDirectory}`));
