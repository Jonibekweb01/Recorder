let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elButton = document.querySelector(".js-btn");
let elList = document.querySelector(".js-list");
let icon1 = document.querySelector(".recording");

let allDelete = document.createElement("button");
allDelete.classList.add("all-delete")
allDelete.textContent = "Удалить всё";
allDelete.type = "button";
elForm.appendChild(allDelete);

var record = new webkitSpeechRecognition();
record.lang = "uz-Uz";


elForm.addEventListener("submit", function (evt) {
  evt.preventDefault()

  let inputVal = elInput.value;

  let item = document.createElement('li');
  elList.appendChild(item);
  item.classList.add("item")
  item.style.display = "flex";
  item.style.alignItems = "center";
  let delate = document.createElement('button');
  delate.textContent = "X";
  delate.classList.add("delete");
  item.appendChild(delate)
  let h3 = document.createElement("h3");
  h3.textContent = inputVal;
  h3.style.margin = "0px";
  h3.style.color = "white";
  item.appendChild(h3)
  elInput.value = "";

  delate.addEventListener("click", function () {
    elList.removeChild(item);
  });

  allDelete.addEventListener('click', function () {
    elList.removeChild(item)
  })

});



elButton.addEventListener("click", function (e) {
  record.start();
  elButton.textContent = "Записывает..";
});

record.onend = function () {
  elButton.textContent = "Запись";
  let icon = document.createElement("i");
  icon.classList.add("recording");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-microphone");
  icon.style.margin = "0 0 0 10px";
  elButton.appendChild(icon);
}

record.onresult = function (evt) {
  elInput.value = evt.results[0][0].transcript;
}
