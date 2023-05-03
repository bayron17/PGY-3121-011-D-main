$(function(){
    $("#miFormulario").validate({
        rules:{
            rut:{
                required: true
            },
            nombre:{
                required: true,
            },
            direccion:{
                required: true,
            },
            comuna:{
                required: true,
            },
            correo:{
                required: true
            },
            numero:{
                required: true
            }
        },
        messages:{
            rut:{
                required: "Debe ingresar su rut."
            },
            nombre:{
                required: "Debe ingresar su nombre."
            },
            direccion:{
                required: "Debe ingresar su direccion"
            },
            comuna:{
                required: "Debe ingresar su comuna"
            },
            correo:{
                required: "Debe ingresar su correo"
            },
            numero:{
                required: "Debe ingresar su numero"
            }
        }
        
    })
})