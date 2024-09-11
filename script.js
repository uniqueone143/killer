document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const passwordInput = document.getElementById('passwordInput');
    const showPasswordCheckbox = document.getElementById('box');

    // Function to set the correct password
    function setCorrectPassword(password) {
        localStorage.setItem('correctPassword', password);
    }

    // Function to get the correct password
    function getCorrectPassword() {
        return localStorage.getItem('correctPassword') || '';
    }

    // Set the correct password
    setCorrectPassword('jing');

    // Show or hide password
    showPasswordCheckbox.addEventListener('change', function() {
        passwordInput.type = this.checked ? 'text' : 'password';
    });

    // Form submit event
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const correctPassword = getCorrectPassword();
        const userInput = passwordInput.value.trim();

        if (userInput === "") {
            alert("Pag enter danay saakon nickname!");
            passwordInput.focus();
        } else if (userInput !== correctPassword) {
            alert("Hoy sala! pataka-taka");
            passwordInput.style.border = "2px solid red";
        } else {
            // Correct password entered, redirect to another page
            window.location.href = "cute.html";
        }
    });

    // Keyup event to provide real-time feedback
    passwordInput.addEventListener('keyup', function() {
        this.style.border = this.value.trim() === "" ? "1px solid #ccc" : "1px solid black";
    });
});
