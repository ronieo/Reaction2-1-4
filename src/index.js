// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const select = document.querySelector("select"),
  option = select.querySelector("option"),
  COUNTRY = "country";

function saveCountryHandler() {
  localStorage.setItem(COUNTRY, select.value);
}
select.addEventListener("change", saveCountryHandler);

console.log(option.value);

function loadCountry() {
  const currentCountry = localStorage.getItem(COUNTRY);
  select.value = currentCountry;
}

function init() {
  loadCountry();
}
init();
