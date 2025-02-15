document.getElementById("login")
.addEventListener("submit", function(event){
    event.preventDefault()
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value


 let user = "goiaba"
 let senhaparacesso = "goiaba123"

 if (senha == senhaparacesso && user == login) 
    alert('Login correto')
 }
)}