let addName = document.getElementById('name')
let nameInput = document.getElementById('person-name')

addName.addEventListener('submit', (event) => {
    event.preventDefault();



    let maBod = {
        name: nameInput.value
    }
    
    axios.post('/add-name', maBod)
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.log(err);
    })



})


axios.get('/names')
.then((response) => {
   console.log(response.data);
})
.catch((err) => {
    console.log(err);
})

function pickupLineGen(nameArr,lineArr){
    // create the elements that will hold the persons name from people DB, and the joke from jokeDb
    document.getElementById('display-line').innerHTML = ''

    let container = document.createElement('div')
    let headName = document.createElement('h3')
    let goldLine = document.createElement('p')

    container.appendChild(headName)
    container.appendChild(goldLine)
    // grab the last name that was entered from peopleDb
    headName.innerHTML = nameArr[-1].name
    
    // grab a random pickup line from jokeDb
    goldLine.innerHTML =lineArr[Math.floor(Math.random() * lineArr.length)]
    
    // append child to div with id "display-line"
    document.getElementById('display-line').appendChild(container)
}