import { useEffect } from "react";
import { useLocation } from "@remix-run/react";

export function useScrollToTop() {
  const location = useLocation();
console.log(location.pathname || location.hash)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname || location.hash]);
}
// export default useScrollToTop

