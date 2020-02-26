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
    // pressed.slice(-10-1,pressed.length-10)
  }
})
}
