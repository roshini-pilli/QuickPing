// Auto-fill email from previous page
window.onload = function () {
    const savedEmail = localStorage.getItem("userEmail");

    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
    }
};

// Login button logic
document.getElementById("loginBtn").onclick = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill all fields");
    } else {
        alert("Login successful (demo)");
    }
};
document.addEventListener("DOMContentLoaded", function () {

    const toggles = document.querySelectorAll(".toggle-password");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function () {

            const input = this.previousElementSibling;

            if (input.type === "password") {
                input.type = "text";
                this.textContent = "🙈";
            } else {
                input.type = "password";
                this.textContent = "👁️";
            }

        });
    });

});