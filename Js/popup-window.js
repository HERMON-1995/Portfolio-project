const body = document.querySelector('body');

const open = document.querySelectorAll('.active-btn');

const projects = [{
  name: 'Keeping track of hundreds of components',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageone: './images/Popupbig-img.svg',
  imageicon: './images/button-icon1.svg',
  imagegithub: './images/button-icon2.svg',
  imagedesktop: './images/pop-desktopimg.svg',
  imagetimes: './images/times-desktop.svg',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  live_version: 'https://hermon-1995.github.io/My-portfolio/',
  source_link: 'https://github.com/HERMON-1995/My-portfolio',
}];

open[0].addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';

  popup.innerHTML = `
<button class="times" type="button"><img class="times-img" src="${projects[0].imagetimes}" alt="times"></button>

  <button class="close" type="button">
  <img class="card-img" src=${projects[0].imageone} alt="technology"><img class="card-img2" src="${projects[0].imagedesktop}" alt="technology">
  </button>

  <div class="view-desktop">
  <button class="btn1" type="button"><a href=${projects[0].live_version} target="_blank">See Live<img src=${projects[0].imageicon} alt="live icon">
  </a></button>
  <button class="btn2" type="button"><a href=${projects[0].source_link} target="_blank">See Source<img src=${projects[0].imagegithub} alt="github icon"></a></button>
   </div>
 <div class="text-container">
  <h2 class="pop-h2">${projects[0].name}</h2>

  <ul class="tools pop-lang disappear-desk">
     <li class="ruby">${projects[0].technologies[0]}</li>
     <li class="css">${projects[0].technologies[1]}</li>
     <li class="javascript">${projects[0].technologies[2]}</li>
  </ul>

 </div>

 <div class="view-desktop">
   <ul class="tools pop-lang">
    <li class="ruby">${projects[0].technologies[0]}</li>
    <li class="css">${projects[0].technologies[1]}</li>
    <li class="javascript">${projects[0].technologies[2]}</li>
    <li class="javascript boot">${projects[0].technologies[3]}</li>
    <li class="javascript ter">${projects[0].technologies[4]}</li>
    <li class="javascript code">${projects[0].technologies[5]}</li>
  </ul>
   </div>

   <p class="pop-par">${projects[0].description}</p>
   <button class="button1" type="button"><a href=${projects[0].live_version} target="_blank">See Live<img src=${projects[0].imageicon} alt="live icon">
   </a></button>
   <button class="button2" type="button"><a href=${projects[0].source_link} target="_blank">See Source<img src=${projects[0].imagegithub} alt="github icon"></a></button>
`;
  main.appendChild(popup);
  body.appendChild(main);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });

  const times = document.querySelector('.times');
  times.addEventListener('click', () => {
    body.removeChild(main);
  });
});

open[1].addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';

  popup.innerHTML = `
<button class="times" type="button"><img class="times-img" src="${projects[0].imagetimes}" alt="times"></button>

  <button class="close" type="button">
  <img class="card-img" src=${projects[0].imageone} alt="technology"><img class="card-img2" src="${projects[0].imagedesktop}" alt="technology">
  </button>

  <div class="view-desktop">
  <button class="btn1" type="button"><a href=${projects[0].live_version} target="_blank">See Live<img src=${projects[0].imageicon} alt="live icon">
  </a></button>
  <button class="btn2" type="button"><a href=${projects[0].source_link} target="_blank">See Source<img src=${projects[0].imagegithub} alt="github icon"></a></button>
   </div>
 <div class="text-container">
  <h2 class="pop-h2">${projects[0].name}</h2>

  <ul class="tools pop-lang disappear-desk">
     <li class="ruby">${projects[0].technologies[0]}</li>
     <li class="css">${projects[0].technologies[1]}</li>
     <li class="javascript">${projects[0].technologies[2]}</li>
  </ul>

 </div>

 <div class="view-desktop">
   <ul class="tools pop-lang">
    <li class="ruby">${projects[0].technologies[0]}</li>
    <li class="css">${projects[0].technologies[1]}</li>
    <li class="javascript">${projects[0].technologies[2]}</li>
    <li class="javascript boot">${projects[0].technologies[3]}</li>
    <li class="javascript ter">${projects[0].technologies[4]}</li>
    <li class="javascript code">${projects[0].technologies[5]}</li>
  </ul>
   </div>

   <p class="pop-par">${projects[0].description}</p>
   <button class="button1" type="button"><a href=${projects[0].live_version} target="_blank">See Live<img src=${projects[0].imageicon} alt="live icon">
   </a></button>
   <button class="button2" type="button"><a href=${projects[0].source_link} target="_blank">See Source<img src=${projects[0].imagegithub} alt="github icon"></a></button>
`;
  main.appendChild(popup);
  body.appendChild(main);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });

  const times = document.querySelector('.times');
  times.addEventListener('click', () => {
    body.removeChild(main);
  });
});

