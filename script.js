const FAQContents = document.querySelectorAll(".FAQ-question-content-visible");

document.addEventListener("click", (e) => {
  const toggle = e.target.closest("[data-toggle]");
  if (!toggle) return;
  const iconBtn = e.target.closest(".FAQ-question-icon");

  const contentId = toggle.dataset.toggle;
  const content = document.querySelector(`#${contentId}`);

  content?.classList.toggle("FAQ-question-content-hidden");
  content?.classList.toggle("FAQ-question-content-visible");

  FAQContents.forEach((content) => {
    if (
      content.id !== contentId &&
      content.classList.contains("FAQ-question-content-visible")
    ) {
      content.classList.remove("FAQ-question-content-visible");
      content.classList.add("FAQ-question-content-hidden");
    }
  });

  if (iconBtn?.getAttribute("src") === "./assets/images/icon-plus.svg")
    iconBtn?.setAttribute("src", "./assets/images/icon-minus.svg");
  else iconBtn?.setAttribute("src", "./assets/images/icon-plus.svg");
});
