
document.getElementById("loginButton").addEventListener("click", function(){
    const username = document.getElementById("user").value.trim();
    const password = document.getElementById("password").value.trim();

    const validUser = "osita";
    const validUser2 = "osito";
    const validPassword  = "17/11/2023";

    if(username === "" || password ==""){
        return;
    }
    
    if((username === validUser || username === validUser2) && password === validPassword){
        event.preventDefault();
        window.location.href = "home.html";
        
    }else{
        alert("Usuario o contraseña incorrectos como puedes fallar bb?");

    }
})