var url = require('url');
var express = require('express');
var multer  = require('multer');
var app = express();
var upload = multer();

app.use(express.static(__dirname + '/public'));

app.post('/fileupload', upload.single('userfile'), function(req, res, next){
    res.end(JSON.stringify({size: req.file.size}));
});

app.listen(process.env.PORT || 8080);