# 1.Introduction

- What is Parcel
- https://parceljs.org/
- Why do we need it

# 2.Installing globally

- An alternative to `live-server`
- Install: `npm install -g parcel-bundler`
- Running parcel: `parcel *.html` or `parcel index.html`
- Strange refreshes? Refresh manually
- Add `.cache` to `.gitignore`

# 3.Installing locally

A. Set up NPM

- `npm init` or `npm init -y`

B. Install Parcel locally

- `npm install parcel-bundler --save-dev`

C. A look at `node_modules/`

D. Running Parcel, locally

- Add scripts to package.json:
- `"start": "parcel *.html --open",`

E: `npm install`

F: Add `node_modules/`to `.gitignore`

# 4.Installing locally or globally?

- Pros / cons

# 5.Building with Parcel

- `--public-url (or whatever it’s called)`
- But what about dynamic resources?
- Static files copy plugin
- Add build script to `package.json`
- `"build": "parcel build \*.html --public-url ./"`
- add `dist/` to `.gitignore`
