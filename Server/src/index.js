/* const http = require("http");
const characters = require("./utils/data");
const {getCharById} = require("./controllers/getCharById")

http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split("/").pop()
        
        getCharById(res, Number(id))
    }
    
}).listen(3001, "localhost");
 */
//!Original
/* const express = require('express');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});
 */


const express = require('express');
const server = express();
const PORT = 3001;
const morgan = require("morgan")
const router = require("./routes/index")
/* const {getCharById} = require("./controllers/getCharById"); */

server.use(express.json())
server.use(morgan("dev"))

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use("/rickandmorty", router)

/* server.get('/:id',(req,res)=>{
    getCharById(req, res);
}) */

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
});