open[2].addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';

  popup.innerHTML = `
<button class="times" type="button"><img class="times-img" src="${projects[0].imagetimes}" alt="times"></button>

  <button class="close" type="button">
  <img class="card-img" src=${projects[0].imageone} alt="technology"><img class="card-img2" src="${projects[0].imagedesktop}" alt="technology">
  </button>

  <div class="view-desktop">
  <button class="btn1" type="button"><a href=${projects[0].live_version} target="_blank">See Live<img src=${projects[0].imageicon} alt="live icon">
  </a></button>
  <button class="btn2" type="button"><a href=${projects[0].source_link} target="_blank">See Source<img src=${projects[0].imagegithub} alt="github icon"></a></button>
   </div>
 <div class="text-container">
  <h2 class="pop-h2">${projects[0].name}</h2>

  <ul class="tools pop-lang disappear-desk">
     <li class="ruby">${projects[0].technologies[0]}</li>
     <li class="css">${projects[0].technologies[1]}</li>
     <li class="javascript">${projects[0].technologies[2]}</li>
  </ul>

 </div>

 <div class="view-desktop">
   <ul class="tools pop-lang">
    <li class="ruby">${projects[0].technologies[0]}</li>
    <li class="css">${projects[0].technologies[1]}</li>
    <li class="javascript">${projects[0].technologies[2]}</li>
    <li class="javascript boot">${projects[0].technologies[3]}</li>
    <li class="javascript ter">${projects[0].technologies[4]}</li>
    <li class="javascript code">${projects[0].technologies[5]}</li>
  </ul>
   </div>

   <p class="pop-par">${projects[0].description}</p>
   <button class="button1" type="button"><a href=${projects[0].live_version} target="_blank">See Live<img src=${projects[0].imageicon} alt="live icon">
   </a></button>
   <button class="button2" type="button"><a href=${projects[0].source_link} target="_blank">See Source<img src=${projects[0].imagegithub} alt="github icon"></a></button>
`;
  main.appendChild(popup);
  body.appendChild(main);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });

  const times = document.querySelector('.times');
  times.addEventListener('click', () => {
    body.removeChild(main);
  });
});

open[3].addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';

  popup.innerHTML = `
<button class="times" type="button"><img class="times-img" src="${projects[0].imagetimes}" alt="times"></button>

  <button class="close" type="button">
  <img class="card-img" src=${projects[0].imageone} alt="technology"><img class="card-img2" src="${projects[0].imagedesktop}" alt="technology">
  </button>

  <div class="view-desktop">
  <button class="btn1" type="button"><a href=${projects[0].live_version} target="_blank">See Live<img src=${projects[0].imageicon} alt="live icon">
  </a></button>
  <button class="btn2" type="button"><a href=${projects[0].source_link} target="_blank">See Source<img src=${projects[0].imagegithub} alt="github icon"></a></button>
   </div>
 <div class="text-container">
  <h2 class="pop-h2">${projects[0].name}</h2>

  <ul class="tools pop-lang disappear-desk">
     <li class="ruby">${projects[0].technologies[0]}</li>
     <li class="css">${projects[0].technologies[1]}</li>
     <li class="javascript">${projects[0].technologies[2]}</li>
  </ul>

 </div>

 <div class="view-desktop">
   <ul class="tools pop-lang">
    <li class="ruby">${projects[0].technologies[0]}</li>
    <li class="css">${projects[0].technologies[1]}</li>
    <li class="javascript">${projects[0].technologies[2]}</li>
    <li class="javascript boot">${projects[0].technologies[3]}</li>
    <li class="javascript ter">${projects[0].technologies[4]}</li>
    <li class="javascript code">${projects[0].technologies[5]}</li>
  </ul>
   </div>

   <p class="pop-par">${projects[0].description}</p>
   <button class="button1" type="button"><a href=${projects[0].live_version} target="_blank">See Live<img src=${projects[0].imageicon} alt="live icon">
   </a></button>
   <button class="button2" type="button"><a href=${projects[0].source_link} target="_blank">See Source<img src=${projects[0].imagegithub} alt="github icon"></a></button>
`;
  main.appendChild(popup);
  body.appendChild(main);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });

  const times = document.querySelector('.times');
  times.addEventListener('click', () => {
    body.removeChild(main);
  });
});

