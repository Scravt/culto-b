const fs = require('fs');
const path = require('path');

try {
    const data = fs.readFileSync('unused_components.txt', 'utf8');
    const files = data.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    files.forEach(file => {
        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
            console.log(`Deleted: ${file}`);
        } else {
            console.log(`File not found (already deleted?): ${file}`);
        }
    });
} catch (err) {
    console.error("Error:", err);
}
