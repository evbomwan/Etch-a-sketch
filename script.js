const button = document.createElement("button");
button.textContent = "Click to input number";
document.body.prepend(button);
button.addEventListener("click", getUserInput)
function getUserInput (){
    gridContainer.remove();
    const newGridContainer = document.createElement("div");
    newGridContainer.setAttribute("style",
                            `display: flex; 
                            align-items:center;
                            flex-wrap: wrap;
                            width: 1500px;
                            height: 640px;
                            `
    )
    document.body.append(newGridContainer);
    newGridContainer.innerHTML = "";
    const input = prompt("Enter number grid rows and columns")
    for (let i = 0; i < (input * input); i++) {
        const div = document.createElement("div");
        const size = 1500 / input;
        div.setAttribute("style",
                        `flex-basis: ${size}px; 
                        height: ${size}px;
                        b0x-sizing:border-box;
                         `);
        newGridContainer.appendChild(div);
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let color = `rgb(${red}, ${green}, ${blue})`
        div.addEventListener("mouseenter", ()=>{
        div.style.backgroundColor = color
    })
    }
}
    
const gridContainer = document.getElementById("container");
gridContainer.setAttribute("style",
                            `display: flex; 
                            align-items:center;
                            flex-wrap: wrap;
                            width: 1500px;
                            `
)

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.setAttribute("style","flex-basis:90px; height: 40px");
    gridContainer.appendChild(div);
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`
    div.addEventListener("mouseenter", ()=>{
        div.style.backgroundColor = color
    })
    div.addEventListener("mouseleave", ()=>{
        div.style.backgroundColor = ""
    })
}