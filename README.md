# JS Presenter

A lightweight, Vite + React presentation app that renders slide components from `src/slides`. Designed for running local, keyboard-driven slide decks and small in-browser demos.

## Key Features

- Component-based slides (one React component per slide)
- Fast local dev with Vite
- Minimal styling with Tailwind + PostCSS
- Easy to extend: add slides under `src/slides` and they will be included

## Tech Stack

- React + JSX
- Vite (dev server & build)
- Tailwind CSS + PostCSS
- Plain JavaScript utilities in `src/utils`

## Demo / Preview

Run locally and open the dev server in your browser:

```bash
npm install
npm run dev
```

The app will typically be available at `http://localhost:5173` (Vite default).

## Installation

Prerequisites: Node.js (16+ recommended) and npm or pnpm.

1. Clone the repo

```bash
git clone https://github.com/OrkoTheMage/js-presenter.git
cd js-presenter
```

2. Install dependencies

```bash
npm install
```

3. Start the dev server

```bash
npm run dev
```

## Usage

- Navigate slides with the arrow keys or by clicking the UI controls.
- Slides are React components stored in `src/slides`. Files are named with an index prefix for ordering (for example `[1] - Welcome.jsx`).
- To add a slide: create a new component in `src/slides` matching the project pattern and export a default React component.

## Project Structure

- `index.html` — Vite entry
- `src/main.jsx` — App entrypoint
- `src/App.jsx` — Root app component
- `src/slides/` — Slide components (each file is a slide)
- `src/components/` — UI components used by the app
- `src/styles/` — global styles and Tailwind config
- `public/` — static assets

## Credits

Author: Aeryn G (OrkoTheMage)
