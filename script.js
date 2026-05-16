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
    div.setAttribute("style","border: 1px solid black; flex-basis:90px; height: 40px");
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