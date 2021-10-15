let numRows = 0;
let numCols = 0;
let colorSelected; 

const grid = document.getElementById("grid");
let rows = document.getElementsByClassName("gridRows");
let cells = document.getElementsByClassName("gridCells");

//Add a row
function addR() {
    numRows++;
    if(numCols === 0){
        addC();
    }
    let row = document.createElement("tr");
    alert("Clicked Add Row")
    grid.appendChild(row).className = "gridRows";
}

//Add a column
function addC() {
    numCols++;
    if(numRows === 0){
        addR();
    }
    alert("Clicked Add Col")
    for(let i = 0; i < numRows; i++){
        let cell = document.createElement("th");
        rows[i].appendChild(cell).className = "gridCells";
    }
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}

//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
