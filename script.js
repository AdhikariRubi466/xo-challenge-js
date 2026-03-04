let boxes = document.querySelectorAll(".box");
let rst = document.querySelector("#reset");

const WinningPatterns = [
  [0, 1, 2],  // Row 1
  [3, 4, 5],  // Row 2
  [6, 7, 8],  // Row 3
  [0, 3, 6],  // Column 1
  [1, 4, 7],  // Column 2
  [2, 5, 8],  // Column 3
  [0, 4, 8],  // Diagonal ↘
  [2, 4, 6]   // Diagonal ↙
];

let turnX = true;
let winner = false;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(box.innerText === ""){
    if (turnX === true) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }}
    checkwinner();
  });
  box.addEventListener("dblclick", () => {
    box.innerText = "";
    turnX = !turnX;
  });
});

const checkwinner = () =>{
  for(Patterns of WinningPatterns){
    let pos1 = boxes[Patterns[0]].innerText;
    let pos2 = boxes[Patterns[1]].innerText;
    let pos3 = boxes[Patterns[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 != ""){
      if(pos1 === pos2 && pos2 === pos3){
       winner = true;
        setTimeout(() =>{
          alert("You Won!👏👏");
        }, 500);
        return;
      } 
    }
  }
  if(!winner && [...boxes].every(box => box.innerText !== "")){
    setTimeout(() => alert("It's a Draw Game! 😅🤔"), 500);
  }
};

rst.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  turnX = true;
  winner = false;
});