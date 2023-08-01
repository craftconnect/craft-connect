const openPopupButton1 = document.getElementById('openPopupButton1');
const openPopupButton2 = document.getElementById('openPopupButton2');
const openPopupButton3 = document.getElementById('openPopupButton3');
const openPopupButton4 = document.getElementById('openPopupButton4');
const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');
const popup4 = document.getElementById('popup4');

function openPopup1() {
  popup1.style.display = 'block';
}

function closePopup1() {
  popup1.style.display = 'none';
}

function openPopup2() {
  popup2.style.display = 'block';
}

function closePopup2() {
  popup2.style.display = 'none';
}

function openPopup3() {
  popup3.style.display = 'block';
}

function closePopup3() {
  popup3.style.display = 'none';
}

function openPopup4() {
  popup4.style.display = 'block';
}

function closePopup4() {
  popup4.style.display = 'none';
}

openPopupButton1.addEventListener('click', openPopup1);
openPopupButton2.addEventListener('click', openPopup2);
openPopupButton3.addEventListener('click', openPopup3);
openPopupButton4.addEventListener('click', openPopup4);