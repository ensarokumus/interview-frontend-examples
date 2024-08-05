const $infoHtml = document.querySelector(".info-html");
const $infoCss = document.querySelector(".info-css");
const $infoJs = document.querySelector(".info-js");

const toggleInfo = (id) => {
  const $toggledButton = document.querySelector(`#${id}`);
  const wasActive = $toggledButton.classList.contains("active");

  // Remove 'active' class from all buttons
  const $allButtons = document.querySelectorAll("button");
  $allButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Remove 'active' class from all info paragraphs
  const $allInfo = document.querySelectorAll("p");
  $allInfo.forEach((info) => {
    info.classList.remove("active");
  });

  // If the clicked tab wasn't already active, add 'active' class to it and its corresponding info
  if (!wasActive) {
    $toggledButton.classList.add("active");
    const $toggledInfo = document.querySelector(`.info-${id}`);
    $toggledInfo.classList.add("active");
  }

  // Log whether the tab was already active
  console.log(
    `The ${id} tab was ${
      wasActive ? "already active" : "not active"
    } before clicking.`
  );
};
