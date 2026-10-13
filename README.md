# Providence Ranch Company Website

A responsive, single-page website for Providence Ranch Company with Home, Our Cattle, Our Story, Our Values, and Contact sections.

## Before publishing
1. Open `script.js`.
2. Find `REPLACE_WITH_YOUR_EMAIL` and replace it with the email address where you want cattle inquiries delivered.
3. Review the wording in `index.html` and adjust anything that doesn't match your actual ranch operations.
4. The photos currently load from Unsplash over the internet, so visitors need an internet connection to see them.

## Preview locally
Open `index.html` in a browser. For best results, preview it on both a phone-sized screen and desktop.

## Free publishing with GitHub Pages
1. Sign in or create a free account at https://github.com.
2. Create a new public repository named `providence-ranch-website`.
3. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root.
4. In the repository, open **Settings → Pages**.
5. Under the build/deployment section, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. GitHub will provide the live website URL in the Pages settings after deployment finishes.

GitHub Pages can host this static website at no ongoing hosting cost under its free offering. A custom domain name, if you choose to buy one, costs extra.

## Contact form note
This is a static site, so the form prepares an email in the visitor's email app rather than sending directly from a server. It will not work until you replace the placeholder email in `script.js`. A hosted form service would be needed for direct web submissions.

## Editing photos
The image URLs are in `styles.css` under `.hero-image`, `.photo-cow`, `.photo-calf`, and `.story-photo`. Replace the URLs with your own ranch photos whenever you have them.
