

var btn = document.getElementsByClassName("button-submit")[0];
btn.addEventListener("click", function(e) {
    var number =document.getElementById('number1').value;
    var uname = em1 = document.getElementById("email").value;
    var psw =  document.getElementById("password1").value;
    var ere = document.getElementById("eror1");
    var erp =  document.getElementById("eror3");
    var NAME =  document.getElementById("name").value;
  
    // Regular expression to check for at least one uppercase letter, one lowercase letter, one digit, and one special character
    var INON = /(?=.*[a-z])(?=.*[A-Z])/;

    // Check if fields are empty
    if (uname.length === 0 || psw.length === 0) {
        e.preventDefault();
        ere.innerHTML = "This section is required";
        erp.innerHTML = "This section is required";
    } else if (psw.length < 6) {
        e.preventDefault();
        erp.innerHTML = "Password should have more than 6 characters";
    } else if (!INON.test(psw)) {
        e.preventDefault();
        erp.innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
    }
    else{
        localStorage.setItem("name", NAME);
        localStorage.setItem("email", uname);
        localStorage.setItem("number", number);
                localStorage.setItem("isLoggedIn", "true");
        window.open("index.html")
    }
});

