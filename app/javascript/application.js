// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"


//menu dropdown
function openMenu(){
  const menuIcon = document.getElementById('menuIcon');
  const menuBox = document.getElementById('menuBox');
  menuIcon.classList.toggle('active');
  menuBox.classList.toggle('active');
}
function closeMenu(){
  const menuIcon = document.getElementById('menuIcon');
  const menuBox = document.getElementById('menuBox');
  menuIcon.classList.remove('active');
  menuBox.classList.remove('active');
}
const menuIcon = document.getElementById('menuIcon');
const closeMenuIcon = document.querySelector('.closemenu');
const menuBox = document.getElementById('menuBox');

menuIcon.addEventListener('click',openMenu);
closeMenuIcon.addEventListener('click', closeMenu );
menuBox.addEventListener('click', closeMenu );


//to change language
const ptIcon = document.getElementById('pt');
const enIcon = document.getElementById('en');
const enElements = document.querySelectorAll('.english');
const ptElements = document.querySelectorAll('.portuguese');

function changeLanguage (){
  enElements.forEach (element => {
    element.classList.toggle('hidden');
  });
  ptElements.forEach(element => {
    element.classList.toggle('hidden');
  });
}

ptIcon.addEventListener('click', changeLanguage);
enIcon.addEventListener('click', changeLanguage);
