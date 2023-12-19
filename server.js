import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';


let app = express()

app.use(express.json())

let peopleDb = []

let jokeDb = [`Are you a microwave? 'Cause MMMMMMMMMMMMMMM`, 'Do you have an ugly partner? Do you want one?','*drops sugar packet* Excuse me, I think you dropped your nametag', 'Did you sit in sugar? Because you lookin sweet!']



app.use(express.static(join(dirname(fileURLToPath(import.meta.url)), '/public')))

app.get('/names', (req,res) => {
    let lastName = peopleDb.slice(-1);
    res.status(200).send(lastName)
})

app.get('/random-joke', (req, res) => {
    const random = Math.floor(Math.random() * jokeDb.length)
    res.status(200).send(jokeDb[random]);
})

app.post('/add-name', (req,res) => {
    peopleDb.push(req.body);
    res.status(200).send(req.body)
})

app.delete('/delete-name/:name', () => {
    let deleteName = req.params.name
    console.log(req.params.name);
    for (let i=0; i<peopleDb.length; i++){
        if (peopleDb[i].name === deleteName){
            peopleDb.splice(i, 1)
        }
    }

})


app.listen(8069, () => {
    console.log('Server is running on port 8069')
})