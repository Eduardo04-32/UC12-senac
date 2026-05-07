

const div = document.querySelector("div")
const btn = document.querySelector("button")
const btnrem = document.getElementById("btn-rem")

btn.addEventListener("click", () => {
    const box = document.createElement("div")
    box.classList.add("container")
    div.appendChild(box)
})

btnrem.addEventListener("click", () => {
    if(div.children.length  > 0){
        div.children[0].remove()
    }
})