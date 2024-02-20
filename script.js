const text = document.getElementById("count");

let count = 0;

function add() {
  count += 1;
  text.textContent = count;
  if (count < 0) {
    text.style.color = "hsl(17, 99%, 57%)";
  } else {
    text.style.color = "";
  }
}

function del() {
  count -= 1;
  text.textContent = count;
  if (count < 0) {
    text.style.color = "hsl(17, 99%, 57%)";
  } else {
    text.style.color = "";
  }
}
function reset() {
  count = 0;
  text.textContent = count;
  if (count < 0) {
    text.style.color = "hsl(17, 99%, 57%)";
  } else {
    text.style.color = "";
  }
}
