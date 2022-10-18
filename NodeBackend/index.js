/* Set up Express Server */
const express = require('express');  
const app = express();
const func = require('./functions'); 
const fetch = require('node-fetch');
const { dbConnect } = require('./config/db');
const cors = require('cors');
//app represents express for us. 

const PORT = process.env.PORT | 5000; 

/* connect to mongoDB */
dbConnect();

app.use(express.json());
/* Sinple get api */
app.get('/', (req,res)=>{
    res.send({ 'value': func.add(5,6) }); 
});

func.placeOrder('Iphone 23',()=>console.log('make the payment')); 

//if we call an API using fetch(), it returns a Promise. But this fetch is in node-fetch library

/* API for getting all uses from remote server*/
app.get('/users', (req,res)=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=> response.json())
     .then(data=> res.send(data))
     .catch(error=>console.error(error));
});

/* Call the above API using async await method*/

app.get('/users/async', async (req,res)=>{
    try{ 
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json();
        res.send(data);
    }
    catch(err){
        res.send(400, {'error_msg': err.msg});
    }
});
 
app.use(cors());

app.use('/api/employee', require('./routes/api/employee'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/manager', require('./routes/api/manager'));
app.use('/api/leave', require('./routes/api/leave'));
app.use('/api/ticket', require('./routes/api/ticket'));

app.listen(PORT, ()=>{
    console.log('server started at port 5000')
}); 
