import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 300 && !isVisible) {
        setIsVisible(true);
      } else if (currentScrollY <= 300 && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div
      className={`bg-opacity- 50 rounded-ful sticky bottom-0 size-14 self-end bg-primary1 transition-all duration-300 hover:bg-purple-1000 motion-reduce:transition-none ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0 motion-reduce:pointer-events-auto motion-reduce:translate-y-0 motion-reduce:opacity-100"
      }`}
    >
      <button
        className="h-full w-full"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src="/main/triangle.svg"
          className="mx-auto my-auto size-8"
          alt="upward arrow triangle"
        />
      </button>
    </div>
  );
}
