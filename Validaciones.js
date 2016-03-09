
function valida_envia(){

	 expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	 var email=document.Formulario_Casino.Email.value;
    //valido el nombre
    if (document.Formulario_Casino.Nombre.value.length==0){
       alert("Tiene que escribir su nombre")
       document.Formulario_Casino.Nombre.focus()
       return 0;
    }


    if(document.Formulario_Casino.ApPat.value.length==0){
    	alert("Lo Sentimos Require Introducir sus Datos Completos")
    	document.Formulario_Casino.ApPat.focus()
    	return 0;
    }

    if(document.Formulario_Casino.ApMat.value.length==0){

    	alert("Lo Sentimos Require Introducir sus Datos Completos")
    	document.Formulario_Casino.ApMat.focus()
    	return 0;
    }
    if(document.Formulario_Casino.Email.value.length==0){
    	alert("Lo Sentimos Debe Ingresar su Direccion de Correo")
    	document.Formulario_Casino.Email.focus()
        return 0;


    }
    if ( !expr.test(email) ){
        alert("Error: La dirección de correo " + email + " es incorrecta.");
        document.Formulario_Casino.Email.focus()
        return 0;
}

 if(document.Formulario_Casino.Telefono.value.length<8){
    	var numero=document.Formulario_Casino.Telefono.value;
      alert("Lo Sentimos el Numero "+numero+" no es un numero Valido")
      document.Formulario_Casino.Telefono.focus()
      return 0;

    }
    if(document.Formulario_Casino.Telefono.value.length>12){
    	var numero=document.Formulario_Casino.Telefono.value;
      alert("Lo Sentimos el Numero "+numero+" no es un numero Valido")
      document.Formulario_Casino.Telefono.focus()
      return 0;

    }

    document.Formulario_Casino.submit();

   
}