import os from "os"

console.log("Operation System: ", os.platform())
console.log("Arch", os.arch())
console.log("CPU", os.cpus())
console.log("free memory", os.freemem())
console.log("total memory", os.totalmem())
console.log("home directory", os.homedir())
console.log("on", os.uptime())

