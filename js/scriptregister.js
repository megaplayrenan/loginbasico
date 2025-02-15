























































document.getElementById("registro").addEventListener('submit', function(){
    event.preventDefault();
    var nome = document.getElementById("nome").value 
    var Usuario = document.getElementById("Usuario").value 
    var senha = document.getElementById("senha").value 
    var confirmarsenha = 
    document.getElementById("confirmarsenha").value;

    if(senha !== confirmarsenha){
        alert("senhas divergentes")
        return;
    }
    
    const user = {
        nome: nome,
        Usuario: Usuario,
        senha: senha,

    };
    

    
}

