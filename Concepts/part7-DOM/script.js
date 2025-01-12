//example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let para = document.getElementById("myParagraph");
    para.textContent = "Paragraph is changed";
  });

//example 2
document
  .getElementById("highLightFirstCity")
  .addEventListener("click", function () {
    let cityList = document.getElementById("citiesList");
    // console.log(cityList);
    // console.log(cityList.firstChild);

    // console.log(cityList.firstElementChild.classList);

    cityList.firstElementChild.classList.add("highlight");
    cityList.lastElementChild.classList.remove("highlight");
  });

//example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "4px";
});

//example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement('li');
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").append(newItem)
});

//example 5
document.getElementById('removeLastTask').addEventListener('click', function () {
  let taskList = document.getElementById('taskList');
  taskList.lastElementChild.remove()
})

//example 6
document
  .getElementById('clickButton')
  .addEventListener('focus', function () {
    // console.log("clicked");

  })

//example 7
document
  .getElementById('teaList')
  .addEventListener('click', function (event) {
    if (event.target && event.target.matches('.teaItem')) {
      alert("U selected " + event.target.textContent)
    }
  })

//example 8
document
  .getElementById('feedbackForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    let feedback = document.getElementById('feedbackInput').value;
    // console.log(feedback);
    document.getElementById('feedbackDisplay').textContent = `Feedbaack is: ${feedback}`
  })

//example 9

document.getElementById('domStatus').addEventListener('click', function (event) {
  event.target.textContent = "DOM loaded"
})

//example 10
document
  .getElementById('toggleHighlight')
  .addEventListener('click', function () {
    let descriptionText = document.getElementById('descriptionText');
    // descriptionText.style.backgroundColor = 'red'
    // descriptionText.classList.add('highlight');
    descriptionText.classList.toggle('highlight');
  })