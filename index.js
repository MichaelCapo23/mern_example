const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();
app.use(cors()); // set the request header to * so itll talk to any server that tries to communicate with it (your other server)

app.get('/', (request, response) => {
    response.send('<h1>The server is working!</h1>');
});

app.listen(PORT, () => {
   console.log("server running on localhost port: " +  PORT);
}).on("error", (err) => {
    console.log("server listen error, do you already have a server running on port: " + PORT);
});