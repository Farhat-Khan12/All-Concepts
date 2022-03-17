var fs = require("fs");
fs.readFile('input.txt', function (ferr, filedata) {
	if (ferr) return console.error(ferr);
	console.log(filedata.toString());
});
console.log("End of Program execution");
