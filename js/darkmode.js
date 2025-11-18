const html = document.querySelector("html");
const togglebtn = document.querySelector("#toggle");

if (localStorage.getItem("darkmode")) {
  html.classList.toggle("dark");
}

function toggleTheme() {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("darkmode", true);
  } else {
    localStorage.setItem("darkmode", false);
  }
}

togglebtn.addEventListener("click", toggleTheme);
