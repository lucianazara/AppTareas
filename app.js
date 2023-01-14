// Objetivo
// Vamos a armar una app de tareas que nos permita manipular las mismas utilizando las
// herramientas que hasta el momento hemos aprendido.


// Desafío 1
 
// El tech leader de nuestro equipo de desarrollo propone programar una app de tareas.
// Para esto nos encarga:
// Crear una variable llamado tareas y dentro de ella guardar un array de objetos literales. Cada objeto
//  literal deberá tener las propiedades: titulo y estado. En donde el título podrá ser cualquier cadena de texto, 
// sin embargo el estado sólo podrá tomar los siguientes valores: “terminada”, “en progreso” o “pendiente”.
// Para que tenga una idea de lo que le solicita, aquí le dejamos un ejemplo:
// const tareas = [
// {
// Titulo: “Estudiar html”,
// Estado: “Terminada”
// },
// {
// Titulo: “Estudiar css”,
// Estado: “En progreso”
// },
// {
// Titulo: “Estudiar js”,
// Estado: “Pendiente”
// },
// {
// Titulo: “Practicar js”,
// Estado: “En progreso”
// },

// ] 


// 1. Generar un archivo app.js que tenga el array de tareas.
// 2. Mostrar el listado de tareas existente por la terminal.

const tareas = [
    {
        Titulo: "Estudiar programacion",
        Estado: "En progreso"
    },

    {
        Titulo: "Limpiar los pisos",
        Estado: "Pendiente"
    },

    {
        Titulo: "Hacer las compras",
        Estado: "Terminado"
    
    },
    {
        Titulo: "Lavar la ropa",
        Estado: "En progreso"
    },

  
]

console.log("Desafío 1")
console.log(tareas)
                                    
// Desafío 2
// Agregar tarea:
// Para agregar la tarea debemos crear una función que realizara el trabajo, recibira los parametros necesarios
//  para la creacion de la tarea.
// Agregara la tarea al final del array de tareas.
// Al finalizar mostrar nuevamente el array de tareas


function agregarTarea(titulo, estado){
    tareas.push({Titulo: titulo, Estado: estado});
    console.log("Ha agregado una tarea exitosamente")
    return tareas;
}


console.log("Desafío 2")
console.log(agregarTarea("Regar plantas", "Pendiente"));

// Desafio 3
// Listar tareas
// Crear una funcion que mostrara las tareas solo del parametro dado.
// Ejemplo:
// mostrarTareas(“en progreso”) //Debera solo mostrar el array de objetos con tareas en progreso
// Si la palabra ingresada en el parametro no coincide con ninguno de los 3 estados debera mostrar 
// todas las tareas sin importar su estado. Ejemplo mostrarTareas(“dujshadhasik”)
// Comprobar el correcto funcionamiento con console.log


function mostrarTareas(estado){
    let tareasFiltradas = [];
    for (let tarea of tareas){
        if(tarea.Estado.toLowerCase() === estado.toLowerCase()){
            tareasFiltradas.push(tarea); 
            return tareasFiltradas;
        } 

    }  return tareas;
      
}

console.log("Desafío 3")
console.log(mostrarTareas("Terminado"))
console.log(mostrarTareas("EN progrESO"))

// Desafio 4
// Agregar Verificacion
// Modificar la funcion del desafio 2, ya que si el titulo de la tarea que se desea ingresar ya existe en el array,
//  debera devolvernos un mensaje de error, avisandonos que ya existe esa tarea.
// En el caso de no existir, agregarlo normalmente


function agregarTarea2 (titulo, estado){
    for(let tarea of tareas){
        if(tarea.Titulo.toLowerCase() === titulo.toLowerCase() ){
            return "Esa tarea ya existe"
        } 
        } 
        tareas.push({Titulo: titulo, Estado: estado})
         return tareas
    }

console.log("Desafío 4")
console.log(agregarTarea2("Estudiar CSS", "Pendiente"))
console.log(agregarTarea2("Estudiar programacion", "En progreso"))


// Desafio 5
// Existe tarea?

// Crear una funcion que devolvera las tareas en donde el titulo coincida con el parametro dado. 
// Ejemplo: existeTarea(“js”) // Devera devolver el array con los objetos que coincidan con el string sin importar su estado

let tareasCoincidentes = []
function existeTarea(titulo){
    for(let tarea of tareas){
        if(tarea.Titulo.toLowerCase() === titulo.toLowerCase()){
            tareasCoincidentes.push(tarea)
            return tareasCoincidentes
        } else {
            return "No coincide con ninguna tarea"
        }
    }
}

console.log("Desafío 5")
console.log(existeTarea("Estudiar programacion"))
console.log(existeTarea("Meditar"))


// Extra:
// •	Agregar un mensaje de éxito en el console.log al agregar una tarea en el desafio 2
// •	Mejorar la aplicación para casos sensitivos, por ejemplo, si en el desafio 3 se ingresa (“en progreso”), en vez de (“En progreso”), la aplicación igualmente funcione correctamente
// •	Mejorar otros desafios con casos sensitivos como el anterior
// •	Crear una funcion que devolvera todas las tareas ordenadas según su estado. Primero apareceran las que estan pendientes, luego en progreso y al final las terminadas


//Nota: primero aparecen "En progreso", luego "Pendiente", por ultimo "Terminado"
function ordenarTareas(tarea1, tarea2){
if(tarea1.Estado.toLowerCase() < tarea2.Estado.toLowerCase()){
    return -1;
}
if (tarea1.Estado.toLowerCase() >  tarea2.Estado.toLowerCase()){
    return 1;
}
return 0;
}

console.log("Extras")
console.log(tareas.sort(ordenarTareas))
