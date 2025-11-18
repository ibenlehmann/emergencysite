//////////////////////////////////////// Forms output ///////////////////////////////////
const form = document.querySelector("#webform");

/*****************FJERN BROWSER POP-UP???*******************/
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);

/******************************************************************/
const nameOutput = document.querySelector(".name_output");
const emailOutput = document.querySelector(".email_output");
const redningsudstyrOutput = document.querySelector(".redningsudstyr_output");
const motivationOutput = document.querySelector(".motivationstekst_output");
const billedeOutput = document.querySelector(".billede_output");

function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault();
  const formData = new FormData(form);

  const name = formData.get("name");
  nameOutput.textContent = name;

  const email = formData.get("email");
  emailOutput.textContent = email;

  const redningsudstyr = formData.getAll("redning_checkbox").join(", ");
  redningsudstyrOutput.textContent = redningsudstyr;

  const text = formData.get("text");
  motivationOutput.textContent = text;

  const img = formData.get("img");
  billedeOutput.textContent = img;

  form.reset();
}
