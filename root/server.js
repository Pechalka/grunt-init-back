var	express = require('express')
	, app = express()
	, path = require('path');

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser()); 
app.use(express.static(path.join(__dirname, 'public') ));

app.use(express.session({ secret: 'zzzzzzz'} ));


app.listen(8080, function(){
  console.log("Express server listening on port %d", '8080');
});