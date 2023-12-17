import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';


let app = express()

app.use(express.json())

let peopleDb = []

let jokeDb = [`Are you a microwave? 'Cause MMMMMMMMMMMMMMM`,]
// const random = Math.floor(Math.random() * jokeDb.length)


app.use(express.static(join(dirname(fileURLToPath(import.meta.url)), '/public')))

app.get('/names', (req,res) => {
    let lastName = peopleDb.slice(-1);
    res.status(200).send(lastName)
})

app.post('/add-name', (req,res) => {
    peopleDb.push(req.body);
    let lastName = peopleDb.slice(-1);
    res.status(200).send(lastName)
})


app.listen(8069, () => {
    console.log('Server is running on port 8069')
})