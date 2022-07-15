//File System
import fs from "fs"
import path from "path"
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const filePath = path.join(__dirname,"test", "test.txt")

// fs.mkdir(path.join(__dirname,'test'), (err) => {
// if(err) {
//     throw err
// }
// console.log("Folder created")
// })



// fs.writeFile(filePath, "Hello NodeJS", (err) => {
//     if(err) {
//         throw err
//     }
//     console.log("File created")
// })

// fs.appendFile(filePath, "\nHello again", (err) => {
//     if(err) {
//         throw err
//     }
//     console.log("File created")
// })

fs.readFile(filePath,"utf-8",(err,content) => {
    if(err) {
        throw err
    }

    console.log("Content :", content)
// const data = Buffer.from(content)
//     console.log("Content: ", data.toString())


})
