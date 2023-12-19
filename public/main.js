let addName = document.getElementById('name')
let nameInput = document.getElementById('person-name')

addName.addEventListener('submit', async (event) => {
    event.preventDefault();



    let maBod = {
        name: nameInput.value
    }
    
    // change what's below to random generator or something so it gets both name and joke
    await axios.post('/add-name', maBod)
    
    alert('Name added to database')
    
    
    const response = await axios.get('/random-joke')
        
    pickupLineGen(response.data);
           
})


// axios.get('/names')
// .then((response) => {
//    console.log(response.data);
// })
// .catch((err) => {
//     console.log(err);
// })



function pickupLineGen(line){
    // create the elements that will hold the persons name from people DB, and the joke from jokeDb
    document.getElementById('display-line').innerHTML = ''

    let container = document.createElement('div')
    let headName = document.createElement('h3')
    let goldLine = document.createElement('p')

    container.appendChild(headName)
    container.appendChild(goldLine)
    // grab the last name that was entered from peopleDb
    headName.innerHTML = nameInput.value + ','
    
    // grab a random pickup line from jokeDb
    goldLine.innerHTML = line 
    
    // append child to div with id "display-line"
    document.getElementById('display-line').appendChild(container)
}


let deleteName = document.getElementById('delete-name');

deleteName.addEventListener('submit', (evt) => {
    evt.preventDefault()

    let deleteName = document.getElementById('delete-name-input').value;
    axios.delete(`/delete-name/${deleteName}`)
    .then((response) => {
        alert(`${deleteName} was removed!`)
    })
})