
const http = require('http');
const {app}= require('./src/app/app');
const { connectToDb } = require('./src/configs/db.con');

const port = 8000
const server= http.createServer(app)

async function startServer(){
   
    await connectToDb();
    server.listen(port,()=>
    {
        
        console.log( `runnig on http://localhost:${port}...`)
    })
    
}
startServer();
