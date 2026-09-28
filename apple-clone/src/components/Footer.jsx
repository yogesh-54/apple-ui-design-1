const FOOTER_COLUMNS = [
  // Column 1
  [
    {
      title: "Shop and Learn",
      links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"]
    },
    {
      title: "Apple Wallet",
      links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"]
    }
  ],
  // Column 2
  [
    {
      title: "Account",
      links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"]
    },
    {
      title: "Entertainment",
      links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"]
    }
  ],
  // Column 3
  [
    {
      title: "Apple Store",
      links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", "Financing", "Carrier Deals at Apple", "Order Status", "Shopping Help"]
    }
  ],
  // Column 4
  [
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"]
    },
    {
      title: "For Education",
      links: ["Apple and Education", "Shop for K-12", "Shop for College"]
    },
    {
      title: "For Healthcare",
      links: ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"]
    },
    {
      title: "For Government",
      links: ["Shop for Government", "Shop for Veterans and Military"]
    }
  ],
  // Column 5
  [
    {
      title: "Apple Values",
      links: ["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supplier Responsibility"]
    },
    {
      title: "About Apple",
      links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"]
    }
  ]
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] pt-8 text-[#6e6e73] text-[12px] font-normal">
      {/* Disclaimer Notes */}
      <div className="max-w-[1024px] mx-auto px-4 leading-relaxed space-y-2.5 border-b border-[#d2d2d7] pb-6">
        <p>
          1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some devices may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
        </p>
        <p>
          2. Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3 or later paired with iPhone 6s or later. New subscribers only. $9.99/month after trial. Plan automatically renews until cancelled. <a href="#" className="underline">Terms</a> apply.
        </p>
        <p>A subscription is required for Apple Fitness+.</p>
        <p>Apple Fitness+ requires an iPhone 8 or later with iOS 16.1.</p>
        <p>Apple Fitness+ requires an Apple Watch Series 3 or later. Available when paired with iPhone 6s or later with iOS 14.3 or later.</p>
        <p>Fitness app on Apple TV requires tvOS 14.3 or later.</p>
        <p>Fitness app on iPad requires iPadOS 14.3 or later.</p>
        <p>To get the newest features, make sure your device are running the latest software version.</p>
        <p>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings &gt; General &gt; Software Update. Tap Download and Install.</p>
        <p>Available for qualifying applicants in the United States.</p>
        <p>Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
        <p>
          Learn more about how Apple Card applications are evaluated at <a href="#" className="text-[#06c] hover:underline">support.apple.com/kb/HT209218</a>.
        </p>
      </div>

      {/* 5-Column Navigation Grid */}
      <div className="max-w-[1024px] mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-5 gap-8">
        {FOOTER_COLUMNS.map((col, colIdx) => (
          <div key={colIdx} className="space-y-6">
            {col.map((sec) => (
              <div key={sec.title}>
                <h4 className="text-[#1d1d1f] font-semibold text-[12px] mb-2">{sec.title}</h4>
                <ul className="space-y-1.5">
                  {sec.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Legal Section */}
      <div className="max-w-[1024px] mx-auto px-4 pb-8">
        <div className="mb-3">
          More ways to shop: <a href="#" className="text-[#06c] hover:underline">Find an Apple Store</a> or <a href="#" className="text-[#06c] hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>
        <div className="border-t border-[#d2d2d7] pt-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>Copyright © 2023 Apple Inc. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#424245]">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:underline">Sales and Refunds</a>
            <span>|</span>
            <a href="#" className="hover:underline">Legal</a>
            <span>|</span>
            <a href="#" className="hover:underline">Site Map</a>
          </div>
          <div>United States</div>
        </div>
      </div>
    </footer>
  );
}

