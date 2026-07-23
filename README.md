# Photo Gallery

A simple vanilla JavaScript photo gallery project that lets the user enter the number of photos they want and then randomly displays matching images from a local JSON list.

## Features

- Responsive gallery layout
- Random image selection from `images.json`
- Lazy-loaded `<img>` tags
- Lightweight static project using plain HTML, CSS, and JavaScript

## Project Structure

- `index.html` — app structure and UI
- `main.js` — logic for loading and rendering images
- `style.css` — gallery styling
- `images.json` — list of image paths
- `images/` — image assets

## How to Run

Because the project uses `fetch()` to load `images.json`, it is best to serve the folder with a small local server instead of opening the file directly.

### Option 1: Use a local server

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 2: Use VS Code Live Server

- Open the folder in VS Code
- Right-click `index.html`
- Choose `Open with Live Server`

## Usage

1. Enter a number in the input field.
2. Click the `get Photos` button.
3. The gallery will render that many random images.

## Notes

- The gallery is intentionally simple and beginner-friendly.
- The number of images is limited by the input value and the available entries in `images.json`.
