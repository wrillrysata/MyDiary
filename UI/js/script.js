var signupModal = document.getElementById('signup-modal');
var signupButton = document.getElementById('sign-up');

var signinModal = document.getElementById('signin-modal');
var signinButton = document.getElementById('sign-in');

var span1 = document.getElementsByClassName("close-signup"); /**  Get the <span> element that closes the modal  */
var span2 = document.getElementsByClassName("close-signin");

signupButton.addEventListener('click',function(){
    signupModal.style.display='block';
});

signinButton.addEventListener('click', function(){
    signinModal.style.display = 'block';
});

span1.onclick = function() {
    signupModal.style.display = 'none';
}
span2.onclick = function() {
    signinModal.style.display = 'none';
}

