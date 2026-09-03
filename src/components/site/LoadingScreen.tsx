import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 800);
    const t2 = setTimeout(() => setHidden(true), 1300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-background transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="/logo.jpeg"
        alt="BitForge Innovations"
        className="h-32 w-auto object-contain md:h-40"
      />
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-primary" />
    </div>
  );
}
