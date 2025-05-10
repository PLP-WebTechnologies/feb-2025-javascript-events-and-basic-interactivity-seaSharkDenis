// Event handling
document.getElementById("clickBtn").addEventListener("click", function () {
  const quiz = prompt("What is 1 + 1?");
  if (quiz == 2) {
    alert("Correct!!");
  } else {
    alert("You failed!");
  }
});

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = "lightgreen";
  hoverBox.style.borderRadius = "5px";
  hoverBox.style.fontWeight = "bold";
});
document.getElementById("hoverBox").addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = "lightgray";
});

const keyInput = document.getElementById("keyInput");
keyInput.addEventListener("keydown", function (e) {
  document.getElementById(
    "outputInformation"
  ).textContent = `You have pressed ${e.key}`;
});

document.getElementById("secretBtn").addEventListener("dblclick", function () {
  alert("It's a double click!");
});

// Interactive Elements
const colorChanger = document.getElementById("colorChanger");
colorChanger.addEventListener("click", function () {
  colorChanger.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

const images = [
  "https://images.pexels.com/photos/31965829/pexels-photo-31965829/free-photo-of-close-up-of-a-vintage-style-camera-with-red-strap.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  "https://images.pexels.com/photos/31208115/pexels-photo-31208115/free-photo-of-cherry-blossoms-in-full-bloom-against-urban-backdrop.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  "https://images.pexels.com/photos/31649566/pexels-photo-31649566/free-photo-of-elegant-fashion-portrait-of-two-women-in-beige-dresses.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  "https://images.pexels.com/photos/31466645/pexels-photo-31466645/free-photo-of-serene-courtyard-with-red-chair-in-hanoi.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  "https://images.pexels.com/photos/29247135/pexels-photo-29247135/free-photo-of-aerial-view-of-construction-site-at-sea-in-indonesia.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
];
let currentImg = 0;

const nextImg = document.getElementById("nextImg");
const galleryImg = document.getElementById("galleryImg");
nextImg.addEventListener("click", function () {
  currentImg = (currentImg + 1) % images.length;
  galleryImg.src = images[currentImg];
});

// Tab functionality
const tabContent = document.getElementById("tab-content");
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const tabNum = btn.dataset.tab;
    tabContent.textContent = `You selected tab ${tabNum}`;
  });
});

// Form validation
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("feedback");

  if (name === "") {
    feedback.textContent = "Name is required";
  } else if (!email.includes("@")) {
    feedback.textContent = "Please enter a valid email";
  } else if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters";
  } else {
    feedback.textContent = "Registration successful!";
  }
});
