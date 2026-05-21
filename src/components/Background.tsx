import { useSyncExternalStore } from "react";
import { Dithering } from "@paper-design/shaders-react";

// Standard listeners to check system-wide theme preference
function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function Background() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const colorFront = isDark ? "#202020" : "#f0f0f0";

  return (
    <div
      className={`fixed inset-0 -z-10 w-[calc(100vw+2px)] h-[calc(100vh+2px)] overflow-hidden pointer-events-none touch-none ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <Dithering
        width="100%"
        height="100%"
        colorBack="#00000000"
        colorFront={colorFront}
        shape="warp"
      />
    </div>
  );
}
