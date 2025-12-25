# Lilac Stitches

Lilac Stitches is an e-commerce website built with React and Vite, specializing in handmade crochet products. It features a responsive design using Tailwind CSS, allowing users to browse products, view FAQs, and navigate through various pages like Shop, About Us, and Contact Us.

## Features

- **Product Catalog**: Browse crochet items with images, prices, colors, and stock status on the Shop page.
- **Product Details**: View individual product information (page under development).
- **FAQ Section**: Interactive accordion for common questions using [`FAQAccordion`](src/components/FAQAccordion.jsx).
- **Responsive Navigation**: Sticky header with mobile menu and dropdowns, powered by [`Header`](src/components/Header.jsx).
- **Footer**: Links to key pages and social media, implemented in [`Footer`](src/components/Footer.jsx).
- **Layout**: Consistent layout across pages via [`Layout`](src/components/Layout.jsx).
- **Routing**: Client-side routing with React Router for pages like Home, Shop, Cart, etc.

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, React Icons
- **Routing**: React Router
- **Linting**: ESLint with React-specific rules

## Installation

1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Build for production:
   ```sh
   npm run build
   ```
5. Preview the build:
   ```sh
   npm run preview
   ```

## Project Structure

- [`src/components`](src/components): Reusable UI components like [`ProductCard`](src/components/ProductCard.jsx), [`Header`](src/components/Header.jsx), etc.
- [`src/pages`](src/pages): Page components such as [`Shop`](src/pages/Shop.jsx), [`Faq`](src/pages/Faq.jsx).
- [`src/images`](src/images): Product images.
- [`public`](public): Static assets.
- Configuration files: [`vite.config.js`](vite.config.js), [`eslint.config.js`](eslint.config.js), [`package.json`](package.json).

## Contributing

This is a personal project. For suggestions, contact via the Contact Us page.

## License

© 2025 Lilac Stitches. All Rights Reserved.
