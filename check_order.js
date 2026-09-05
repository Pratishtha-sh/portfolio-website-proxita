const fs = require('fs');
const c = fs.readFileSync('src/constants/index.js', 'utf8');
const re = /id:\s*['"]([^'"]+)['"]/g;
let m;
const ids = [];
while ((m = re.exec(c)) !== null) ids.push(m[1]);
console.log('Project IDs found:', ids);
