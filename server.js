const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function validateLogin(email, password) {
  if (!email || !password) {
    return "Email and password are required.";
  }

  if (typeof email !== "string" || !email.includes("@")) {
    return "Email must contain @.";
  }

  if (typeof password !== "string" || password.length < 8) {
    return "Password must be at least 8 characters long.";
  }

  return null;
}

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const validationError = validateLogin(email, password);

  if (validationError) {
    return res.status(400).json({
      success: false,
      message: validationError
    });
  }

  // Demo only: this project validates input but does not authenticate
  // against a real user database.
  return res.status(200).json({
    success: true,
    message: "Login input passed both client-side and server-side validation."
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
