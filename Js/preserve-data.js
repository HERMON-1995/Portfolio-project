const datas = [];
const form = document.querySelector('.inputs');
form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const data = {
    id: Date.now(),
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  datas.push(data);
  localStorage.setItem('InputDataList', JSON.stringify(datas[0]));
});
const retrievedObject = localStorage.getItem('InputDataList');
const getValue = JSON.parse(retrievedObject);

window.addEventListener('load', () => {
  if (localStorage.getItem('InputDataList')) {
    document.getElementById('name').value = getValue.name;
    document.getElementById('email').value = getValue.email;
    document.getElementById('message').value = getValue.message;
  }
});