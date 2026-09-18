// SUPABASE CONFIG
const SUPABASE_URL = "https://atpavkarshjlnhckjvsl.supabase.co";
const SUPABASE_KEY = "sb_publishable_GD0qFlCuP0idUCoybErbWg_XlMuhqS5";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// ===== FOREX AI V2 =====

let loggedIn = false;
let currentProduct = "";
let currentPrice = "";

// ---------- LOGIN ----------
function openLogin() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

async function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert("Wrong email or password.");
    return;
  }

  loggedIn = true;
  closeLogin();
  window.location.href = "dashboard.html";
}
// ---------- SIGN UP ----------
function openSignup() {
  document.getElementById("signupModal").style.display = "block";
}

function closeSignup() {
  document.getElementById("signupModal").style.display = "none";
}

function signupUser() {
  const pass = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (pass.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  if (pass !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  loggedIn = true;
  alert("Account created successfully!");
  closeSignup();
}

// ---------- SHOW / HIDE PASSWORD ----------
function togglePassword(id) {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

// ---------- BUY NOW ----------
function buyNow(product, price) {
  if (!loggedIn) {
    alert("Please login first before buying.");
    openLogin();
    return;
  }

  currentProduct = product;
  currentPrice = price;

  window.location.href =
    "payment.html?product=" +
    encodeURIComponent(product) +
    "&price=" +
    encodeURIComponent(price);
}

// ---------- FREE NEWS AI ----------
function openNews() {
  if (!loggedIn) {
    alert("Login first to access FREE News Prediction AI.");
    openLogin();
    return;
  }

  window.location.href = "news.html";
}

// ---------- ACCOUNT MANAGEMENT ----------
function openAccount() {
  if (!loggedIn) {
    alert("Login first to access Account Management.");
    openLogin();
    return;
  }

  window.location.href = "account.html";
}

// ---------- FAQ / WHY CHOOSE AI ----------
function toggleAccordion(card) {
  card.classList.toggle("active");

  const content = card.querySelector(".content");

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
