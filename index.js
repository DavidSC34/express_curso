const express = require('express');
const app = express();
app.use(express.json());

app.get('/user',(req,res) =>{
     res.json({
         'username' : 'Pedro',
         'lastname' : 'Perez'
     });
});

app.post('/user/:id',(req,res) =>{
    console.log(req.body);
    console.log(req.params);
    res.send('METODO POST');
});

app.put('/user/:id',(req,res) =>{
    console.log(req.body);
    res.send('User '+ req.params.id + ' updated');
});

app.delete('/user/:userId',(req,res) =>{
    
    res.send('User  '+ req.params.userId +' deleted');
});

app.listen(5000,() =>{
    console.log('Server on port 5000');
});