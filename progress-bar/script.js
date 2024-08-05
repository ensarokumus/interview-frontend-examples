const progress = document.querySelector(".progress");
const percentages = ["12%", "25%", "55%", "75%", "95%", "100%"];

percentages.map((percentage, index) =>
  setTimeout(() => {
    progress.textContent = percentage;
    progress.style.width = percentage;
  }, 1000 * index)
);
