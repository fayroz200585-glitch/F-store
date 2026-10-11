# F_store

F_store is a responsive general-purpose online store for browsing products across fashion, accessories, and electronics. It includes a home page, product catalogue and detail pages, a shopping cart, and informational pages.

## Features

- React single-page application built with Vite.
- Client-side navigation with React Router.
- Bootstrap 5 responsive grid for the shop catalogue, with additional project styles in CSS.
- Responsive home, product, cart, about, and contact pages.
- Product catalogue and details loaded from the Fake Store API with Axios.
- Add products to the in-memory cart, remove them, and view the calculated total.
- Contact form with browser-side required-field and email validation.
- Not-found pages for unknown routes and product IDs.

## Requirements

- Node.js and npm. Use a Node.js version supported by the installed Vite release.

## Getting started

From the project root, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser. The server supports hot module replacement while developing.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Serve the production build locally for verification. Run `npm run build` first. |
| `npm run lint` | Check the JavaScript and JSX files with ESLint. |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home page with the store introduction and categories. |
| `/shop` | Product catalogue. |
| `/product/:id` | Product details for the matching numeric product ID. |
| `/cart` | Cart contents and total price. |
| `/about` | Store information. |
| `/contact` | Contact form. |
| Any other path | Not-found page with a link back to the home page. |

The application uses `BrowserRouter`, so a production web server must serve `index.html` as a fallback for client-side routes such as `/shop` and `/product/1`.

## Responsive design and UI

Bootstrap's CSS is loaded in `src/main.jsx`. The shop uses Bootstrap's grid classes to show one product per row on narrow screens, two from the `sm` breakpoint, and three from the `lg` breakpoint. The rest of the store uses the shared styles in `src/App.css`, including breakpoints for the navigation, home hero, category cards, and product details. Global typography and base styles are in `src/index.css`.

## Project structure

```text
.
├── public/
│   ├── images/              # Local storefront images
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   └── productCard.jsx  # Reusable product card
│   ├── api/
│   │   └── products.js      # Axios requests and API product formatting
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   ├── ProductDetails.jsx
│   │   └── Shop.jsx
│   ├── App.jsx              # Shared layout and route definitions
│   ├── App.css              # Store and page styles
│   ├── CartContext.jsx      # Shared cart state and actions
│   ├── index.css            # Global base styles
│   └── main.jsx             # React entry point, Bootstrap, and providers
├── index.html
├── package.json
└── README.md
```

## How the app works

- `src/main.jsx` mounts the React application, imports Bootstrap and global CSS, and provides `BrowserRouter` and `CartProvider`.
- `src/App.jsx` renders the common navigation and footer and maps application paths to page components.
- `src/api/products.js` uses Axios to load all products from the Fake Store API and retrieve individual products by ID. It maps API fields to the names used by the UI and formats prices in USD.
- `src/components/productCard.jsx` displays one catalogue item and links to its detail route.
- `src/pages/ProductDetails.jsx` looks up a product by route ID and can add it to the cart.
- `src/CartContext.jsx` provides cart state and add/remove actions to the pages that need them.
- `src/pages/Cart.jsx` displays cart entries and calculates the total from their prices.

## Current behavior and limitations

- Product data is loaded from `https://fakestoreapi.com/products`, with individual product details loaded from `https://fakestoreapi.com/products/:id`. The store displays the full general-product catalogue without category filtering. An internet connection and availability of the external API are required.
- Cart state is held in React context memory and is cleared when the page is refreshed.
- The contact form validates fields in the browser and shows a confirmation message. It does not send or save messages because no backend service is configured.
- The cart treats each addition as a separate item; it does not combine matching products into quantities.

## Customization

- To change the catalogue search or API mapping, edit `src/api/products.js`.
- Update route definitions in `src/App.jsx` when adding pages.
- Adjust the store theme and responsive page styles in `src/App.css`; adjust global defaults in `src/index.css`.
- Keep shared cart behavior in `src/CartContext.jsx` so every page uses the same cart state.
