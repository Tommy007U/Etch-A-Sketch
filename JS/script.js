let color = "black";
let click = false;

// method below is to allow HTML & CSS to load 1st bfr JS load help avoid the page to crash in sm cases
document.addEventListener("DOMContentLoaded", function(){
    //console.log("Hi!!");
    createGrid(16);

    // once click on the body the event trigger a message to draw or not to
    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click)
                draw.innerHTML="You are allowed to draw now";
                draw.style.color= "blue";
            }else{
                draw.innerHTML = "You are not yet allowed to draw Click again!";
                draw.style.color = "red";
            }
        });

    // this var will triger the button to influence the f(x) to create nbr of cells the user type on the prompt
    let popup_btn = document.querySelector("#popup");
    popup_btn.addEventListener("click", function(){
        let cells = selectSize();   // cells take the value this function
        createGrid(cells); // this function display the nbr of cells the user entered on th prompt
    })   
});


function createGrid(cells){
    const main_div = document.getElementById("main-div");

    main_div.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    main_div.style.gridTemplateRows = `repeat(${cells}, 1fr)`;

    // create var to give precision of div to be created

    let totalDivs = cells * cells;
    // for loop to iterate thru the creation of expected total amount of div
    for(let i = 0; i < totalDivs; i++){
        let div = document.createElement("div");
        // event to start applying color on the cells
        div.addEventListener("mouseover", colorDiv)
            div.style.backgroundColor="red";
        
        div.style.backgroundColor= "lightgray";
        main_div.insertAdjacentElement("beforeend", div);
    }

}

function selectSize(){
    let input = prompt("What is the size of the cells selected ?");
    let message = document.querySelector(".message");
    if(input ===" "){
        message.innerHTML = "Please Provide a Number ";
        
    }else if(input < 0 || input > 100){
        message.innerHTML =" Please Provide  Number between 1 to 100";
    }else{
        message.innerHTML = " Now you can Play!!!";
        return input;
    }
}
function colorDiv(){  
    if(click){ 
        
       if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)` // this represent the div
       }else{
        this.style.backgroundColor ="black";
      }
    } 

}

function setColor(colorChoice){
    color = colorChoice;
}

// f(x) once click it will reset all color to white by using forEach() method  
function resetCells(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor= "white");
}