
function valForm(){
    console.log("Acceso Establecido a La Función");
    var vNom = $('#nombre').val();
    var vMail = $('#correo').val();
    var vMensaje =$('#mensaje').val();

   // Validar campo Nombre
   if(vNom=="" || vNom == null)
   {
    Err_color("nombre");
    Err_contenido("campo nombre");
    return false;
   }else{
    var expression= /^[a-zAñÑáéíóúÁÉÍÓÚ]*$/;
    if(!expression.test(vNom)){
        Err_color("nombre");
        Err_contenido(" nombre, No se permiten caracteres especiales.");
        return false;
    }
   }

   //validar campo correo
   if(vMail=="" || vMail == null)
   {
    Err_color("correo");
    Err_contenido("campo correo");
    return false;
   }else{
    var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(!expression.test(vMail)){
        Err_color("correo");
        Err_contenido("correo, Formato no válido");
        return false;
    }
   }    

     // Validar campo Mensaje
     if(vNom=="" || vNom == null)
     {
      Err_color("nombre");
      Err_contenido("campo nombre");
      return false;
     }else{
      var expression= /^[a-zAñÑáéíóúÁÉÍÓÚ]*$/;
      if(!expression.test(vMensaje)){
          Err_color("mensaje");
          Err_contenido(" nombre, No se permiten caracteres especiales.");
          return false;
      }
     }

///enviar formulario
     $('form').submit();
        return true;


     

}



function Err_color(Dato){
    
    $('#'+Dato).css('border','1px solid #dd5144');
}


function Err_contenido(Dato){
    alert("Error en el ingreso del campo " + Dato);
}


function colorDefault(){
    $('#'+Dato).css('border','1px solid #999');

}

$('input').focus(function(){
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('mensaje');

})

