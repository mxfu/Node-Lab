const routes = require('./routes/routes');
//require package and set the port
const bodyParser = require('body-parser');
//const { response } = require('express');
const express = require('express');
const port = 3002;
const app = express();


/*
app.get('/', (request, response)=>{
    console.log(`URL: ${request.url}`);
    response.send(`Hello, Server!`);
});
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));



/*
app.get('/', (request, response)=>{
    response.send({message: 'Node.js and Express REST API'});
});
*/

//Start the server
const server = app.listen(port, (error) =>{
    if(error)return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});

app.get(routes(app));