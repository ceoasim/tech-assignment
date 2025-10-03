# Knowledge Technician Dashboard

A mobile-first knowledge capture UI for manufacturing technicians.

## Features

- Add/Edit/Delete knowledge entries (Title, Description, Image upload)
- Responsive, intuitive UI (mobile first)
- Mock API (json-server)
- Automated e2e tests (Playwright)

## UI/UX Improvement
For usability, entries auto-scroll into view after adding/editing, reducing technician cognitive load. Animations offer tactile feedback during add/delete actions (see App for simple fade-in/fade-out animation).

## Bonus: Animation for Mobile
For a lightweight prototype, you could add a simple fade/slide-in animation on entry addition (framer-motion is a popular lib, or with Tailwind transitions).

## Setup

1. **npm i**
2. **npx tailwindcss init -p**
3. **npx playwright install**
4. **npm run server**
5. **npm run server**
6. **npm start**
7. **npx playwright test**
