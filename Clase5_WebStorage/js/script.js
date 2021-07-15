// 1. Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Email
// Mensaje
// Guardar en Local Storage los datos de contacto enviados de cada usuario
// Mostrar los datos de los contactos guardados en el DOM
// Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userMessage = document.querySelector("#message");
let user = {};
const send = document.querySelector("#send");
const deleteAll = document.querySelector("#deleteAll");
const deleteOne = document.querySelector("#deleteOne");
const nameToDelete = document.querySelector("#nameToDelete");

send.addEventListener("click", ()=>{
    user = `{userName:${userName.value},userEmail:${userEmail.value},userMessaje: ${userMessage.value}}`;

    localStorage.setItem(`${userName.value}`, JSON.stringify(user));
});

// 2. Avanzado - Local Storage
// Crea botón para borrar todos los contactos guardados en Local Storage
// Crea botón para borrar un contacto en concreto de Local Storage.

deleteAll.addEventListener("click", () =>{
    localStorage.clear();
});

deleteOne.addEventListener("click", () => {
    localStorage.removeItem(nameToDelete.value);
});