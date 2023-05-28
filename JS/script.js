// this below is to allow HTML & CSS to load 1st bfr JS load help avoid the page to crash in sm cases
document.addEventListener("DOMContentLoaded", function(){
    console.log("Hi!!");
    createGrid(16);
    
});


function createGrid(cells){
    const main_div = document.getElementById("main-div");

    main_div.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    main_div.style.gridTemplateRows = `repeat(${cells}, 1fr)`;

    // create var to give precision of div to be created

    let totalDivs = cells * cells;
    // for loop to iterate thru the creation of expected total amount of div
    for(let i = 0; i < totalDivs; i++){
        let newDivs = document.createElement("div");
        newDivs.style.backgroundColor= "lightgray";
        main_div.insertAdjacentElement("beforeend", newDivs);
    }

}

