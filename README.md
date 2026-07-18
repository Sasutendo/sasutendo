<div align="center">

<img src="./assets/banner.png" alt="Yuuki's website banner" width="100%" />

# ✦ Yuuki's little corner of the internet ✦

A cozy personal link hub for my socials, projects, art, interests, and occasional updates.

[Visit the website](https://sasutendo.tech) · [GitHub profile](https://github.com/Sasutendo)

</div>

---

## ♡ About

This is the source for my personal website, **sasutendo.tech**. It is designed to feel like a small, dreamy corner of the internet rather than a regular portfolio: personal, colorful, animated, and easy to explore on desktop or mobile.

## ✨ Highlights

- Customizable profile, links, badges, projects, and gallery
- Dreamy themes with adjustable colors and transparency
- Animated particles and cursor trails
- Background music with volume controls
- Changelog and visitor counter
- Responsive layouts for phones, tablets, and desktops
- Lightweight vanilla HTML, CSS, and JavaScript

## 🛠️ Built with

- HTML
- CSS
- Vanilla JavaScript
- Node.js and Express for local development
- Cloudflare Pages Functions and KV for production data

## 🌸 Run it locally

You will need a recent version of [Node.js](https://nodejs.org/).

```bash
npm install
npm start
```

Then open [http://localhost:3333](http://localhost:3333).

## 📁 Project map

```text
.
├── assets/          Images, backgrounds, and music
├── functions/       Cloudflare Pages API routes
├── app.js           Website rendering and interactions
├── index.html       Main page structure
├── site-data.json   Public profile and website content
├── style.css        Themes, layouts, and animations
└── server.js        Local Express development server
```

## 🎨 Customizing the site

Most public content lives in `site-data.json`, including the profile, links, projects, gallery, theme choices, and changelog entries.

Visual styling and animations live in `style.css`, while rendering and interactions are handled by `app.js`. Media files belong in `assets/`.

## ☁️ Deployment

The production website is deployed with Cloudflare Pages. Files inside `functions/` become server-side API routes, and the `SITE_DATA` KV binding stores shared counters and site data.

## 📜 License

The source code is available under the [MIT License](./LICENSE).

Personal text, branding, artwork, images, GIFs, audio, profile content, and other media assets are **not** included in the MIT license unless explicitly stated otherwise. Those materials remain the property of their respective owners.

---

<div align="center">

Made with ♡ by Yuuki  
<sub>and a suspicious amount of pink ✦</sub>

</div>
