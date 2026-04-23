document.getElementById("signup").onclick = function () {
    const email = document.querySelector("input[type='email']").value;

    if (email === "") {
        alert("Enter email");
        return;
    }

    // Save email
    localStorage.setItem("userEmail", email);

    // Redirect to login
    window.location.href = "login.html";
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