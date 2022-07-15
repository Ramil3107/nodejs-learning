import http from "http"
import fs from "fs"
import path from "path"
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const server = http.createServer((request, response) => {

    // if (request.url === "/") {
    //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
    //         if (err) {
    //             throw err
    //         }

    //         response.writeHead(200, {
    //             "Content-Type": "text/html"
    //         })

    //         response.end(data)
    //     })
    // }else if (request.url === "/contacts") {
    //     fs.readFile(path.join(__dirname, "public", "contacts.html"), (err, data) => {
    //         if (err) {
    //             throw err
    //         }

    //         response.writeHead(200, {
    //             "Content-Type": "text/html"
    //         })

    //         response.end(data)
    //     })
    // }


    let filePath = path.join(__dirname, "public", request.url === "/" ? "index.html" : request.url)
    const ext =  path.extname(filePath)
    let contentType = "text/html"

    switch (ext) {
        case ".css":
            contentType = "text/css"
            break
        case ".js":
            contentType = "text/javascript"
            break 
        default:
            contentType = "text/html"
    }

    if (!ext) {
        filePath += ".html"
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
                if (err) {
                    response.writeHead(500)
                    response.end("Error")
                } else {
                    response.writeHead(200, {
                        "Content-Type": "text/html"
                    })
                    response.end(data)
                }
            })
        } else {
            response.writeHead(200, {
                "Content-Type": contentType
            })
            response.end(content)
        }
    })
})


const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`)
})