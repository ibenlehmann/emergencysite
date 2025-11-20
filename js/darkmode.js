const html = document.querySelector("html");
const togglebtn = document.querySelector("#toggle");

if (sessionStorage.getItem("darkmode") === "true") {
  html.classList.add("dark");
}

function toggleTheme() {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    sessionStorage.setItem("darkmode", "true");
  } else {
    sessionStorage.setItem("darkmode", "false");
  }
}

togglebtn.addEventListener("click", toggleTheme);
