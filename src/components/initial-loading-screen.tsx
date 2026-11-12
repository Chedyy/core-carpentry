import { useEffect, useState } from "react";

const MINIMUM_DISPLAY_MS = 900;
const MAXIMUM_DISPLAY_MS = 1800;
const EXIT_TRANSITION_MS = 900;

export function InitialLoadingScreen() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "hidden">("loading");

  useEffect(() => {
    const startedAt = Date.now();
    let finishTimeout: number | undefined;
    let removeTimeout: number | undefined;

    const finishLoading = () => {
      if (finishTimeout !== undefined) return;
      window.clearTimeout(maxTimeout);

      const remainingMinimum = Math.max(0, MINIMUM_DISPLAY_MS - (Date.now() - startedAt));

      finishTimeout = window.setTimeout(() => {
        setPhase("exiting");
        removeTimeout = window.setTimeout(() => setPhase("hidden"), EXIT_TRANSITION_MS);
      }, remainingMinimum);
    };

    const handleLoad = () => finishLoading();
    const maxTimeout = window.setTimeout(finishLoading, MAXIMUM_DISPLAY_MS);

    window.addEventListener("load", handleLoad, { once: true });

    if (document.readyState === "complete") finishLoading();

    return () => {
      window.removeEventListener("load", handleLoad);
      if (finishTimeout !== undefined) window.clearTimeout(finishTimeout);
      if (removeTimeout !== undefined) window.clearTimeout(removeTimeout);
      window.clearTimeout(maxTimeout);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className="initial-loading-screen"
      data-exiting={phase === "exiting"}
      role="status"
      aria-live="polite"
      aria-label="Loading Wood Core Carpentry"
    >
      <div className="initial-loading-content">
        <p className="initial-loading-title">
          Wood Core <span className="initial-loading-title-accent">Carpentry</span>
        </p>
        <div className="initial-loading-progress" aria-hidden="true">
          <span />
        </div>
        <p className="initial-loading-tagline">Built on craftsmanship</p>
      </div>
    </div>
  );
}
