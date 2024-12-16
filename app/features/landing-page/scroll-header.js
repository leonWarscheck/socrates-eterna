export function initScrollHeader() {
  const header = document.getElementById("header-home");

  header.classList.add("opacity-0");
  const handleScroll = () => {
    if (window.scrollY <= 210) {
      header.classList.add("opacity-0", "pointer-events-none");
    } else {
      header.classList.remove("opacity-0", "pointer-events-none");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    header.classList.remove("opacity-0");
  };
}

export function showHeader() {
  const header = document.getElementById("header");

  header.classList.remove("opacity-0");
}
