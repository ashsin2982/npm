const express = require('express');
const app = express();

app.use(express.json());

let p1 = [];


app.post('/p1', (req, res) => {
    p1.push(req.body);
    res.json({ message: "Task added", p1});
});


app.get('/p1', (req, res) => {
    res.json({ message: "Data", p1 });
});


app.put('/p1/:index', (req, res) => {
    const index = req.params.index;
    p1[index] = req.body;
    res.json({ message: "Task replaced", p1 });
});


app.patch('/p1/:index', (req, res) => {
    const index = req.params.index;
    if (p1[index]) {
        p1[index].task = req.body.task;
        res.json({ message: "Task updated", p1});
    } 
    else {
        res.status(404).json({ message: "Task not found" });
    }
});


app.delete('/p1/:index', (req, res) => {
    const index = req.params.index;
    p1.splice(index, 1);
    res.json({ message: "Task deleted", p1 });
});

app.listen(3000, () => console.log("Todo API running on port 3000"));