open[4].addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';

  popup.innerHTML = `
<button class="times" type="button"><img class="times-img" src="${projects[0].imagetimes}" alt="times"></button>

  <button class="close" type="button">
  <img class="card-img" src=${projects[0].imageone} alt="technology"><img class="card-img2" src="${projects[0].imagedesktop}" alt="technology">
  </button>

  <div class="view-desktop">
  <button class="btn1" type="button"><a href=${projects[0].live_version} target="_blank">See Live<img src=${projects[0].imageicon} alt="live icon">
  </a></button>
  <button class="btn2" type="button"><a href=${projects[0].source_link} target="_blank">See Source<img src=${projects[0].imagegithub} alt="github icon"></a></button>
   </div>
 <div class="text-container">
  <h2 class="pop-h2">${projects[0].name}</h2>

  <ul class="tools pop-lang disappear-desk">
     <li class="ruby">${projects[0].technologies[0]}</li>
     <li class="css">${projects[0].technologies[1]}</li>
     <li class="javascript">${projects[0].technologies[2]}</li>
  </ul>

 </div>

 <div class="view-desktop">
   <ul class="tools pop-lang">
    <li class="ruby">${projects[0].technologies[0]}</li>
    <li class="css">${projects[0].technologies[1]}</li>
    <li class="javascript">${projects[0].technologies[2]}</li>
    <li class="javascript boot">${projects[0].technologies[3]}</li>
    <li class="javascript ter">${projects[0].technologies[4]}</li>
    <li class="javascript code">${projects[0].technologies[5]}</li>
  </ul>
   </div>

   <p class="pop-par">${projects[0].description}</p>
   <button class="button1" type="button"><a href=${projects[0].live_version} target="_blank">See Live<img src=${projects[0].imageicon} alt="live icon">
   </a></button>
   <button class="button2" type="button"><a href=${projects[0].source_link} target="_blank">See Source<img src=${projects[0].imagegithub} alt="github icon"></a></button>
`;
  main.appendChild(popup);
  body.appendChild(main);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });

  const times = document.querySelector('.times');
  times.addEventListener('click', () => {
    body.removeChild(main);
  });
});

open[5].addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';

  popup.innerHTML = `
<button class="times" type="button"><img class="times-img" src="${projects[0].imagetimes}" alt="times"></button>

  <button class="close" type="button">
  <img class="card-img" src=${projects[0].imageone} alt="technology"><img class="card-img2" src="${projects[0].imagedesktop}" alt="technology">
  </button>

  <div class="view-desktop">
  <button class="btn1" type="button"><a href=${projects[0].live_version} target="_blank">See Live<img src=${projects[0].imageicon} alt="live icon">
  </a></button>
  <button class="btn2" type="button"><a href=${projects[0].source_link} target="_blank">See Source<img src=${projects[0].imagegithub} alt="github icon"></a></button>
   </div>
 <div class="text-container">
  <h2 class="pop-h2">${projects[0].name}</h2>

  <ul class="tools pop-lang disappear-desk">
     <li class="ruby">${projects[0].technologies[0]}</li>
     <li class="css">${projects[0].technologies[1]}</li>
     <li class="javascript">${projects[0].technologies[2]}</li>
  </ul>

 </div>

 <div class="view-desktop">
   <ul class="tools pop-lang">
    <li class="ruby">${projects[0].technologies[0]}</li>
    <li class="css">${projects[0].technologies[1]}</li>
    <li class="javascript">${projects[0].technologies[2]}</li>
    <li class="javascript boot">${projects[0].technologies[3]}</li>
    <li class="javascript ter">${projects[0].technologies[4]}</li>
    <li class="javascript code">${projects[0].technologies[5]}</li>
  </ul>
   </div>

   <p class="pop-par">${projects[0].description}</p>
   <button class="button1" type="button"><a href=${projects[0].live_version} target="_blank">See Live<img src=${projects[0].imageicon} alt="live icon">
   </a></button>
   <button class="button2" type="button"><a href=${projects[0].source_link} target="_blank">See Source<img src=${projects[0].imagegithub} alt="github icon"></a></button>
`;
  main.appendChild(popup);
  body.appendChild(main);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });

  const times = document.querySelector('.times');
  times.addEventListener('click', () => {
    body.removeChild(main);
  });
});