var dropdown = document.getElementById('dropdown');
var dropdownIcon = document.getElementById('drop-icon');
dropdownIcon.addEventListener('click', (event) => {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
    
});

