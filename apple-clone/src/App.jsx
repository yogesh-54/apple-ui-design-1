import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Tile from "./components/Tile.jsx";
import WatchSection from "./components/WatchSection.jsx";
import TvPlusBanner from "./components/TvPlusBanner.jsx";
import Footer from "./components/Footer.jsx";

import iphone14pro from "./assets/iphone14pro.png";
import iphone14 from "./assets/iphone14.png";
import ipad from "./assets/ipad.jpg";
import macbook from "./assets/macbook.jpg";
import homepod from "./assets/homepod.jpg";
import airpods from "./assets/airpods.jpg";
import fitness from "./assets/fitness.jpg";
import card from "./assets/card.jpg";

export default function App() {
  return (
    <div>
      <Header />

      <Hero
        dark
        title="iPhone 14 Pro"
        sub="Pro. Beyond."
        img={iphone14pro}
        imgClass="mx-auto mt-8 w-full max-w-[1100px] object-contain"
      />

      <Hero
        title="iPhone 14"
        sub={<>Two great sizes. Now<br />with a splash of yellow.</>}
        img={iphone14}
        imgClass="mx-auto mt-6 w-full max-w-[900px] object-contain"
      />

      <WatchSection />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white">
        <Tile
          title="iPad"
          sub="Lovable. Drawable. Magical."
          img={ipad}
          imgClass="mx-auto mt-4 w-full max-w-[360px] md:max-w-[420px] object-contain"
        />
        <Tile
          dark
          title="MacBook Pro"
          sub="Supercharged by M2 Pro and M2 Max."
          img={macbook}
          imgClass="mx-auto mt-6 w-full max-w-[480px] md:max-w-[540px] object-contain"
        />
        <Tile
          dark
          title="HomePod"
          sub="Profound sound."
          img={homepod}
          imgClass="mx-auto mt-2 w-full max-w-[500px] md:max-w-[580px] object-contain"
        />
        <Tile
          title="AirPods Pro"
          sub={<>Up to 2x more Active<br />Noise Cancellation.</>}
          bgImage={airpods}
        />
        <Tile
          title="Fitness+"
          sub={<>Welcome to the year of you.<br />Now all you need is iPhone.</>}
          img={fitness}
          imgClass="mx-auto mt-4 w-full max-w-[360px] md:max-w-[420px] object-contain"
        />
        <Tile
          title="Card"
          sub="Get up to 3% Daily Cash back with every purchase."
          img={card}
          imgClass="mx-auto mt-4 w-full max-w-[380px] md:max-w-[440px] object-contain"
        />
      </div>

      <TvPlusBanner />

      <Footer />
    </div>
  );
}
