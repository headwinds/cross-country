## Update package.json

If you have 2 projects and you want to upgrade all the libraries in one project to match another project.

Copy the package.json file that you want to migrate to and rename it package_migration.json

Then run:

```
node update-deps.js
```

This will update your existing package.json updating all the libraries to matches those found in package_migration.json