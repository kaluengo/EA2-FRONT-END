// Cambiar contenido de Etiqueta h1
    // Con JavaScript Puro
    //console.log("Pagina Funcionando")
    //document.getElementById('Titulo').innerHTML = "TITULO DE PAGINA";
   



// Incorporar Libreria JQuery

$(document).ready(function(){
    console.log("Pagina Funcionando");
    $('h1').html("Texto Modificado por su etiqueta");
    $("#Titulo").html("Texto modificado por su id");
    $(".display-3").html("Texo modificado por su clase")
    
    // SELECCIONAR ELEMENTOS HTML
    
    // AGREGAR CLASE  [ jq.classAdd ]
    $('h1').addClass('text-center text-uppercase');
    $('#p2').addClass('text-danger');

    
    // QUITAR CLASE  [ jq.classRemove ]
    $('#Parrafos').removeClass('display-5');


    // AGREGAR ELEMENTO [ jq.Append ]
    $('#Parrafos').append('<p>Cuarto parrafo agregado desde jquery</p>');
    
    // QUITAR ELEMENTO [ jq.Remove ]
    // $('#p3').remove();
   
    // MODIFICAR PROPIEDADES CSS [ jqCssSet ]
    $('#p1').css('color','blue' );
    $('#p3').css({color:"blue", background: "green", padding:"20px" });

    
    // METODO attr()      [ jqAttrSet]
    $('img').attr('scr', 'https://www.google.cl/url?sa=i&url=https%3A%2F%2Fwww.duoc.cl%2F&psig=AOvVaw1Kq5leYqUs6PdNSfGltkbR&ust=1673744724253000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiy5Y_vxfwCFQAAAAAdAAAAABAE');
    
    // EVENTOS CON JQUERY
    //Evento click Agregando clase
    
    //Evento click Agregando estilo en css
    
    //Alternativa al evento click

})
