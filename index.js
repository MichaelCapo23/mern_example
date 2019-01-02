const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();
app.use(cors()); // set the request header to * so itll talk to any server that tries to communicate with it (your other server)
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/', (request, response) => {
    response.send('<h1>The server is working!</h1>');
});

app.get('/api/test', (request, response) => {
   const data = {
       success: true,
       message: "Test API working",
       another: "property goes here"
   };
   response.send(data);
});

app.get('/api/user', (request, response) => {
   const user = {
       email: 'jimbean.com',
       name: "Jim Bean",
       username: "jimIsABean"
   };
   response.send(user);
});

app.post("/api/send-message", (request, response) => {
   console.log("data from client: ", request.body);
   response.send({
       success: true,
       data: request.body,
   });
});


app.listen(PORT, () => {
   console.log("server running on localhost port: " +  PORT);
}).on("error", (err) => {
    console.log("server listen error, do you already have a server running on port: " + PORT);
});

