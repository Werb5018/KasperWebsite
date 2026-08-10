# No Objectives — website

A minimal, multi-page brand site for **No Objectives**, a non-profit research
and design agency. Built to do one job: help the right people take contact.

No build step, no framework — just static files. Open `index.html` in a
browser, or host the folder anywhere (GitHub Pages, Netlify, your own server).

```
index.html       →  Home (hero + intro + links)
about.html       →  About us
work.html        →  Work (7 projects)
services.html    →  Services (4 offers)
contact.html     →  Contact (form + details)
css/style.css    →  all styling (colours + fonts at the top)
js/app.js        →  nav, mobile menu, scroll animation
images/          →  photos (see below)
```

Every page ends with a **contact form**, and the nav's *Get in touch* always
leads to the contact page — so a visitor is never more than one click from
reaching you.

---

## The contact form

The form uses **[FormSubmit](https://formsubmit.co)** — no account, no API key.
It posts to `Noobjectives@Outlook.com`.

**One-time activation:** the *first* time someone submits the form on the live
site, FormSubmit emails you a link to click "Activate". After that, every
submission lands in your inbox. (This only works once the site is hosted on a
real URL — it won't send from a local file or the preview.)

To change the destination address, search the `.html` files for
`formsubmit.co/Noobjectives@Outlook.com`.

---

## Swapping images

Drop replacements into `images/` using the same filenames and everything
updates automatically. Landscape/horizontal photos work best.

| File | Used for |
|---|---|
| `images/hero.jpg` | Home hero (big opening image) |
| `images/about.jpg` | About page header |
| `images/work.jpg` | Work page header |
| `images/services.jpg` | Services page header |
| `images/contact.jpg` | Contact page header |
| `images/work/housing.jpg` | Project: The Housing We Need |
| `images/work/reliving.jpg` | Project: Re:Living |
| `images/work/aarhus.jpg` | Project: Aarhus Climate Budget Tool |
| `images/work/reduction-roadmap.jpg` | Project: Reduction Roadmap |
| `images/work/beyond-roadmap.jpg` | Project: Beyond the Roadmap |
| `images/work/living-places.jpg` | Project: Living Places |
| `images/work/beyond-duality.jpg` | Project: Beyond Duality |

The current images are placeholders pulled from the brand strategy PDF.

---

## Things you'll likely want to change

| What | Where |
|---|---|
| Email address | search the `.html` files for `Noobjectives@Outlook.com` |
| Phone number | search for `4520666089` (link) and `+45 20 66 60 89` (text) |
| Any wording | the text sits in plain, labelled sections in each `.html` |
| Brand colours | `css/style.css` — the `:root` block at the top |
| Fonts | `css/style.css` — `--sans`, `--serif`, `--mono` in `:root` |

---

## Colours (from the brand strategy)

| Name | Hex | Role |
|---|---|---|
| Petroleum green | `#162A1F` | text & dark sections |
| Light white | `#F6F4EE` | main background |
| Off-white | `#EAE7D8` | panels |
| Chalkstone | `#D8CAB0` | tags |
| Dusty Green | `#506157` | secondary text |
| Sage | `#A4AA9C` | muted text |
| Amber | `#DA8D31` | accent |

## Fonts

- **Poppins** — display & headlines (stand-in for *Glacial Indifference*)
- **Newsreader** — reading text
- **JetBrains Mono** — labels, captions, buttons

Loaded from Google Fonts in each page's `<head>`.
