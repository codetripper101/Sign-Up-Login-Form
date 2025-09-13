// Grab elements from the DOM
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const toggleFormBtn = document.getElementById("toggle-form");
const toggleText = document.getElementById("toggle-text");
const formTitle = document.getElementById("form-title");

// Toggle between Login & Sign up
toggleFormBtn.addEventListener("click", () => {
  if (loginForm.classList.contains("hidden")) {
    // Show login, hide signup
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    formTitle.textContent = "Login";
    toggleText.textContent = "Don't have an account?";
    toggleFormBtn.textContent = "Sign Up";
  } else {
    // Show signup, hide login
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    formTitle.textContent = "Sign Up";
    toggleText.textContent = "Already have an account?";
    toggleFormBtn.textContent = "Login";
  }
});

// Login form validation
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop page refresh

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  let valid = true;

  // Validate email
  if (!email || !email.includes("@")) {
    document.getElementById("login-email-error").textContent = "Enter a valid email";
    document.getElementById("login-email-error").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("login-email-error").classList.add("hidden");
  }

  // Validate password
  if (!password) {
    document.getElementById("login-password-error").textContent = "Password is required";
    document.getElementById("login-password-error").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("login-password-error").classList.add("hidden");
  }

  if (valid) {
    alert("Login successful! 🚀");
  }
});

//  Signup form validation 
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();
  const confirmPassword = document.getElementById("signup-confirm-password").value.trim();

  let valid = true;

  // Validate email
  if (!email || !email.includes("@")) {
    document.getElementById("signup-email-error").textContent = "Enter a valid email";
    document.getElementById("signup-email-error").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("signup-email-error").classList.add("hidden");
  }

  // Validate password
  if (!password) {
    document.getElementById("signup-password-error").textContent = "Password is required";
    document.getElementById("signup-password-error").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("signup-password-error").classList.add("hidden");
  }

  // Confirm password check
  if (password !== confirmPassword) {
    document.getElementById("signup-confirm-password-error").textContent = "Passwords do not match";
    document.getElementById("signup-confirm-password-error").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("signup-confirm-password-error").classList.add("hidden");
  }

  if (valid) {
    alert("Signup has been successful!");
  }
});
