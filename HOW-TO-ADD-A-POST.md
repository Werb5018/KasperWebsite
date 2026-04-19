# How to add a new post

1. **Save your image** into the `/images/` folder.
   Recommended size: at least 1200 × 1200 px, square or portrait.

2. **Open `data/posts.js`** and paste this block at the very top of the `posts` array:

```js
{
  id: 99,                          // ← use any unique number
  date: "April 19, 2026",          // ← date of the LinkedIn post
  headline: "Your short headline", // ← shown under the image in the gallery
  image: "images/your-image.jpg",  // ← filename you just dropped in /images/
  text: `Paste the full LinkedIn post text here.
It can span multiple paragraphs — just use a blank line between them.`,
  linkedinUrl: "https://www.linkedin.com/posts/your-post-id"
},
```

3. **Save the file.** The gallery rebuilds automatically on page load — no build step needed.

---

## Personalise the site

| What to change | Where |
|---|---|
| Your name & bio | `index.html` — About section |
| Profile photo | Replace `images/about/profile.jpg` |
| Email address | `index.html` — Contact section |
| Social handles | `index.html` — Contact section (LinkedIn / Instagram / X links) |
| Accent colours | `css/style.css` — `:root` variables at the top |
