const formbutton = document.getElementById('btnid');

function validate() {
  const emailText = document.getElementById('email').value;
  const validator = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  document.forms[0].onsubmit = function email(e) {
    if (!(validator.test(emailText))) {
      document.getElementById('error-message').innerHTML = 'Please use lowercase letters only for a valid email address!';
      document.getElementById('error-message').style.visibility = 'visible';
      document.getElementById('error-message').style.color = 'red';
      document.getElementById('error-message').style.background = 'white';
      document.getElementById('error-message').style.textAlign = 'center';
      e.preventDefault();
    }
  };
}
formbutton.addEventListener('click', () => {
  validate();
});