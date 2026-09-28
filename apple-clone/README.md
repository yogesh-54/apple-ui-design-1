# Apple Homepage Clone

React + Tailwind CSS + Vite recreation of the Apple homepage layout, using the
images from the provided assets folder.

## Structure

```
apple-clone/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/          # product images (iphone, ipad, watch, etc.)
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Tile.jsx
        ├── WatchSection.jsx
        ├── TvPlusBanner.jsx
        └── Footer.jsx
```

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```
