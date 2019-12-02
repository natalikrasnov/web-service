console.log('client side javascript file is loaded!')
const weaterForm = document.querySelector('form')
const search = document.querySelector('input')
const massageOne = document.querySelector('#message-1')
const massageTwo = document.querySelector('#message-2')

//massageOne.textContent = 'java content'


weaterForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    console.log(location)
    massageOne.textContent = 'Loading ..'

    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        
    massageOne.textContent = location

    //  console.log(response.json())
        response.json().then((data)=>{
            if(data.error){
               massageTwo.textContent= data.error
            }else{
                massageTwo.textContent = JSON.parse(JSON.stringify(data.data.location))
                console.log(JSON.parse(JSON.stringify(data.data.location)))
            }
        })
    })
})