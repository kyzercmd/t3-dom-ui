var restart = document.querySelector("#restart");
var squares = document.querySelectorAll("td");

function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

restart.addEventListener("click", clearBoard);

function leftClick() {
  this.textContent = "X";
}
function rightClick(event) {
  event.preventDefault();
  this.textContent = "0";
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", leftClick);
  squares[i].addEventListener("contextmenu", rightClick);
}
