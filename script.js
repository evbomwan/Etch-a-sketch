const gridContainer = document.getElementById("container");
gridContainer.setAttribute("style",
                            `display: flex; 
                            align-items:center;
                            flex-wrap: wrap;
                            `
)
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.setAttribute("style","border: 1px solid black; flex-basis:90px; height: 40px");
    gridContainer.appendChild(div);
}