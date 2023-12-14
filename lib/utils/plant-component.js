// TO DO
// convert this into a util where I can plant my own components
/*
const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');
const { execSync } = require('child_process');

const inquirer = require('inquirer');
const chalk = require('chalk');
const _ = require('lodash');
const globby = require('globby');

const Replacer = (source, destination) =>
	new Transform({
		transform(chunk, _, callback) {
			this.push(chunk.toString().replace(new RegExp(source, 'g'), destination));
			callback();
		},
	});

const mkdirp = dir =>
	path
		.resolve(dir)
		.split(path.sep)
		.reduce((acc, cur) => {
			const currentPath = path.normalize(acc + path.sep + cur);
			try {
				fs.statSync(currentPath);
			} catch (e) {
				if (e.code === 'ENOENT') {
					fs.mkdirSync(currentPath);
				} else {
					throw e;
				}
			}
			return currentPath;
		}, '');

const createComponent = async ({ snakeCaseName }) => {
	const camelCaseName = _.camelCase(snakeCaseName);
	const pascalCaseName = _.upperFirst(_.camelCase(snakeCaseName));

	const boilerplatePath = 'templates/component-boilerplate';
	const newComponentPath = `packages/components/${snakeCaseName}`;

	const boilerplateFilePaths = await globby([
		`${boilerplatePath}/**`,
		'!**/lib/**',
		'!**/node_modules/**',
	]);

	const processBoilerplateFiles = filePath => {
		const componentPath = filePath
			.split('templates')
			.join('packages/components')
			.split('component-boilerplate')
			.join(snakeCaseName);

		mkdirp(path.dirname(componentPath));

		return new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(Replacer('component-boilerplate', snakeCaseName))
				.pipe(Replacer('component-name-snake', snakeCaseName))
				.pipe(Replacer('ComponentNamePascal', pascalCaseName))
				.pipe(Replacer('componentNameCamel', camelCaseName))
				.pipe(Replacer('  "private": true,\n', ''))
				.pipe(fs.createWriteStream(componentPath))
				.on('finish', resolve)
				.on('error', reject);
		});
	};

	const componentCreationProcess = async () => {
		console.log(chalk.yellow(`Creating ${newComponentPath}…`));

		try {
			await Promise.all(
				boilerplateFilePaths.map(_.unary(processBoilerplateFiles))
			);
		} catch (e) {
			console.error(chalk.red('ERROR processing boilerplate files'));
			throw e;
		}

		console.log(chalk.yellow(`Bootstrapping repository…\n`));
		execSync('yarn');
		console.log('\n');

		console.log(chalk.green(`${newComponentPath} has been created! 👩‍💻\n`));

		console.log(`Run tests with ${chalk.cyan(`npm test`)}`);
		console.log(`Run Storybook with ${chalk.cyan(`npm start`)}`);
	};

	if (fs.existsSync(newComponentPath)) {
		console.error(
			chalk.red(
				`Directory ${newComponentPath} already exists. New components must have a unique name.`
			)
		);
	} else {
		try {
			await componentCreationProcess();
		} catch (e) {
			console.error(chalk.red('ERROR in componentCreationProcess'));
			throw e;
		}
	}
};

const questions = [
	{
		type: 'input',
		name: 'snakeCaseName',
		message: 'Enter the component name, e.g. "hero-banner"',
		validate: input =>
			/^[a-z-]+$/.test(input) ? true : 'Use snake case, e.g. "hero-banner".',
	},
];

inquirer.prompt(questions).then(createComponent);

process.on('SIGINT', () => console.log('\n'));
*/
