# Stan Coding Challenge

A simple React + TypeScript web app to display popular series and movies using a JSON feed. This challenge demonstrates filtering, sorting, error handling, and responsive layout.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Setup Instructions](#setup-instructions)
4. [Usage](#usage)
5. [Technical & Architectural Choices](#technical--architectural-choices)
6. [Improvements & Future Enhancements](#improvements--future-enhancements)
7. [What I Would Do Differently with More Time](#what-i-would-do-differently-with-more-time)
8. [License](#license)

---

## Project Overview

This project fetches data from a local JSON feed (`/feed/sample.json`) and displays:

- **Home Page**: Links to Series and Movies
- **Series Page**: Shows filtered and sorted series (≥ 2010, first 21, sorted by title)
- **Movies Page**: Shows filtered and sorted movies (≥ 2010, first 21, sorted by title)
- **Loading & Error States**: Displays loading text/spinner and error messages appropriately

---

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** (build tool + dev server)
- **React Router** for routing
- **CSS** or inline styles for basic styling (no third-party CSS frameworks)

---

## Setup Instructions

1. **Clone the repository** (or download the ZIP):
   ```bash
   git clone <your-repo-url>
   cd react-coding-challenge
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run in development mode**:
   ```bash
   npm run dev
   ```
   - Open the local URL (e.g., `http://localhost:5173`) in your browser.
4. **Build for production**:
   ```bash
   npm run build
   ```
   - This generates a `dist` folder with the production build.
5. **Preview the production build** (optional):
   ```bash
   npm run preview
   ```
   - Or serve `dist` locally with a simple server (e.g., `npx serve dist`).

---

## Usage

- **Home Page**: Click on **Series** or **Movies** tiles.
- **Series Page**: Displays a grid of popular series from 2010 onwards.
- **Movies Page**: Displays a grid of popular movies from 2010 onwards.
- **Error Handling**: If the feed fails to load, an error message is shown.
- **Loading State**: A loading message is shown while fetching data.

---

## Technical & Architectural Choices

1. **React + TypeScript**
   - Provides type safety, easier maintenance, and better tooling support.
2. **Vite**
   - Offers a fast development environment with minimal configuration.
3. **React Router**
   - Simplifies page-based navigation (Home, Series, Movies).
4. **Inline Styles / Minimal CSS**
   - Quick to implement for a small project; no heavy CSS frameworks.

---

## Improvements & Future Enhancements

- **More Robust Styling**
  - Migrate inline styles to CSS Modules or styled-components for maintainability.
- **Unit/Integration Tests**
  - Add tests using Jest and React Testing Library for key components and pages.
- **Better Error & Loading UX**
  - Replace basic text with a styled loader or skeleton screen, and a friendlier error page.
- **Pagination**
  - If the dataset grows, implement pagination or lazy loading to handle more entries.

---

## What I Would Do Differently with More Time

- **Add More Tests**
  - Ensure coverage for fetching, filtering, sorting, and UI rendering.
- **Refine Responsiveness**
  - Add breakpoints for various screen sizes, ensuring an optimal layout on mobile/tablet.
- **Accessibility**
  - Audit the app for screen-reader compatibility and keyboard navigation.
- **Deployment**
  - Automate builds and deployments to a service like Netlify or Vercel for quick previews.

---

## License

This project is provided for demonstration purposes. No specific license is attached, but feel free to adapt it as needed.

---

Enjoy exploring the Stan Coding Challenge! If you have any questions or run into any issues, feel free to reach out.
