document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("continue");

    btn.addEventListener("click", function () {
        const email = document.getElementById("email").value;

        if (email === "") {
            alert("Please enter email");
            return;
        }

        localStorage.setItem("userEmail", email);
        window.location.href = "login.html";
    });

});