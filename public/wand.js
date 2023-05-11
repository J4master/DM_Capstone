const button1 = document.getElementById("draw")
const button2 = document.getElementById("play-again")
const button3 = document.getElementById("duel")

button1.addEventListener('click', (evt) => {
    alert('༼ つ ◕_◕ ༽つ  Sorry. The author is still working on this. Please be patient.')
});
button2.addEventListener('click', (evt) => {
  alert('(づ◡﹏◡)づ  Patience please.')
});
button3.addEventListener('click', (evt) => {
  alert('(•ˋ _ ˊ•) why.')
});

const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", function() {
  window.scrollTo(0, 0);
});