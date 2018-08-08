
function redirect(){
    const signinButton = document.getElementById('sign-in');
const signupButton = document.getElementById('sign-up');
signinButton.addEventListener('click', () => {
  window.location.assign("signin.html");
});

signupButton.addEventListener('click', () => {
window.location.assign("signup.html");
});

  }
function update(){
const textArea = document.getElementById('textarea');
textArea.disabled=true;
const editIcon = document.getElementById('icon-new-message');
editIcon.addEventListener('click', () => {
textArea.disabled = false;

})
}

