//BUILD IN MODULE IN NODEJS

import fs from "fs";

//Asynchronous function // RUN AT THE END OF THE CODE
fs.readFile("./file.txt", "utf8", (err,data) => {
    if(err) {
        return err;
    }
    else {
        console.log(data);
    }
});

// Synchronous function // RUN INSTANTLY THEN THE REST OF THE CODE will EXECUTE
const output = fs.readFileSync("./file2.txt", "utf-8")
console.log(output);

// Write a new text file using fs

fs.writeFile("./file3.txt", "NojeJs TUT3 using fs.writeFile", "utf-8",() => {
    console.log("FIle saved");
})
