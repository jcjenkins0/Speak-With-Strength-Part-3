
// Fetch inspirational quote from Quotable API
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      document.getElementById("quote").textContent = data.content + " — " + data.author;
    })
    .catch(error => {
      document.getElementById("quote").textContent = "Unable to load quote.";
    });
});
