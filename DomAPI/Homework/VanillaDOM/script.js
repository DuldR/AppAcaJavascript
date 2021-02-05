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
    const li = e.target;
    alert("Clicked");
  }

  document.querySelector(".favorite-submit").addEventListener('click', addLi);


  // adding new photos

  // --- your code here!



});
