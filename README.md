# Nur Bilge Özcan | AI & Software Portfolio

Personal portfolio of **Nur Bilge Özcan**, a junior software engineer working on computer vision, deep learning and cloud software. IEEE author and two-time TEKNOFEST finalist.

**Live site:** [bilgeozcan.github.io](https://bilgeozcan.github.io)

---

## What's on the page

| Section | What it shows |
| --- | --- |
| **Hero** | A full-screen detection scene: glowing heat sources tracked by YOLO-style boxes. Move your mouse and you get tracked too (`visitor 0.99`). |
| **At a glance** | IEEE publication, TEKNOFEST finals, 7th place in Agricultural Technologies, and the 30% OpenCV speed-up. |
| **Selected work** | TÜBİTAK thermal UAV, BAP traffic management, TEKNOFEST projects and AI-assisted development labs. Each row opens for details. |
| **Experience** | EPAM Systems, SMART Solar Technologies, Istanbul University, TNC Group and education. |
| **Published at IEEE** | *Strawberry Ripeness Detection: Optimizing Harvesting Efficiency with YOLOv11* with DOI and IEEE Xplore links. |
| **Tools** | Languages, vision and ML, cloud, daily tooling and ways of working. |
| **Community** | Microsoft Student Ambassador, GDG, T3 Foundation, YÖKAK and student societies. |
| **Contact** | Email, LinkedIn, GitHub and CV. |

## Design

- **Palette:** ink `#12143A`, paper `#F5F2FB`, berry `#C8233F`, sun `#FFC53D`, mint `#BDE9D0`, lilac `#CFC8F7`, blush `#FFBFCB`. Berry comes from the strawberry paper, the glowing tones from thermal imagery.
- **Type:** [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) for headings, [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) for body text, [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for detection labels.
- **Motion:** one animated moment, the hero canvas. It pauses when the tab is hidden or the hero is off-screen, and it renders a still frame when the visitor prefers reduced motion.
- **Accessibility:** semantic landmarks, skip link, visible keyboard focus, native `<details>` for the project rows, and responsive layout down to phone width.

## Tech

No build step, no dependencies. The whole site is one static file:

- HTML and CSS, with design tokens as CSS custom properties in `:root`
- A small vanilla JavaScript `<canvas>` animation
- Google Fonts loaded from the CDN

## Project structure

```
.
├── index.html   # the entire site: markup, styles and script
├── cv.pdf       # linked from the nav, hero and contact section
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Name the repository `bilgeozcan.github.io` (user site).
2. Put `index.html` and `cv.pdf` in the root of the default branch.
3. In **Settings → Pages**, set the source to *Deploy from a branch*, then choose your default branch and the `/ (root)` folder.
4. The site is live at `https://bilgeozcan.github.io` after a minute or two.

## Customize

- **Colors:** edit the variables at the top of the `<style>` block in `index.html`.
- **Projects:** each project is a `<details class="proj">` block. Change its `--c` value to set the hover and open color.
- **Hero scene:** the labels and colors of the tracked objects are the `LABELS` and `PAL` arrays in the script at the bottom of the file.
- **CV:** replace `cv.pdf` with a new file of the same name.

## Contact

- Email: [bilgeozcan@gmail.com](mailto:bilgeozcan@gmail.com)
- LinkedIn: [nur-bilge-özcan](https://linkedin.com/in/nur-bilge-%C3%B6zcan-123975257)
- GitHub: [BILGEOZCAN](https://github.com/BILGEOZCAN)

© 2026 Nur Bilge Özcan. All rights reserved.
