let nameInput = document.querySelector("#namn")
let btn = document.querySelector("#greet");
let greetingDiv = document.querySelector("#greeting");

btn.addEventListener("click", () => {
    let div = document.createElement("div");
    div.classList.add("box")
    
    let h2 = document.createElement("h2");
    h2.innerText = `Välkommen ${nameInput.value} !`

    greetingDiv.append(div);
    
    
    //Delete-btn
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    
    div.append(h2, deleteBtn);
    
    deleteBtn.addEventListener("click", (event) => {
        //Ta bort div
        //DOM Traversal
        console.log(event.target.nextElementSibling);

    })

})