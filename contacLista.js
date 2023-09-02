let crearContacto = [
    { id: 1,
     Nombre: "juanse", 
     Apellido: "marimon",
     Telefono: "3008625", 
     Ubicacion: {ciudad: "cartagena", direccion: 11},
    },
    { id: 2,
        Nombre: "sebastian", 
        Apellido: "ramos",
        Telefono: "300679", 
        Ubicacion: {ciudad: "medellin", direccion: 35},
       },
       { id: 3,
        Nombre: "sofia", 
        Apellido: "mestra",
        Telefono: "3133625", 
        Ubicacion: {ciudad: "bogota", direccion: 91},
       },
       { id: 4,
        Nombre: "andrea", 
        Apellido: "rodriguez",
        Telefono: "376288", 
        Ubicacion: {ciudad: "barranquilla", direccion: 56},
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
    Ubicacion: {ciudad: "guajira", direccion: 89},
   };
    
   function actualiContact(idBuscando, nuevosDatos){
    let actualicon = crearContacto.findIndex (contacto => contacto.id === idBuscando);
      if (actualicon !== -1) {
    
        Object.assign(crearContacto[actualicon],  nuevosDatos);
        console.log("contacto editado.");
      }
      else{
        console.log("no realizado");
      }
    }

  
   
   agregarContacto(nuevoContacto),
   imprimirContactos(),
   borrarContacto(5),
  imprimirContactos()
   actualiContact(2, {Apellido: "perez"})
   
          