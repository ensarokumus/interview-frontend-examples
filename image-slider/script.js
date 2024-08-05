(() => {
  const $btnEls = document.querySelectorAll(".carousel-btn");

  $btnEls.forEach(($btnEl) => {
    $btnEl.addEventListener("click", () => {
      const offset = $btnEl.dataset.direction === "next" ? 1 : -1;

      const $slideEls = document.querySelectorAll(".slide");
      const $activeSlideEl = document.querySelector(".slide[data-active]");

      let newIndex = [...$slideEls].indexOf($activeSlideEl) + offset;
      if (newIndex < 0) newIndex = $slideEls.length - 1;
      if (newIndex >= $slideEls.length) newIndex = 0;

      $slideEls[newIndex].dataset.active = true;
      delete $activeSlideEl.dataset.active;
    });
  });
})();
