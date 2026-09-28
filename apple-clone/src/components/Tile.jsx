export default function Tile({ dark, title, sub, img, imgClass, bgClass, bgImage }) {
  if (bgImage) {
    return (
      <div className="relative text-center pt-10 overflow-hidden flex flex-col justify-between min-h-[500px] md:min-h-[540px] bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="relative z-10 text-white">
          <h2 className="text-[32px] md:text-[36px] font-semibold tracking-tight">{title}</h2>
          <p className="text-[17px] md:text-[19px] mt-1 font-normal">{sub}</p>
          <div className="mt-3 text-[17px] flex items-center justify-center gap-6">
            <a href="#" className="apple-link">Learn more</a>
            <a href="#" className="apple-link">Buy</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${bgClass || (dark ? "bg-black text-white" : "bg-white text-black")} text-center pt-10 overflow-hidden flex flex-col justify-between min-h-[500px] md:min-h-[540px]`}
    >
      <div>
        <h2 className="text-[32px] md:text-[36px] font-semibold tracking-tight">{title}</h2>
        <p className="text-[17px] md:text-[19px] text-gray-500 dark:text-gray-300 mt-1 font-normal">{sub}</p>
        <div className="mt-3 text-[17px] flex items-center justify-center gap-6">
          <a href="#" className="apple-link">Learn more</a>
          <a href="#" className="apple-link">Buy</a>
        </div>
      </div>
      {img && <img src={img} alt={title} className={imgClass} />}
    </div>
  );
}

