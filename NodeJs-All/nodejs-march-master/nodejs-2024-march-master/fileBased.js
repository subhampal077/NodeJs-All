// FILE BASED MODULE IN NODEJS
const a = {
    average: (a,b)=> {
        console.log((a+b)/2);
    },
    percent: (a,b)=> {
        console.log((a/b)*100);
    }
};

// module.exports = a;

export default a;


//Modules in js - 1) File based, 2) Built In, 3) Third-Party
