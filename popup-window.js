const body = document.querySelector('body');
/*const section = document.createElement('section');
body.appendChild(section); 
section.innerHTML = `
   <img  class="card-img" src="./images/Popupbig-img.svg" alt="technology">
   <h2>Keeping track of hundreds of components</h2>
   <ul class="pop-lang">
    <li>Ruby on rails</li>
    <li>css</li>
    <li>JavaScript</li>
   </ul>
   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
   <button class="button1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
   </button>
   <button class="button2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
`;*/

const open = document.querySelectorAll('.active-btn');
open[0].addEventListener('click', ()=> {
const main = document.createElement('div');
main.className = 'main';
const popup = document.createElement('div');
popup.className = 'popup';

popup.innerHTML = `
  <button class="close" type="button"><img class="card-img" src="./images/Popupbig-img.svg" alt="technology"></button>

   <h2 class="pop-h2">Keeping track of hundreds of components</h2>
   <ul class="tools pop-lang">
      <li class="ruby">Ruby on rails</li>
      <li class="css">css</li>
      <li class="javascript">JavaScript</li>
   </ul>
   <p class="pop-par">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
   <button class="button1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
   </button>
   <button class="button2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
`;
main.appendChild(popup);
body.appendChild(main);

const close = document.querySelector('.close')
   close.addEventListener('click', ()=> {
   body.removeChild(main);
   })
})










  {/*
  
<img class="card-img" src="./images/Popupbig-img.svg" alt="technology">

  <img  class="card-img" src="./image/Popupbig-img.svg" alt="technology">
  <h2>Keeping track of hundreds of components</h2>
  <ul class="pop-lang">
    <li>Ruby on rails</li>
    <li>css</li>
    <li>JavaScript</li>
  </ul>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
  <button class="button1" type="button">See Live<img src="./image/btn1.svg" alt="live icon">
  </button>
<button class="button2" type="button">See Source<img src="./image/btn2.svg" alt="github icon"></button>*/}