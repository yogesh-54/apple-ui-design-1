import series8 from "../assets/series8.png";
import watch from "../assets/watch.jpg";

export default function WatchSection() {
  return (
    <section className="bg-black text-white text-center pt-12 pb-0 overflow-hidden">
      <div className="flex justify-center">
        <img src={series8} alt="Apple Watch Series 8" className="h-10 md:h-12 object-contain" />
      </div>
      <h2 className="text-xl md:text-2xl font-normal mt-2 tracking-tight">
        A healthy leap ahead.
      </h2>
      <div className="mt-3 text-[17px] flex items-center justify-center gap-6">
        <a href="#" className="apple-link">Learn more</a>
        <a href="#" className="apple-link">Buy</a>
      </div>
      <img
        src={watch}
        alt="Apple Watch Series 8"
        className="mx-auto mt-6 w-full max-w-[750px] object-contain"
      />
    </section>
  );
}

