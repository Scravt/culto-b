const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
                arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
            }
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const componentsDir = path.join(__dirname, 'components');
const appDir = path.join(__dirname, 'app');

if (!fs.existsSync(componentsDir)) {
    console.log("No components directory found.");
    process.exit(0);
}

const componentFiles = getAllFiles(componentsDir, []);
const allSourceFiles = getAllFiles(appDir, []).concat(componentFiles);

console.log(`Analyzing ${componentFiles.length} components against ${allSourceFiles.length} source files...`);

const unused = [];

componentFiles.forEach(compFile => {
    const filename = path.basename(compFile);
    // Remove extension
    const nameToCheck = filename.replace(/\.(tsx|jsx)$/, '');

    // Skip index files or layout/page files if they were in components (unlikely but safe)
    if (nameToCheck === 'index') return;

    // PascalCase name (often used in imports)
    const pascalName = nameToCheck.charAt(0).toUpperCase() + nameToCheck.slice(1);

    // Check if "nameToCheck" appears in any OTHER file
    let found = false;

    for (const sourceFile of allSourceFiles) {
        if (sourceFile === compFile) continue;

        const content = fs.readFileSync(sourceFile, 'utf8');

        // Simple heuristic: check if the string exists. 
        // We check for:
        // - Import path: "components/ui/accordion"
        // - Component usage: "<Accordion" or "Accordion"
        // - Variable usage: "Accordion"

        // Note: shadcn components often are lowercase filenames (accordion.tsx) but exported as Accordion.
        // So checking for the pascalName is often better for usage, but checking for filename is good for imports.

        if (content.includes(nameToCheck) || content.includes(pascalName)) {
            found = true;
            break;
        }
    }

    if (!found) {
        unused.push(compFile);
    }
});

console.log(`Potential unused components found: ${unused.length}`);
fs.writeFileSync('unused_components.txt', unused.join('\n'));
console.log("Written to unused_components.txt");
