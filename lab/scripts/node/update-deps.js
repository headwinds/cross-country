const fs = require('fs');

// Read both files
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const migrationJson = JSON.parse(fs.readFileSync('./package_migration.json', 'utf8'));

// Update dependencies
const dependencies = packageJson.dependencies || {};
const migrationDeps = migrationJson.dependencies || {};

for (const [pkg, version] of Object.entries(migrationDeps)) {
  if (dependencies[pkg]) {
    console.log('updating', pkg, 'from', dependencies[pkg], 'to', version);
    dependencies[pkg] = version;
  }
}

// Update package.json with new versions
packageJson.dependencies = dependencies;

// Write updated package.json
fs.writeFileSync(
  './package.json',
  JSON.stringify(packageJson, null, 2) + '\n'
);

console.log('Dependencies updated successfully');
