
function onReady(callback) {
    /** Checks if the webpage has loaded fully before proceeding to run the app **/
    document.readyState === "interactive" || document.readyState === "complete"
      ? callback()
      : document.addEventListener("DOMContentLoaded", callback);
  }
function runApp(){
var signinButton = document.getElementById('sign-in');
var signupButton = document.getElementById('sign-up');


signinButton.addEventListener('click', () => {
  window.location.assign("signin.html");
});

signupButton.addEventListener('click', () => {
window.location.assign("signup.html");
});
}

onReady(runApp);

