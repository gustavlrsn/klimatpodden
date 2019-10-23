// copy _redirects file to ./out folder
const fs = require("fs");
// destination.txt will be created or overwritten by default.
fs.copyFile("_redirects", "./out/_redirects", err => {
  if (err) throw err;
  console.log("_redirects was copied to ./out/_redirects");
});
