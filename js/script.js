function validaLogin(){
    // Etapa onde os dados seriam pegos e validados, caso não tivesse nada errado
    feedbackUsuario = document.getElementById("forUsuario").value //ID do Usuario
    feedbackSenha = document.getElementById("forSenha").value //ID da Senha
    feedbackConfirmar = document.getElementById("forConfirmar").value //ID do Confirma Senha 
    feedbackTermos = document.getElementById("forCheck").checked //ID do Checkbox de Termos

   
    if(feedbackUsuario!="" && feedbackSenha != "" && feedbackConfirmar!= "" && feedbackTermos==true){ 
        if (feedbackSenha != feedbackConfirmar){
            window.alert("Suas senhas não batem, cadastro cancelado")
        }else{
        //Caso todos estejam preenchidos:
        window.alert("Parabéns por ter feito seu cadastro!")
        }
    }

}

function limpaForm(){
    //Limpando todos
     document.getElementById("forUsuario").value = ""
     document.getElementById("forSenha").value = ""
     document.getElementById("forConfirmar").value = ""
    feedbackTermos = document.getElementById("forCheck").checked = false
}

function fazerLogin(){
    window.alert("Já fez seu login? Esta funcionalidade ainda não foi implementada. Tente novamente mais tarde.")
}