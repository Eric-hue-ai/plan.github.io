const quotes = [
  "Stay focused and never give up!",
  "Small steps every day lead to big results.",
  "Discipline is doing it even when you don’t feel like it.",
  "Push yourself, because no one else will.",
  "Study hard, because dreams don’t work unless you do.",
  "Believe in yourself and all that you are.",
  "Consistency is more important than perfection.",
  "Your future depends on what you do today."
];

function generateQuote() {
  const quoteBox = document.getElementById("quote-text");
  const boxWrapper = document.querySelector(".quote-box");
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Fade out
  boxWrapper.style.opacity = 0;

  setTimeout(() => {
    quoteBox.textContent = quotes[randomIndex];
    // Fade in
    boxWrapper.style.opacity = 1;
  }, 500);
}

window.onload = function () {
  generateQuote();
  setInterval(generateQuote, 7000); // every 7 seconds
};
