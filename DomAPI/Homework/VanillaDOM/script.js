document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  const addLi = (e) => {
    const inputUl = document.getElementById("sf-places");
    const inputLi = document.createElement("li");

    inputLi.textContent = "Test";
    inputUl.appendChild(inputLi);
  }

  document.querySelector(".favorite-submit").addEventListener('click', event => {
    event.preventDefault();
    addLi();
  });


  // adding new photos

  // --- your code here!



});
