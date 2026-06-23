# Growth Hub — website

A single-page static site (plain HTML/CSS/JS, no build step). Rebuilt to replace the
paid Mixo hosting. Hosted free on **GitHub Pages**; you keep paying only for the domain.

- **Live (GitHub Pages URL):** https://pierreantoinedescoteaux-ui.github.io/growthhub-site/
- **Repo:** https://github.com/pierreantoinedescoteaux-ui/growthhub-site
- **Final URL (after DNS cutover):** https://growthhub.house

## Files
- `index.html` — the page
- `styles.css` — styling
- `script.js` — footer year, waitlist redirect, scroll animations
- `favicon.svg` — site icon
- `assets/` — `hero-group.jpg` (founders photo), `paul.jpg` (testimonial headshot)

`_design-reference/`, `dist/`, `node_modules/` are git-ignored (dev only).

## The waitlist
The hero email box and every "Join the waitlist" button open your existing Google Form:
`https://forms.gle/3sb8WSJUnqbjkZE49`. To change it, edit `WAITLIST_URL` at the top of `script.js`.

## To edit the site later
Edit the files, then from this folder run:
```
git add -A
git commit -m "describe your change"
git push
```
GitHub rebuilds and the live site updates in ~1 minute.

---

# Connect your domain (growthhub.house) — final step

The site is already live on the GitHub URL above. To make **growthhub.house** show it and
retire Mixo, two things happen: change DNS at GoDaddy, then attach the domain on GitHub.

Your domain is registered at **GoDaddy** (nameservers `ns05/ns06.domaincontrol.com`,
renews 2026-10-06). DNS is currently pointed at Mixo; we repoint it to GitHub.

## Step 1 — Change DNS records at GoDaddy
1. Sign in at https://godaddy.com → avatar (top-right) → **My Products**.
2. Find `growthhub.house` → **Domain** → **Manage DNS** (or the ••• → DNS).
3. **Delete** the existing record that points to Mixo (a CNAME on `www` pointing to
   `...customer.mixo.io`, and/or any `A`/forwarding on the root `@`).
4. **Add these records** (Type / Name / Value):
   - `A` / `@` / `185.199.108.153`
   - `A` / `@` / `185.199.109.153`
   - `A` / `@` / `185.199.110.153`
   - `A` / `@` / `185.199.111.153`
   - `CNAME` / `www` / `pierreantoinedescoteaux-ui.github.io`
   Leave TTL at default (1 hour). Save.
   (Propagation: minutes to a few hours.)

## Step 2 — Attach the domain on GitHub
Once DNS is changed, re-add the custom domain (recreates the `CNAME` file + provisions SSL):
```
cd C:\Users\User\growthhub-site
"growthhub.house" | Out-File -Encoding ascii -NoNewline CNAME
git add CNAME; git commit -m "Attach growthhub.house"; git push
```
Then in the repo: **Settings → Pages → Custom domain** → confirm `growthhub.house` shows
"DNS check successful", and tick **Enforce HTTPS** once it's available (can take ~15 min–1 hr).

## Step 3 — Cancel Mixo
When https://growthhub.house loads the new site with the padlock, Mixo is doing nothing.
Cancel the subscription.

> **If you can't log into GoDaddy:** you may have registered the domain *through Mixo*. In that
> case do NOT cancel Mixo until you either get GoDaddy access or change DNS inside Mixo's domain
> settings first — otherwise the domain could stop resolving. Sort domain access out before cancelling.
