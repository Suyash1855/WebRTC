const fs = require("fs");
// fs.writeFile("message.txt", "Hello node.js v1.17.1", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved");
// });

fs.readFile("message.txt", (err) => {
  if (err) throw err;
  console.log(data);
});
