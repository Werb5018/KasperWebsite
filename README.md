# No Objectives — website

A single-page, minimal brand site for **No Objectives**, a non-profit research
and design agency. Built to do one job: help the right people take contact.

Everything lives in three files — no build step, no framework. Just open
`index.html` in a browser, or host the folder anywhere (GitHub Pages, Netlify,
your own server).

```
index.html      →  all the content & structure
css/style.css   →  all the styling (colours + fonts up top)
js/app.js       →  nav, smooth scrolling, scroll-in animation
```

---

## The page, top to bottom

1. **Hero** — full-screen opening with the logo, the tagline, and two buttons
   (*Start a conversation* / *See what we do*).
2. **Introduction** — the core idea, plus four big buttons that jump to
   **About us · Work · Services · Contact**.
3. **About us** — purpose, mission, vision and what the agency stands for.
4. **Work** — seven selected projects with taglines and collaborators.
5. **Services** — the four offers (Green Paper, Roadmap, Tool & Prototype,
   Movement).
6. **Contact** — email and phone, wired to open the mail app / dialler directly.

---

## Things you'll likely want to change

| What | Where |
|---|---|
| Email address | `index.html` — search for `Noobjectives@Outlook.com` (appears in the nav CTA, contact buttons and contact card) |
| Phone number | `index.html` — search for `4520666089` (the `tel:` link) and `+45 20 66 60 89` (the visible text) |
| Any wording | `index.html` — text sits in plain, labelled sections |
| Brand colours | `css/style.css` — the `:root` block at the very top |
| Fonts | `css/style.css` — `--sans`, `--serif`, `--mono` in `:root` |

### Swapping the hero photo

The hero uses `images/hero.jpg` (the cover photograph from the brand strategy).
To change it, just replace that file with your own — roughly landscape,
~1920px wide. The dark overlay that keeps the logo readable is applied
automatically in CSS, so no other changes are needed.

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
| Amber dim | `#E9BE89` | accent (light) |

## Fonts

- **Poppins** — display & headlines (stand-in for *Glacial Indifference*)
- **Newsreader** — reading text
- **JetBrains Mono** — labels, captions, buttons

Loaded from Google Fonts in the `<head>`.
