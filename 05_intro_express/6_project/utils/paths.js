const path = require("path");
console.log("Root Directory:", path.dirname(require.main.filename));

module.exports = path.dirname(require.main.filename);
