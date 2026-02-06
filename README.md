# ArrowShop — MERN E-commerce Platform

ArrowShop is a full-stack e-commerce web application built using the **MERN stack**, demonstrating end-to-end implementation of a modern online store.

The project covers real-world e-commerce workflows such as authentication, product management, cart handling, and order processing, with a clear separation between frontend and backend layers.

> This project was initially developed as part of a structured MERN learning program and later refined to follow **production-style architecture, patterns, and best practices**.

---

## Tech Stack

### Frontend
- React (Create React App)
- Redux & Redux Thunk (global state management)
- React Router
- Bootstrap 5 & React Bootstrap
- Axios (API communication)
- React Helmet (SEO-friendly metadata)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JWT Authentication
- bcryptjs (password hashing)
- Multer (file uploads)
- Morgan (request logging)

---

## Key Features

- User authentication & authorization (JWT-based)
- Product listing and detail pages
- Shopping cart and checkout workflow
- Order creation and management
- Redux-based global state handling
- RESTful API integration
- Image upload handling
- Modular frontend and backend separation

---

## Architecture Notes

- Frontend and backend are maintained as **separate modules** for scalability
- Redux ensures predictable and centralized state management
- APIs follow standard **REST conventions**
- Centralized async error handling on the backend
- Designed to reflect **real-world e-commerce workflows**, not demo-only logic

---

## Development & Scripts

### Frontend
```bash
npm start
npm run build
npm test
