// FOREX AI V2

let loggedIn = false;
let selectedProduct = "";
let selectedPrice = "";

// Open Login
function openLogin() {
  alert("Login page will open here.");
}

// Open Sign Up
function openSignup() {
  alert("Create Account page will open here.");
}

// Buy Now (LOGIN REQUIRED)
function buyNow(product, price) {
  if (!loggedIn) {
    alert("Please create an account or login first before buying.");
    openLogin();
    return;
  }

  selectedProduct = product;
  selectedPrice = price;

  alert(
    "Payment Page\n\nProduct: " +
      product +
      "\nPrice: " +
      price +
      "\n\nPayment Method: Airtel Money"
  );

  proceedPayment();
}

// Payment
function proceedPayment() {
  const message =
    `Hello Forex AI.%0A` +
    `I want to pay for ${selectedProduct}.%0A` +
    `Price: ${selectedPrice}.%0A` +
    `I will send payment proof.`;

  window.open(
    "https://wa.me/256765560729?text=" + message,
    "_blank"
  );
}

// Account Management (LOGIN REQUIRED)
function openAccount() {
  if (!loggedIn) {
    alert("Please login first to access Account Management.");
    openLogin();
    return;
  }

  alert("Account Management Form will open.");
}

// News AI (LOGIN REQUIRED)
function openNews() {
  if (!loggedIn) {
    alert("Please login first to use Live News Trading AI.");
    openLogin();
    return;
  }

  alert("Live News Trading AI Dashboard will open.");
}

// Temporary demo login
function loginUser() {
  loggedIn = true;
  alert("Login Successful! Welcome to Forex AI.");
}

// Temporary demo signup
function signupUser() {
  loggedIn = true;
  alert("Account Created Successfully!");
}
