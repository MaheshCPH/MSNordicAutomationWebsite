# MS Nordic Automation Website

Single-page marketing site for MS Nordic Automation’s GenAI document automation offering. The page is built with vanilla HTML enhanced by Tailwind (via CDN), GSAP and Lenis to deliver a cinematic hero, scroll-triggered storytelling and a clear “Request a Demo” conversion flow.

## Highlights

- **Focused narrative** – Hero badge, three-value “Solution” cards, industry grid, measurable impact metrics, deployment options and CTA.
- **Smooth motion** – GSAP + ScrollTrigger handle hero fades, parallax background, stat counters and the horizontal “How it works” slider while Lenis keeps scroll buttery-smooth.
- **Zero build step** – Everything runs from a single HTML file that can be opened locally or dropped onto any static host (GitHub Pages, Netlify, Azure Static Web Apps, etc.).
- **Responsive layout** – Tailwind utility classes ensure the sections reflow cleanly from mobile to large panels.
- **Brand-ready** – Includes the MS Nordic Automation logomark (`Website/logo-ms.png`) and curated Unsplash photography.

## Project Structure

```
MSNAWebsite/
├── Website/
│   ├── index.html        # Production landing page (hero, solution cards, industries, impact, process, deployment, CTA)
│   └── logo-ms.png       # Primary logo used in the navigation bar
└── oldfile/
    ├── website.html
    ├── websiteGPT.html
    ├── websiteGPT_v2.html
    ├── websiteV3.html
    ├── websiteV4.html
    └── websiteV5.html    # Earlier explorations kept for reference
```

Only the `Website/` folder is served; `oldfile/` contains past layout experiments you can mine for copy or design ideas.

## Getting Started

1. **Clone / download** the project and move into the root folder:  
   `cd MSNAWebsite`
2. **Local preview** – either double-click `Website/index.html` or start a lightweight server:
   ```bash
   cd Website
   python3 -m http.server 4173
   ```
   Visit `http://localhost:4173` to view the page.
3. **Deploy** by uploading the contents of `Website/` to any static host. No additional build step is required because Tailwind, GSAP, ScrollTrigger and Lenis load from CDNs.

## Customisation Notes

- **Branding & copy** – Edit the hero, solution cards, industry blurbs, impact statistics, deployment options and CTA text directly in `Website/index.html`. Tailwind classes keep typography consistent; just adjust the inner text content.
- **Colors & typography** – Update the inline Tailwind config block near the top of `index.html` to tweak `accent`, `surface`, or font stacks globally.
- **Logos / imagery** – Replace `Website/logo-ms.png` with your brand asset (keep the same filename or update the `<img>` reference). The background photo is loaded from Unsplash; swap the URL if needed.
- **Animations** – The script at the end of `index.html` controls hero fades, number counters and the horizontal workflow section. Adjust GSAP durations, triggers or easing curves to change behaviour.
- **Contact CTA** – `mailto:` links are prefilled for demo requests; update the email address or subject/body string to route leads elsewhere.

## Deployment Tips

- Because everything is static, you can version the page easily and host on GitHub Pages, Netlify Drop, Azure Static Web Apps or any S3 bucket/CDN.
- If you want analytics, chat widgets or form embeds, add the snippets near the closing `</body>` tag.

## Acknowledgements

- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.
- Background photography: Unsplash `photo-1550751827-4bd374c3f58b`.
- Motion libraries: [GSAP](https://greensock.com/gsap/), [ScrollTrigger](https://greensock.com/scrolltrigger/), [Lenis](https://lenis.studiofreight.com/).
