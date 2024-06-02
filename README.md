# Adding new Modules

-   Copy the Module template folder into modules
-   In the \_constants.ts file, change the module name to match folder
-   In index.ts for the modules folder, export the new module folder

# Adding new Save Versions

-   In the shared folder > versions, create a new ts file incrementing to the next version
-   Copy what's from v1.ts (or the previous latest save)
-   Update the version number in the file
-   Edit the conversion function (make sure to bump the previousversion.state up)
-   Edit the constants file in the shared folder with updated state versions
-   In the core > saves > index.ts file, import the new save
-   In the same file, add the conversion function to the version function, for migration
