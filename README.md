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
- Add build script to `package.json`
- `"build": "parcel build *.html --public-url ./"`

# 6.Zero configuration, yeah right

- Static files copy plugin
- https://www.npmjs.com/package/parcel-plugin-static-files-copy
- `npm install --save-dev parcel-plugin-static-files-copy`
- create a dir called `static`
- place your "static" assets in the folder
- All static assets are now copied to the build (`dist/`), without the `static/` folder

## Example

```js
const data = [
  {
    i: "1.png"
  },
  {
    i: "2.png"
  }
];
data.forEach(d => {
  const t = document.createElement("img");
  t.src = "imgs/" + d.i;
  document.body.appendChild(t);
});
```

# 7.import/export

- Spread code over files to reduce complexity / conflicts
- re-use code easily
- split code into logical groups
- `export` & `import`
- non-exported functions
- import as newName

# 8. Introducing SASS

- What is SASS
- Quick comparison to CSS
- Two syntaxes (SASS vs SCSS)
- - We’re using SCSS (although people just call it SASS)
- - https://sass-lang.com/

# 9. Using SASS with Parcel

- hooking it up
- Variables
- Looking at input and output

# 10. Basic Syntax

- Basic syntax
- https://devhints.io/sass
- Nesting
- The & character
- Comments

# 11. `@use`

- <del>Import</del> / use

# 12. `@mixin`'s

- mixins

```css
@mixin flexible() {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin defaultBorder($width: 1px) {
  border: $width solid #000;
  border-radius: 20px;
}
```

# 13. The rest

- Go learn more on your own
- A few best practices
- - Don't nest too deeply
- - Don’t overdo it
- - Readability > fancyness
- It's just css
