const text = document.getElementById("count");

let count = 0;

function add() {
  count += 1;
  text.textContent = "Counter: " + count;
}

function del() {
  count -= 1;
  text.textContent = "Counter: " + count;
}
function reset() {
  count = 0;
  text.textContent = "Counter: " + count;
}
