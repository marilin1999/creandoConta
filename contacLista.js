let crearContacto = [
    { id: 1,
     Nombre: "juanse", 
     Apellido: "marimon",
     Telefono: "3008625", 
     Ubicacion: {ciudad: "cartagena", direccion: 11},
    },
    { id: 2,
        Nombre: "sebastian", 
        Apellido: "jimenez",
        Telefono: "300679", 
        Ubicacion: {ciudad: "cartagena", direccion: 35},
       },
       { id: 3,
        Nombre: "magalis", 
        Apellido: "mestra",
        Telefono: "3133625", 
        Ubicacion: {ciudad: "cartagena", direccion: 91},
       },
       { id: 4,
        Nombre: "andrea", 
        Apellido: "rodriguez",
        Telefono: "376289", 
        Ubicacion: {ciudad: "cartagena", direccion: 56},
       },
];


function agregarContacto(nuevoContacto){
    crearContacto.push(nuevoContacto)
   
   }
  function borrarContacto(contactoABorrar){
     let nuevaLista = crearContacto.filter((contacto) => contacto.id !== contactoABorrar)
     crearContacto = nuevaLista
   }
   function imprimirContactos(){
       console.log(crearContacto)
   }
    
  let nuevoContacto = { id: 5,
    Nombre: "sandra", 
    Apellido: "perez",
    Telefono: "376856", 
    Ubicacion: {ciudad: "medellin", direccion: 89},
   };
    
   
   agregarContacto(nuevoContacto),
   imprimirContactos(),
   borrarContacto(5),
  imprimirContactos()

      
         