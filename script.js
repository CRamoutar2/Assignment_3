let numRows = 0;
let numCols = 1;
let colorSelected; 

const grid = document.getElementById("grid");
let rows = document.getElementsByClassName("gridRows");
let cells = document.getElementsByClassName("gridCells");

//Add a row
function addR() {
    numRows++;
    let row = document.createElement("tr");
    grid.appendChild(row).className = "gridRows";
    if (numCols === 1) {
        for (let i = 0; i < numCols; i++) {
            let cell = document.createElement("th");
            grid.lastChild.appendChild(cell).className = "gridCells";
        }
    }
    else {
        for (let i = 0; i < numCols; i++) {
            let cell = document.createElement("th");
            row.appendChild(cell).className = "gridCells";
            grid.appendChild(row);
        }
    }
}

//Add a column
function addC() {
    if (numRows === 0){
        addR();
    }
    else {
        numCols++;
        for(let i = 0; i < numRows; i++){
            let cell = document.createElement("th");
            rows[i].appendChild(cell).className = "gridCells";
        }
    }
}

//Remove a row
function removeR() {
    if (numRows != 0)
    {
        console.log("Clicked Remove Row");
        grid.removeChild(grid.lastChild);
        numRows--;
    }
}

//Remove a column
function removeC() {
    if (numCOls != 0)
    {
        console.log("Clicked Remove Col");
        for (let i = 0; i < numRows; i++) {
            rows[i].removeChild(rows[i].lastChild);
        }
        numCols--;
    }
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
}

// fills all cells with selected color
function fillAll(){
    let cellCount = document.querySelectorAll(".gridCells").length;
    for (let i = 0; i < cellCount; i++) {
        cells[i].style.backgroundColor = colorSelected;
    }
}

function fillOne() {
    let cellCount = document.querySelectorAll(".gridCells").length;
    for (i = 0; i < cellCount; i++) {
        cells[i].addEventListener('click', function(e) {
            e.target.style.backgroundColor = colorSelected;
        });
    }
}

function clearAll(){
    let cellCount = document.querySelectorAll(".gridCells").length;
    for (let i = 0; i < cellCount; i++) {
        cells[i].style.backgroundColor = "";
    }
    console.log("Clicked Clear All")
}

function fillU(){
    let cellCount = document.querySelectorAll(".gridCells").length;
    for(let i = 0; i < cellCount; i++){
        if(cells[i].style.backgroundColor === ""){
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}
