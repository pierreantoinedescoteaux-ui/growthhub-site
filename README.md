# Growth Hub — website

A single-page static site (plain HTML/CSS/JS, no build step). Rebuilt to replace the
paid Mixo hosting. Free to host on Cloudflare Pages; you keep paying only for the domain.

## Files that get deployed
- `index.html` — the page
- `styles.css` — styling
- `script.js` — footer year, waitlist redirect, scroll animations
- `favicon.svg` — site icon
- `assets/` — `hero-group.jpg` (founders photo), `paul.jpg` (testimonial headshot)

`_design-reference/` is dev-only (Mixo screenshot + render). It is git-ignored and never deployed.

## The waitlist
Both the hero email box and every "Join the waitlist" button open your existing Google Form:
`https://forms.gle/3sb8WSJUnqbjkZE49`
To change where signups go, edit the one `WAITLIST_URL` line at the top of `script.js`.

## To edit text later
Open `index.html` and edit the copy directly. To swap a photo, replace the file in `assets/`
(keep the same filename) or update the `src` in `index.html`.

---

# Deploy recipe — Cloudflare Pages (free)

## Step 1 — Create a free Cloudflare account
Go to https://dash.cloudflare.com/sign-up and sign up (free, no card needed).

## Step 2 — Deploy the site (drag-and-drop, no GitHub needed)
1. In the Cloudflare dashboard, left sidebar → **Workers & Pages**.
2. Click **Create** → **Pages** tab → **Upload assets**.
3. Project name: `growthhub` → **Create project**.
4. Drag the **contents** of the `growthhub-site` folder onto the upload box —
   that's `index.html`, `styles.css`, `script.js`, `favicon.svg`, and the `assets` folder.
   (You do NOT need `_design-reference`, `.gitignore`, or `README.md`.)
5. Click **Deploy site**. In ~30 seconds you get a live URL like `growthhub.pages.dev`.
   Open it and confirm everything looks right.

## Step 3 — Put your domain on it
This is the only part that needs your domain registrar. Recommended path moves the domain
onto Cloudflare so DNS + SSL are automatic and free:

1. Cloudflare dashboard → **Add a site** → type `growthhub.house` → choose the **Free** plan.
2. Cloudflare scans your current DNS and gives you **two nameservers**
   (e.g. `xxx.ns.cloudflare.com`).
3. Log in to wherever you bought the domain (your registrar) → find **Nameservers / DNS** settings
   → replace the existing nameservers with the two Cloudflare gave you → save.
   (Propagation takes anywhere from a few minutes to a few hours.)
4. Back in Cloudflare → **Workers & Pages** → your `growthhub` project → **Custom domains**
   → **Set up a custom domain** → enter `www.growthhub.house` → confirm.
   Repeat for `growthhub.house` (apex) so both work. Cloudflare creates the records and the
   free SSL certificate automatically.

## Step 4 — Cancel Mixo
Once `https://www.growthhub.house` loads the new site with the padlock (SSL), your Mixo
subscription is no longer doing anything. Cancel it.

---

## Optional — GitHub-connected deploys (auto-publish on every edit)
If you'd rather have changes go live automatically when you edit files:
1. Push this folder to a GitHub repo.
2. Cloudflare Pages → **Create** → **Connect to Git** → pick the repo → Framework preset: **None**
   → Build command: *(leave empty)* → Output directory: `/` → **Save and Deploy**.
3. Every `git push` then redeploys the site. Custom domain setup is the same as Step 3.
