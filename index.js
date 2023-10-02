const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 5000;


const todos = [];

app.use(bodyParser.json());

function findIndex(arr,id){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].id === id)
        {
            return i;
        }
       return -1;
    }
}



app.get('/todos',(req,res)=>{
    res.json(todos)
})

app.post('/todos',(req,res)=>{
    const newTodo = {
        id : Math.floor(Math.random()*10000),
        title : req.body.title,
        description : req.body.description,
    }
    todos.push(newTodo);
    res.status(200).json(newTodo);
})

app.get('/todos/:id',(req,res)=>{
    const todoIndex = findIndex(todos, parseInt(req.params.id))
    if(todoIndex === -1)
    {
        res.status(400).send();
    }
    else
    {
        res.json(todos[todoIndex])
    }
})


app.put('/todos/:id',(req,res)=>{
    const todoIndex = findIndex(todos , parseInt(req.params.id));
    if(todoIndex === -1)
    {
        res.status(400).send();
    }
    else
    {
        todos[todoIndex].title = req.body.title,
        todos[todoIndex].description = req.body.description,
        res.json(todos[todoIndex])
    }
})

app.delete('/todos/:id',(req,res)=>{
    const todoIndex = findIndex(todos , parseInt(req.params.id));
    if(todoIndex===-1)
    {
        res.status(400).send();
    }
    else{
        todos.splice(todoIndex, 1);
        res.status(200).send();
    }
})


//for all other routes
app.use((req,res,next)=>{
    res.status(400).send();
})


app.listen(port, ()=> {
    console.log(`server listening at port ${port}`)
})