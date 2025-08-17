# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ⚙️ Backend - Marathon Management

---

## Project Overview

This is the backend server for the Marathon Management web application. It handles API requests, user authentication, event and participant management, and connects to the MongoDB database. The backend ensures secure and efficient data handling, supporting the frontend with all necessary services.

---

## Technologies Used

- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework for building APIs  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB object modeling  
- **JWT** – User authentication  
- **bcryptjs** – Password hashing  
- **dotenv** – Environment variable management  

---

## Core Features

- RESTful API endpoints for marathon event management  
- User registration, login, and role-based authentication  
- Secure password hashing and token-based auth  
- Data validation and error handling  
- Connection with MongoDB for data persistence  

---

## Dependencies

- express  
- mongoose  
- jsonwebtoken  
- bcryptjs  
- cors  
- dotenv  

*(See `package.json` for full details)*

---

## Running Locally

1. Clone the repository (backend part):  
   ```bash
   git clone <backend-repo-url>
   cd <backend-folder>
