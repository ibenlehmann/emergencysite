const head = document.querySelector("#hotspotHoved");
const sun = document.querySelector("#hotspotSol");
const ice = document.querySelector("#hotspotIs");
const overskrift = document.querySelector(".info-text > h2");
const placeholder = document.querySelector(".placeholder");
const efficiency = document.querySelector("#efficiency");
const requirement = document.querySelector("#requirement");

///////////////////////////////////// hotspotHoved /////////////////////////////////////
head.addEventListener("mouseover", mouseOverHead);
head.addEventListener("mouseout", mouseOutHead);
head.addEventListener("click", clickHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  head.style.fill = "#b0b6db";
}

function mouseOutHead() {
  console.log("mouseOutHead");
  head.style.fill = "red";
}

function clickHead() {
  console.log("clickHead");
  overskrift.textContent = "DEN HUMORISTISKE METODE";
  placeholder.innerHTML = `<h3>Metode:</h3><p> Vend tårer til grin. Lav det dramatisk og sjovt:</p>
    <ul>
    <li>Læg dig på jorden og råb: “NEEEJ! ISEN!!! HVORFOR SKAL VERDEN VÆRE SÅ GRUSOM!?”</li>
    <li>Syng en sørgelig is-sang (bonuspoint, hvis du improviserer).</li>
    <li>Spørg isen, om den har sidste ord: “Var det værd, chokolade?”</li>
    </ul>`;
  efficiency.innerHTML = `<h3>Virker bedst når:</h3> 
    <ul>
    <li>Barnet har sans for humor.</li>
    <li>Du ikke er bange for at se tosset ud i offentligheden.</li>
    </ul>`;
  requirement.innerHTML = `<h3>Mulig bivirkning:</h3> 
     <ul>
    <li>Andre forældre begynder at filme dig.</li>
    </ul>`;

  //// animationer
  requirement.classList.add("fadeIn");

  efficiency.classList.add("rotate");
}
requirement.addEventListener("animationend", removeFadein);
head.addEventListener("click", fadeIn);

efficiency.addEventListener("animationend", removeRotate);
head.addEventListener("click", rotate);
////// animation Fadein
function fadeIn() {
  requirement.classList.add("fadeIn");
  requirement.addEventListener("animationend", removeFadein);
}

function removeFadein() {
  requirement.classList.remove("fadeIn");
  requirement.addEventListener("animationend", removeFadein);
}

///// animation Rotate
function rotate() {
  efficiency.classList.add("rotate");
  efficiency.addEventListener("animationend", removeRotate);
}

function removeRotate() {
  efficiency.classList.remove("rotate");
  efficiency.addEventListener("animationend", removeRotate);
}

/////////////////////////////////////////  hotspotSol /////////////////////////////////////////////
sun.addEventListener("mouseover", mouseOverSol);
sun.addEventListener("mouseout", mouseOutSol);
sun.addEventListener("click", clickSol);

function mouseOverSol() {
  console.log("mouseOverSol");
  sun.style.fill = "#b0b6db";
}

function mouseOutSol() {
  console.log("mouseOutSol");
  sun.style.fill = "red";
}

function clickSol() {
  console.log("clickSol");
  overskrift.textContent = "DEN FILOSOFISKE TILGANG";
  placeholder.innerHTML = `<h3>Metode:</h3> <p> Brug situationen som en dybt meningsfuld livslektion:</p>
  <p>“Se skat, isen smelter – ligesom alle ting i livet. Men minderne… de smelter aldrig.”</p><h3>Supplerende handling:</h3>
  <p> Peg dramatisk mod horisonten og lad vinden tage din stemme.</p>`;
  efficiency.innerHTML = `<h3>Virker bedst når:</h3> 
    <ul>
    <li>Du selv har sovet godt.</li>
    <li>Barnet er gammelt nok til at forstå ord som “eksistentiel smerte”.</li>
    </ul>`;
  requirement.innerHTML = `<h3>Mulig bivirkning:</h3> 
     <ul>
    <li>Barnet begynder at filosofere over meningen med dessert.</li>
    </ul>`;

  /// animationer
  requirement.classList.add("fadeIn");
  efficiency.classList.add("rotate");
}

/////////////////////////////////// hotspotIs //////////////////////////////////////////
ice.addEventListener("mouseover", mouseOverIs);
ice.addEventListener("mouseout", mouseOutIs);
ice.addEventListener("click", clickIs);

function mouseOverIs() {
  console.log("mouseOverIs");
  ice.style.fill = "#b0b6db";
}

function mouseOutIs() {
  console.log("mouseOutIs");
  ice.style.fill = "red";
}

function clickIs() {
  console.log("clickIs");
  overskrift.textContent = "DEN HURTIGE ERSTATNING";
  placeholder.innerHTML = `<h3>Metode:</h3> 
  <p>Gå direkte til nærmeste isbod og køb en ny, <strong>før tårerne når kindbenet.</strong>Brug sætninger som:</p>
  <p>“Heldigvis har vi råd til en ekstra stor denne gang!”</p>`;
  efficiency.innerHTML = `<h3>Virker bedst når:</h3> 
    <ul>
    <li>Du er i nærheden af en kiosk.</li>
    <li>Du har kontanter eller MobilePay, der ikke lige er nede.</li>
    </ul>`;
  requirement.innerHTML = `<h3>Mulig bivirkning:</h3> 
     <ul>
    <li>Du lærer barnet, at tårer = gratis is. Men hey… det er et problem for <i>fremtidige</i> dig.</li>
    </ul>`;

  // animationer
  requirement.classList.add("fadeIn");
  efficiency.classList.add("rotate");
}
