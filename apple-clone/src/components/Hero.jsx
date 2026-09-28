export default function Hero({ dark, title, sub, img, imgClass }) {
  return (
    <section className={`${dark ? "bg-black text-white" : "text-ink"} text-center pt-14 overflow-hidden`}>
      <h1 className="text-[40px] md:text-[56px] font-semibold tracking-tight leading-tight">{title}</h1>
      <p className="text-[19px] md:text-[24px] mt-1 text-muted">{sub}</p>
      <div className="mt-4 text-[17px] flex items-center justify-center gap-6">
        <a href="#" className="apple-link">Learn more</a>
        <a href="#" className="apple-link">Buy</a>
      </div>
      <img src={img} alt={title} className={imgClass || "mx-auto mt-8 max-w-full"} />
    </section>
  );
}
