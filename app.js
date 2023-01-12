// Objetivo
// Vamos a armar una app de tareas que nos permita manipular las mismas utilizando las
// herramientas que hasta el momento hemos aprendido.


// Desafío 1
 
// El tech leader de nuestro equipo de desarrollo propone programar una app de tareas.
// Para esto nos encarga:
// Crear una variable llamado tareas y dentro de ella guardar un array de objetos literales. Cada objeto
//  literal deberá tener las propiedades: titulo y estado. En donde el título podrá ser cualquier cadena de texto, sin embargo el estado sólo podrá tomar los siguientes valores: “terminada”, “en progreso” o “pendiente”.
// Para que tenga una idea de lo que le solicita, aquí le dejamos un ejemplo:
// const tareas = [
// {
// Titulo: “Estudiar html”,
// Estado: “Terminado”
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

console.log(tareas)
                                    
// Desafío 2
// Agregar tarea:
// Para agregar la tarea debemos crear una función que realizara el trabajo, recibira los parametros necesarios
//  para la creacion de la tarea.
// Agregara la tarea al final del array de tareas.
// Al finalizar mostrar nuevamente el array de tareas

function agregarTarea(tareaNueva){
    tareas.push(tareaNueva);
    console.log(tareas)
}

const regarPlantas =
{
    Titulo: "Regar las plantas",
    Estado: "Pendiente"
}

// agregarTarea(regarPlantas)

// Desafio 3
// Listar tareas
// Crear una funcion que mostrara las tareas solo del parametro dado.
// Ejemplo:
// mostrarTareas(“en progreso”) //Debera solo mostrar el array de objetos con tareas en progreso
// Si la palabra ingresada en el parametro no coincide con ninguno de los 3 estados debera mostrar 
// todas las tareas sin importar su estado. EjemploÑ mostrarTareas(“dujshadhasik”)
// Comprobar el correcto funcionamiento con console.log


let tareasFiltradas = [];
function mostrarTareas(condicionTarea){
    for (let i = 0; tareas.length; i++){
        let condicion = condicionTarea.toLowerCase();
        if(tareas[i].Estado.toLowerCase() === condicion){
            tareasFiltradas.push(tareas[i])
            return tareasFiltradas;
        } else {
            return "no hay ninguna tarea con esa condicion"
        }
    }
}

console.log(mostrarTareas("PENDIENTE"))
// console.log(mostrarTareas("terminado"))
