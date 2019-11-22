var express = require("express");
var app = express();

var PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
//app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.

app.listen(PORT, function () {
  console.log('Server running... at port ' + PORT);
});







   
  