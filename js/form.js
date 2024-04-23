document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/xpzvokvy"); // Replace "your_email_here" with your actual email address
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert("Thanks for contacting me. Will reach out to you soon.");
                document.getElementById("contactForm").reset();
            } else {
                alert("An error occurred, please try again later.");
            }
        }
    };
    xhr.send(JSON.stringify(formData));
});
