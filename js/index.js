 const items = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".dot");
  let activeIndex = 1; // middle on desktop, green on mobile

  function updateCarousel(index) {
    activeIndex = index;

    items.forEach((item, i) => {
      item.classList.remove("scale-100", "z-10", "blur-md", "opacity-70", "scale-75", "opacity-100");

      // Desktop: show all 3
      if (window.innerWidth >= 768) {
        if (i === index) {
          item.classList.add("scale-100", "z-10", "opacity-100");
        } else {
          item.classList.add("scale-75", "blur-md", "opacity-70");
        }
        item.classList.remove("hidden");
      } else {
        // Mobile: only active item is visible
        if (i === index) {
          item.classList.add("scale-100", "z-10", "opacity-100", "block");
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      }
    });

    dots.forEach(d => d.classList.remove("border-2", "border-[#52483E]"));
    dots[index].classList.add("border-2", "border-[#52483E]");
  }

  // Dot click event
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      updateCarousel(parseInt(dot.dataset.index));
    });
  });

  // Recalculate when window resizes (desktop ↔ mobile)
  window.addEventListener("resize", () => updateCarousel(activeIndex));

  // Initialize
  updateCarousel(activeIndex);