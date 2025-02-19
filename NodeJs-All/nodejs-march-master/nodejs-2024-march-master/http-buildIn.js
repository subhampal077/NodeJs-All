import http from "http";

import fs from 'fs';

// const server = http.createServer((req,res) => {
//     console.log(req.url);
//     return res.end(`<h1>Here is our nodejs serever</h1>`);
// });

// server.listen(8000,"localhost", ()=>{
//     console.log("server is working !!");
// });


const abc = fs.readFileSync("./http-buildIn.js", "utf-8");
console.log(abc);

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        return (
            res.end(`<h1>Here is our nodejs serever</h1>`)
        );
    }
    else if (req.url === "/about") {
        return (
            res.end("<h1>This is about page</h1>"));
    }
else {
    return(
    res.end("<h1>404 error</h1>"));
}

})

server.listen(8000, "localhost", () => {
    console.log("server is working !!");
});


