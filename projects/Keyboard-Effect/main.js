keyboard = document.querySelector(".keyboard");
key = document.querySelectorAll(".key");
input = document.querySelector("input");

input.addEventListener("input", () => {
  for (let i = 0; i < key.length; i++) {
    if (key[i].innerText == input.value.slice(-1).toUpperCase()) {
      keypress(key[i]);
    }
  }
});

function keypress(key) {
  key.classList.add("key-active");
  setTimeout(() => {
    key.classList.remove("key-active");
  }, 600);
}
