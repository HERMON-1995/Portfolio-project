let datas = [];

const addData = (ev)=> {
    ev.preventDefault();
    let data = {
        id: Date.now(),
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    datas.push(data);
    document.forms[0].reset();

    console.warn('Adjected', {datas});
    let pre = document.getElementById('pre-msg');
    pre.textContent = '\n' + JSON.stringify(datas, '\t', 3);

      localStorage.setItem('InputDataList', JSON.stringify(datas));

}

    document.addEventListener('DOMContentLoaded', ()=> {
       document.getElementById('btnid').addEventListener('click', addData); 
    })