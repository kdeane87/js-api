const API_KEY = "GOzuS_JhLUVS6S0fd5JwNivJO2U";
const API_URL =
  "https://ci-jshint.herokuapp.com/api?api_key=GOzuS_JhLUVS6S0fd5JwNivJO2U";
const resultsModal = new bootstrap.Modal(
  document.getElementById("resultsModal")
);

document
  .getElementById("status")
  .addEventListener("click", (e) => getStatus(e));

async function getStatus(e) {
  const queryString = `${API_URL}?api_key=${API_KEY}`;

  const response = await fetch(queryString);

  const data = await response.json();

  if (response.ok) {
    console.log(data.expiry);
  }
}
