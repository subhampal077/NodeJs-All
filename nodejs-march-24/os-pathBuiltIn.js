// builtIn path module

import path from "path";

const a = path.extname("/nodejs-2024-march/file.txt");
console.log (a);

const b= path.basename("/nodejs-2024-march/index.js");
console.log(b);

const c = path.dirname("/nodejs-2024-march/fileBased.js");
console.log(c);

const d=path.join("/nodejs-2024-march/index.js" + " I am subham");
console.log(d);

//////////////////////// 
// OS builtIn module

import os from "os";

const aa = os.hostname();
console.log(aa);

console.log(os.freemem());