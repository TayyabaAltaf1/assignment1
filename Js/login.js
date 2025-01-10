// Login validation function
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (!username) {
        message.textContent = "Login failed: Username cannot be empty.";
        message.className = "error";
        console.log(error);
        return;
        ;
       
    }

    if (password.length < 8) {
        // message.textContent = "Login failed: Password must be at least 8 characters long.";
        message.className = "error";
        console.log("error");
        return;
       
    }

//    message.textContent = "Login successful!";
   message.className = "login successful";
     console.log("login successful");
}

