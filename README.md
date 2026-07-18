# MERN-Ecommerce

A learning build of an e-commerce site on the MERN stack (MongoDB, Express, React, Node), following a tutorial-style structure. It's an unfinished work-in-progress: what exists is the **auth layer** and the **client page shell** — no products, cart, or payments were built.

## What's actually implemented

**Server (`/api/v1/auth`):**

- `POST /register` — creates a user (name, email, password, phone, address) with a bcrypt-hashed password; rejects duplicate emails.
- `POST /login` — verifies credentials and returns a JWT (7-day expiry) plus basic profile fields.
- `GET /test` — a protected demo route behind `requireSignIn` (JWT verification) and `isAdmin` (checks `role === 1` on the user document) middleware.

The user model has a numeric `role` field (default `0`) intended for admin gating.

**Client (Create React App + React Router, in `client/`):**

Static pages — Home, About, Contact, Policy, and a 404 page — wrapped in a shared `Layout` with `Header`/`Footer`. The client is not yet wired to the API.

## Tech stack

- **Server:** Node.js (ES modules), Express, Mongoose, JWT, bcrypt, morgan, dotenv, colors
- **Client:** React 18, react-router-dom

## Structure

```
server.js          # Express app, mounts /api/v1/auth
config/db.js       # Mongoose connection
routes/            # authRoute.js
controllers/       # authController.js (register, login, test)
middlewares/       # authMiddleware.js (requireSignIn, isAdmin)
helpers/           # authHelper.js (hash/compare password)
models/            # userModel.js
client/            # CRA frontend (pages + Layout components)
```

## Running locally

Requires Node.js and MongoDB. Create a `.env` with `PORT`, `SERVER_MODE`, the Mongo connection string, and `JWT_KEY`.

```bash
npm install && npm run server   # API on :8080
cd client && npm install && npm start   # frontend on :3000
```
