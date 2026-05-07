const div = document.querySelector("div")
const btn = document.querySelector("button")
let num = 0

btn.addEventListener("click", () =>{

    const novoElemento = document.createElement("div")
    novoElemento.classList.add("container")

    novoElemento.addEventListener("click", () =>{
        novoElemento.remove()
    })

    num++

    novoElemento.textContent = num
    
    div.appendChild(novoElemento)

})

