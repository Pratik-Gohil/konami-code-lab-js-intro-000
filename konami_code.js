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
  // your code here
  document.body.addEventListener("keydown", (event) => {
    for (let i = 0; i < codes.length; i++) {
      if (event.key == codes[i]) {
        alert(event.key)
      }
    }
  })
}
