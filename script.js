"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  noCount++;
  changeImage(noCount % 5); // Cập nhật hình ảnh theo số lần từ chối, xoay vòng từ 0 đến 4
  resizeYesButton();
  updateNoButtonText();
});

function handleYesClick() {
  titleElement.innerHTML = "Anh iu iem ,Anh hứa hongg làm em buồn nữa đouuu :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Không Bao Giờ",
    "Anh biết lỗi rồi ạa",
    "Mong em tha lỗi choo anhh :((",
    "Anhh saii rồi , anhh đáng trách ạ",
    "Em đừng giận anhh nữa nhoo",
    "Anhhh iu Nhung Huyền nhắm nhunnn đóoooo",
  ];

  const messageIndex = noCount % messages.length; // Xoay vòng qua các tin nhắn
  return messages[messageIndex];
}

function changeImage(imageIndex) {
  catImg.src = `img/cat-${imageIndex}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
