import logo from "../assets/logo.png";

const NAV_LINKS = [
  "Store", "Mac", "iPad", "iPhone", "Watch", "AirPods",
  "TV & Home", "Entertainment", "Accessories", "Support",
];

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-black text-white text-[12px] font-normal">
        <div className="max-w-[1024px] mx-auto flex items-center justify-between px-4 h-11">
          <img src={logo} alt="Apple" className="h-4 w-auto opacity-95" />
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l} className="hover:opacity-70 cursor-pointer whitespace-nowrap">
                {l}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M11 11l4 4M12.5 7A5.5 5.5 0 111.5 7a5.5 5.5 0 0111 0z" stroke="white" strokeWidth="1.2" />
            </svg>
            <svg width="14" height="16" viewBox="0 0 16 18" fill="none">
              <path d="M3 6h10l-.7 9.5a1 1 0 01-1 .9H4.7a1 1 0 01-1-.9L3 6z" stroke="white" strokeWidth="1.1" />
              <path d="M5.5 6V4.5a2.5 2.5 0 015 0V6" stroke="white" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </nav>
      <div className="bg-surface text-center text-[12px] py-2.5 border-b border-divider">
        Get $200-$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.{" "}
        <a href="#" className="apple-link">Shop iPhone</a>
      </div>
    </div>
  );
}
