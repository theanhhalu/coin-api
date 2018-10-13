
const express = require('express');
const app = express();
const {PORT} = require('./config');
const router = require('./routes');


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', router);

server.listen(PORT , () => console.log(`server's running on port ${PORT}`));
 