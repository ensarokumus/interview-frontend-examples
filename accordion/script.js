const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const toggle = faq.querySelector(".faq-toggle");
  const text = faq.querySelector(".faq-text");

  toggle.addEventListener("click", () => {
    text.classList.toggle("active");
    toggle.style.transform = text.classList.contains("active")
      ? "rotate(90deg)"
      : "rotate(-90deg)";
  });
});
