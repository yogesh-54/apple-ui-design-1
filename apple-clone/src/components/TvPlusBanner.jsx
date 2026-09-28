import tvplus from "../assets/tvplus.png";

export default function TvPlusBanner() {
  return (
    <div className="bg-white">
      <img src={tvplus} alt="Apple TV+ Ted Lasso" className="w-full object-cover" />
      <div className="flex items-center justify-center gap-1.5 py-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${i === 2 ? "bg-ink" : "bg-divider"}`}
          />
        ))}
      </div>
    </div>
  );
}
