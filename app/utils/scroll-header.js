// app/utils/scrollHeader.js
export function initScrollHeader() {
  const header = document.getElementById("header-home");

  header.classList.add("opacity-0");
  const handleScroll = () => {
    if (window.scrollY <= 210) {
      header.classList.add("opacity-0", "pointer-events-none");
      // console.log("op0");
    } else {
      header.classList.remove("opacity-0", "pointer-events-none");
      // console.log("op100");
    }
  };

  // console.log("eventlistener added");

  window.addEventListener("scroll", handleScroll);

  return () => {
    // console.log("cleanup running");
    window.removeEventListener("scroll", handleScroll);
    header.classList.remove("opacity-0");
  };
}

export function showHeader() {
  const header = document.getElementById("header");

  header.classList.remove("opacity-0");
}
