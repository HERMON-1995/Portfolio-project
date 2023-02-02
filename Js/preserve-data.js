const datas = [];

const addData = (ev) => {
  ev.preventDefault();
  const data = {
    id: Date.now(),
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  datas.push(data);
  document.forms[0].reset();

  console.warn('Adjected', { datas });

  localStorage.setItem('InputDataList', JSON.stringify(datas));
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnid').addEventListener('click', addData);
});
