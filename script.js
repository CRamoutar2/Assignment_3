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
    console.log("Clicked Add Row");
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
    console.log(numCols);
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
    console.log("Clicked Remove Row");
    grid.removeChild(grid.lastChild);
    numRows--;
}

//Remove a column
function removeC() {
    console.log("Clicked Remove Col");
    for (let i = 0; i < numRows; i++) {
        rows[i].removeChild(rows[i].lastChild);
    }
    numCols--;
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    let cellCount = document.querySelectorAll(".gridCells").length;
    for (let i = 0; i < cellCount; i++) {
        cells[i].style.backgroundColor = colorSelected;
    }
    console.log("Clicked Fill All")
}

function clearAll(){
    console.log("Clicked Clear All")
}

function fillU(){
    console.log("Clicked Fill All Uncolored")
}
