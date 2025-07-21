// script.js

function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error-msg");

  error.textContent = "";

  if (!username || !password) {
    error.textContent = "Please fill in both fields.";
    return false;
  }

  if (username === "admin" && password === "admin123") {
    localStorage.setItem("isLoggedIn", true);
    window.location.href = "index.html";
    return false;
  } else {
    error.textContent = "Invalid username or password.";
    return false;
  }
}

// Optional logout function
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}

// Auto-redirect if already logged in
window.onload = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (window.location.pathname.includes("login.html") && isLoggedIn) {
    window.location.href = "index.html";
  }
};