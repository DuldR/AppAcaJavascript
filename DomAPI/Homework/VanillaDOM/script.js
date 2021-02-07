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

    formInput.item(0).value = '';
    
  }

  document.querySelector(".favorite-submit").addEventListener('click', event => {
    event.preventDefault();
    addLi();
  });


  // adding new photos

  // --- your code here!

  const toggleForm = (e) => {
    const inputButton = document.querySelector('.photo-form-container');
    inputButton.classList.toggle('hidden');

  }

  document.querySelector(".photo-show-button").addEventListener('click', event => {
    event.preventDefault();
    toggleForm();
  })

  const addPic = (e) => {

    // Element Selectors
    const inputSrcVal = document.querySelector('.photo-url-input').value;
    const inputUl = document.querySelector('.dog-photos');

    // Creating Elements;
    const inputLi = document.createElement('li');
    const inputImg = document.createElement('img');

    inputImg.src = inputSrcVal;
    inputLi.appendChild(inputImg);

    inputUl.appendChild(inputLi);


  }

  document.querySelector('.photo-url-submit').addEventListener('click', event => {
    event.preventDefault();
    addPic();
  })



});
