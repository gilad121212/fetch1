// targl1.1
function func1(){
    const button = document.createElement("button")
    button.innerText = "click me to get name"
    document.body.appendChild(button)
button.addEventListener("click", async (event) => {
    const img = document.createElement("img")
   const dataj = await fetch("https://randomuser.me/api")
   const data = await dataj.json()
   img.src = data.results[0].picture.thumbnail
   document.body.appendChild(img)
   const name = document.createElement("p")
    name.innerText = `${data.results[0].name.first}  ${data.results[0].name.last} ${data.results[0].email}`
   document.body.appendChild(name)
   console.log(data.results[0].name.first , data.results[0].name.last,data.results[0].email);
})
}

//targil 1.2
function func2(){
    const button = document.createElement("button")
    button.innerText = "click me to get 5 names"
    document.body.appendChild(button)
    let count = 0
button.addEventListener("click", async (event) => {
    while (count < 5){
        const img = document.createElement("img")
   const dataj = await fetch(" https://randomuser.me/api/")
   const data = await dataj.json()
        if (data.results[0].gender === "male"){
   img.src = data.results[0].picture.thumbnail
   document.body.appendChild(img)
   const name = document.createElement("p")
    name.innerText = `${data.results[0].name.first}  ${data.results[0].name.last} ${data.results[0].email}`
   document.body.appendChild(name)
   console.log(data.results[0].name.first , data.results[0].name.last,data.results[0].email);
   count++
        }
    }
})
}

//targil 2
function func3(){
    const button = document.createElement("button")
    button.innerText = "get a joke"
    document.body.appendChild(button)
    button.addEventListener("click", async (event) => {
        const dataj = await fetch("https://api.humorapi.com/jokes/search?api-key=8a47d0eeb48e412a9e13750def8faef3")
        const data = await dataj.json()
        const joke = document.createElement("h1")
        joke.innerText = data.jokes[0].joke
        document.body.appendChild(joke)


    })
}

//targil 3 
function func4(){
    const button = document.createElement("button")
    button.innerText = "get a products"
    document.body.appendChild(button)
    button.addEventListener("click", async (event) => {
        const dataj = await fetch("https://fakestoreapi.com/products")
        const data = await dataj.json()
        for (let arr of data){
            console.log(arr.title)
            const joke = document.createElement("h1")
            joke.innerText = arr.title
            document.body.appendChild(joke)

        }
    })

}

//targil 5
function func5(){
    const firstName = document.createElement("input")
    const lastName = document.createElement("input")
    const email = document.createElement("input")
    const age = document.createElement("input")
    firstName.placeholder = "get a first name"
    lastName.placeholder = "get a last name"
    email.placeholder = "get a last email"
    age.placeholder = "get a last age"
    document.body.append(firstName)
    document.body.append(lastName)
    document.body.append(email)
    document.body.append(age)
    const sand = document.createElement("button")
    sand.innerText = "click me to app date "
    document.body.append(sand)
    sand.addEventListener("click",async (event) => {
        const reqOptions = {
            method: 'post',
            body: JSON.stringify({ name: firstName.value , last:lastName.value , email:email.value , age:age.value }),
            headers: {
            'Content-Type': 'application/json'
            }
            }
            const dataj = await fetch("https://jsonplaceholder.typicode.com/users", reqOptions)
            const data = await dataj.json()
            console.log(data)
    })


}