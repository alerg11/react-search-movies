# 🎬 React Search Movies

A simple movie search app built with React and Redux, consuming the [OMDb API](https://www.omdbapi.com/).

## Features

- Search movies by title
- View movie details (actors, plot, score)
- Global search counter using Redux
- Client-side routing with React Router

## Tech Stack

- React (Functional Components + Hooks)
- Redux (with `react-redux`)
- React Router DOM
- Bulma CSS

## Getting Started

### Prerequisites

- Node.js
- An OMDb API key — get one free at [omdbapi.com](https://www.omdbapi.com/)

### Installation

```bash
git clone https://github.com/alerg11/react-search-movies.git
cd react-search-movies
npm install
```

### API Key

Open `src/pages/Home.js` and `src/pages/Detail.js` and replace the API key:

```javascript
const API_KEY = "your_api_key_here";
```

## Available Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production into the `build` folder.

## Project Structure

```
src/
  components/       # Reusable components
  pages/            # Home, Detail, NotFound
  redux/            # actions, reducer, store
```

## Notes

This project was built for learning purposes, practicing the migration from Class Components to Functional Components and integrating Redux for global state management.