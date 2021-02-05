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

    const formInput = document.getElementsByClassName("favorite-input")

    // Lol. Check what kind of object it is.
    inputLi.textContent = formInput.item(0).value;
    inputUl.appendChild(inputLi);
  }

  document.querySelector(".favorite-submit").addEventListener('click', event => {
    event.preventDefault();
    addLi();
  });


  // adding new photos

  // --- your code here!



});
