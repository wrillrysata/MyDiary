
var signinModal = document.getElementById('signin');
var signinButton = document.getElementById('sign-in');
var signupButton = document.getElementById('sign-up');
var span = document.getElementsByClassName("close")[0];  /**  Get the <span> element that closes the modal  */

signinButton.addEventListener('click', function(){
    signinModal.style.display = 'block';
});
span.onclick = function() {
    signinModal.style.display = 'none';
}
signupButton.addEventListener('click', function(){
window.location.assign("signup.html");
});
 

