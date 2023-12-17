import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';


let app = express()

app.use(express.json())

let peopleDb = []

let jokeDb = [`Are you a microwave? 'Cause MMMMMMMMMMMMMMM`,'hello there, general kenobi']


app.use(express.static(join(dirname(fileURLToPath(import.meta.url)), '/public')))

app.get('/names', (req,res) => {
    let lastName = peopleDb.slice(-1);
    res.status(200).send(lastName)
})

app.get('/random-joke', (req, res) => {
    const random = Math.floor(Math.random() * jokeDb.length)
    res.send(jokeDb[random]);
})

app.post('/add-name', (req,res) => {
    peopleDb.push(req.body);
    res.status(200).send(req.body.name)
})


app.listen(8069, () => {
    console.log('Server is running on port 8069')
})