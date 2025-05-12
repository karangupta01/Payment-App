# 💸 Payment Application

Welcome to the Payment Application repository! This is a full-stack MERN (MongoDB, Express, React, Node.js) project designed to provide a simple, secure, and user-friendly system where users can create accounts, view other users, and send money to their friends.

---

## ✨ Key Features

* 🔐 User Account Creation: New users can sign up easily.
* 💰 Initial Credit: Each newly created account is initialized with a random balance.
* 👥 User Listing: Authenticated users can view a list of other registered users.
* 💸 Money Transfer: Users can send money securely to other users via a simple UI.
* ✅ Input Validation: Backend and frontend input validation ensures data integrity.
* 🔐 JWT Authentication: Secure user sessions with token-based authentication.

---

## 🛠️ Backend

The backend is built with Node.js and Express, using MongoDB as the primary database. It handles all the business logic, user authentication, and transaction processing.

### 🔧 Technologies & Libraries Used

* 📦 Node.js + Express.js for API server and routing
* 🗃️ MongoDB for NoSQL data storage
* 🧰 Mongoose for object modeling and MongoDB schema definitions
* 🔐 jsonwebtoken for secure, stateless user authentication (JWT)
* ✅ zod for runtime schema and request body validation
* 🌐 cors to allow cross-origin requests
* 🔐 dotenv for managing environment variables securely

---

## 🎨 Frontend

The frontend is built using React.js and is designed to provide a responsive and interactive user experience. It communicates with the backend through secure REST APIs.

### 📄 Pages

* 📝 Signup: Allows new users to register.
* 🔑 Signin: User login with credential validation.
* 🧾 Dashboard: Displays user info, current balance, and other users.
* 💳 Send Money: Interface to initiate a secure money transfer.

### 🛠️ Libraries & Tools

* ⚛️ React.js for UI development
* 🌐 react-router-dom for client-side routing
* 🔄 axios for HTTP requests to the backend API
* 🎨 Tailwind CSS for a fast and modern UI styling approach

---

## 📁 Project Structure

```
payment-app/
│
├── client/               # React frontend
│   ├── src/
│   │   ├── pages/        # Page components (Signup, Signin, Dashboard, etc.)
│   │   ├── components/   # Reusable UI components
│   │   └── utils/        # Axios instances, API helpers
│
├── server/               # Express backend
│   ├── routes/           # Route definitions
│   ├── models/           # Mongoose schemas (User, Transaction)
│   ├── middleware/       # Auth middleware
│   └── controllers/      # Business logic
```
