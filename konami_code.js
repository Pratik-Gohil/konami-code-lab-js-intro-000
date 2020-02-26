const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let pressed = []
  // your code here
  document.body.addEventListener("keydown", (event) => {
    pressed.push(event.key)
    pressed.slice(-codes.length - 1,pressed.length-codes.length)
    console.log(pressed)
  })
}
