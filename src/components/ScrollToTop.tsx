import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router does not reset scroll position between routes, so navigating
 * from halfway down a long page lands you halfway down the next one. This
 * snaps back to the top whenever the path changes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
