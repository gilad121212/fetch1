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
button.addEventListener("click", async (event) => {
    for (let i = 0 ; i < 5 ; i++){
    const img = document.createElement("img")
   const dataj = await fetch(" https://randomuser.me/api/")
   const data = await dataj.json()
   img.src = data.results[0].picture.thumbnail
   document.body.appendChild(img)
   const name = document.createElement("p")
    name.innerText = `${data.results[0].name.first}  ${data.results[0].name.last} ${data.results[0].email}`
   document.body.appendChild(name)
   console.log(data.results[0].name.first , data.results[0].name.last,data.results[0].email);
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
