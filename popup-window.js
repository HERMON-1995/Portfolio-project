const body = document.querySelector('body');

const open = document.querySelectorAll('.active-btn');

open[0].addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';

  popup.innerHTML = `
<button class="times" type="button"><img class="times-img" src="./images/times-desktop.svg" alt="times"></button>
  <button class="close" type="button">
  <img class="card-img" src="./images/Popupbig-img.svg" alt="technology"><img class="card-img2" src="./images/pop-desktopimg.svg" alt="technology">
  </button>

  <div class="view-desktop">
   <button class="btn1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
   </button>
   <button class="btn2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
   </div>
 <div class="text-container">
  <h2 class="pop-h2">Keeping track of hundreds of components</h2>
  <ul class="tools pop-lang">
     <li class="ruby">Ruby on rails</li>
     <li class="css">css</li>
     <li class="javascript">JavaScript</li>
    <li class="javascript boot">Bootstrap</li>
    <li class="javascript ter">Terminal</li>
    <li class="javascript code">Codepen</li>
  </ul>
 </div>
   <p class="pop-par">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
   <button class="button1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
   </button>
   <button class="button2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
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
    <button class="times" type="button"><img class="times-img" src="./images/times-desktop.svg" alt="times"></button>
      <button class="close" type="button">
      <img class="card-img" src="./images/Popupbig-img.svg" alt="technology"><img class="card-img2" src="./images/pop-desktopimg.svg" alt="technology">
      </button>
    
      <div class="view-desktop">
       <button class="btn1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
       </button>
       <button class="btn2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
       </div>
     <div class="text-container">
      <h2 class="pop-h2">Keeping track of hundreds of components</h2>
      <ul class="tools pop-lang">
         <li class="ruby">Ruby on rails</li>
         <li class="css">css</li>
         <li class="javascript">JavaScript</li>
        <li class="javascript boot">Bootstrap</li>
        <li class="javascript ter">Terminal</li>
        <li class="javascript code">Codepen</li>
      </ul>
     </div>
       <p class="pop-par">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
       <button class="button1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
       </button>
       <button class="button2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
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
        <button class="times" type="button"><img class="times-img" src="./images/times-desktop.svg" alt="times"></button>
          <button class="close" type="button">
          <img class="card-img" src="./images/Popupbig-img.svg" alt="technology"><img class="card-img2" src="./images/pop-desktopimg.svg" alt="technology">
          </button>
        
          <div class="view-desktop">
           <button class="btn1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
           </button>
           <button class="btn2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
           </div>
         <div class="text-container">
          <h2 class="pop-h2">Keeping track of hundreds of components</h2>
          <ul class="tools pop-lang">
             <li class="ruby">Ruby on rails</li>
             <li class="css">css</li>
             <li class="javascript">JavaScript</li>
            <li class="javascript boot">Bootstrap</li>
            <li class="javascript ter">Terminal</li>
            <li class="javascript code">Codepen</li>
          </ul>
         </div>
           <p class="pop-par">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
           <button class="button1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
           </button>
           <button class="button2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
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
            <button class="times" type="button"><img class="times-img" src="./images/times-desktop.svg" alt="times"></button>
              <button class="close" type="button">
              <img class="card-img" src="./images/Popupbig-img.svg" alt="technology"><img class="card-img2" src="./images/pop-desktopimg.svg" alt="technology">
              </button>
            
              <div class="view-desktop">
               <button class="btn1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
               </button>
               <button class="btn2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
               </div>
             <div class="text-container">
              <h2 class="pop-h2">Keeping track of hundreds of components</h2>
              <ul class="tools pop-lang">
                 <li class="ruby">Ruby on rails</li>
                 <li class="css">css</li>
                 <li class="javascript">JavaScript</li>
                <li class="javascript boot">Bootstrap</li>
                <li class="javascript ter">Terminal</li>
                <li class="javascript code">Codepen</li>
              </ul>
             </div>
               <p class="pop-par">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
               <button class="button1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
               </button>
               <button class="button2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
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
                <button class="times" type="button"><img class="times-img" src="./images/times-desktop.svg" alt="times"></button>
                  <button class="close" type="button">
                  <img class="card-img" src="./images/Popupbig-img.svg" alt="technology"><img class="card-img2" src="./images/pop-desktopimg.svg" alt="technology">
                  </button>
                
                  <div class="view-desktop">
                   <button class="btn1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
                   </button>
                   <button class="btn2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
                   </div>
                 <div class="text-container">
                  <h2 class="pop-h2">Keeping track of hundreds of components</h2>
                  <ul class="tools pop-lang">
                     <li class="ruby">Ruby on rails</li>
                     <li class="css">css</li>
                     <li class="javascript">JavaScript</li>
                    <li class="javascript boot">Bootstrap</li>
                    <li class="javascript ter">Terminal</li>
                    <li class="javascript code">Codepen</li>
                  </ul>
                 </div>
                   <p class="pop-par">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
                   <button class="button1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
                   </button>
                   <button class="button2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
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
                    <button class="times" type="button"><img class="times-img" src="./images/times-desktop.svg" alt="times"></button>
                      <button class="close" type="button">
                      <img class="card-img" src="./images/Popupbig-img.svg" alt="technology"><img class="card-img2" src="./images/pop-desktopimg.svg" alt="technology">
                      </button>
                    
                      <div class="view-desktop">
                       <button class="btn1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
                       </button>
                       <button class="btn2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
                       </div>
                     <div class="text-container">
                      <h2 class="pop-h2">Keeping track of hundreds of components</h2>
                      <ul class="tools pop-lang">
                         <li class="ruby">Ruby on rails</li>
                         <li class="css">css</li>
                         <li class="javascript">JavaScript</li>
                        <li class="javascript boot">Bootstrap</li>
                        <li class="javascript ter">Terminal</li>
                        <li class="javascript code">Codepen</li>
                      </ul>
                     </div>
                       <p class="pop-par">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
                       <button class="button1" type="button">See Live<img src="./images/button-icon1.svg" alt="live icon">
                       </button>
                       <button class="button2" type="button">See Source<img src="./images/button-icon2.svg" alt="github icon"></button>
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
