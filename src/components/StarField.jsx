import { useMemo } from "react";

export default function StarField({ count = 90 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.55 + 0.15,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 6,
      golden: Math.random() > 0.88,
    }));
  }, [count]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className={`absolute rounded-full ${
            star.golden
              ? "bg-[#D4A83A] shadow-[0_0_8px_rgba(212,168,58,0.35)]"
              : "bg-white shadow-[0_0_6px_rgba(255,255,255,0.25)]"
          }`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `starTwinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}