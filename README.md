# Juice Shop Login Demo

A small educational login-form project inspired by the layout of OWASP Juice Shop.

The project demonstrates the difference between **client-side validation** and **server-side validation**. It is only a demo: it does not authenticate users against a database and should not be used as a production login system.

## Features

- Email input field
- Password input field
- Prevents empty form submissions in the browser
- Client-side JavaScript validation
  - Email must contain `@`
  - Password must contain at least 8 characters
- Server-side validation with the same validation rules
- Simple Express server
- Juice Shop-inspired login-card styling

## Project Structure

```text
juice-shop-login-demo/
├── public/
│   └── index.html
├── server.js
├── package.json
└── README.md
```

## Requirements

Install:

- Node.js
- npm

## How to Run

1. Clone or download this repository.
2. Open a terminal in the project folder.
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

5. Open your browser and visit:

```text
http://localhost:3000
```

## Validation

### Client Side

The browser calls `validateLogin()` before making a request to the server.

The form is rejected when:

- Either field is empty
- The email does not contain `@`
- The password is fewer than 8 characters

### Server Side

The `/api/login` endpoint repeats the validation rules on the server.

This is important because client-side validation alone can be bypassed. A server should never assume data is valid just because the browser already checked it.

## Important Note

This project is intended for learning and coursework. A real login system should use stronger email validation, password hashing, secure session handling, HTTPS, rate limiting, CSRF protections where applicable, and a real user database.
