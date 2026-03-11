const fs = require('fs');
let content = fs.readFileSync('package.json', 'utf-8');
content = content.replace("<<<<<<< HEAD\n    \"esbuild\": \"^0.27.3\",\n=======\n    \"jsdom\": \"^28.1.0\",\n>>>>>>> origin/main", "    \"esbuild\": \"^0.27.3\",\n    \"jsdom\": \"^28.1.0\",");
fs.writeFileSync('package.json', content, 'utf-8');
