const button = document.createElement("button");
button.textContent = "Click to input number";
document.body.prepend(button);
button.addEventListener("click", ()=>{
    alert(prompt("Enter the number of squares per grid you want"))
    
})
const gridContainer = document.getElementById("container");
gridContainer.setAttribute("style",
                            `display: flex; 
                            align-items:center;
                            flex-wrap: wrap;
                            width: 1500px
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
    // div.addEventListener("mouseleave", ()=>{
    //     div.style.backgroundColor = ""
    // })
}