import { useState, useEffect } from "react";

export default function WIP() {
  const fullText = "work in progress...";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    // Typing speed, deleting speed, or pause duration
    const currentSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && displayText === fullText) {
      // Pause at the end of typing before deleting starts
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      // Pause briefly at the blank screen before typing again
      timer = setTimeout(() => setIsDeleting(false), 500);
    } else {
      // Standard typing or deleting step
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : fullText.substring(0, prev.length + 1),
        );
      }, currentSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <h1>
      {displayText}
      <span className="inline-block w-0.5 h-6 bg-gray-400 align-middle"></span>
    </h1>
  );
}
