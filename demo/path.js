import path from "path"
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

console.log("File name: ", path.basename(__filename))
console.log("File direction name: ", path.dirname(__filename))
console.log("Extname: ", path.extname(__filename))
console.log("Parse: ", path.parse(__filename))
console.log("Parse: ", path.parse(__filename).name)

console.log("Parse: ", path.join(__dirname, "server", "index.html"))


