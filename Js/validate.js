const formbutton= document.getElementById('btnid');

function validate() {
    const text = document.getElementById('email').value;
    const validator = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    document.forms[0].onsubmit = function email(e) {
      if (!(validator.test(text))) {
        document.getElementById('error-message').innerHTML = 'Please use lowercase to enter valid email address!';
        document.getElementById('error-message').style.visibility = 'visible';
        document.getElementById('error-message').style.color = 'white';
        document.getElementById('error-message').style.background = 'red';
        document.getElementById('error-message').style.textAlign = 'center';
        e.preventDefault();
      }
    };
  }
  formbutton.addEventListener('click', () => {
    validate();
  });







{/*#error-message {
    position: relative;
    top: -123px;
    border-radius: 8px;
    font-size: 15px;
  }*/}