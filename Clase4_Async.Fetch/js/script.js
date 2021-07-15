//  1. Quiero un perrito, pero no se qué raza escoger, ¿me ayudas?
// En este ejercicio utilizaremos la API de https://dog.ceo/dog-api/. Leyendo su documentación, deberás hacer lo siguiente:
// Imprimir por consola la lista de razas de todos los perros.
const alldogs = fetch ('https://dog.ceo/api/breeds/list/all')
                    .then(result => result.json())
                    .then(data => console.log(data.message));
                    
// Imprimir por consola una imagen random de una raza.
const oneRandomDog = fetch('https://dog.ceo/api/breeds/image/random')
                    .then(result => result.json())
                    .then(data => console.log(data.message));
                    
// Imprimir por consola todas las imágenes de una raza concreta.
let oneBreedDog = fetch('https://dog.ceo/api/breed/hound/images')
                    .then(result => result.json())
                    .then(data => console.log(data.message));

// ¿Y si ahora te pidieramos que podamos poner otra raza en la url para que nos busque otras imágenes? Adapta las urls que ya tenías para que puedas pasarle argumentos.
let breed = 'affenpinscher';
oneBreedDog = fetch(`https://dog.ceo/api/breed/${breed}/images`)
                    .then(result => result.json())
                    .then(data => console.log(data.message));
// Recuerda que para estos ejercicios deberás utilizar fetch. Al haber conseguido que se imprima por consola, el siguiente paso será que se muestren en pantalla con las herramientas que nos ofrece el arbol DOM.

const paintOneDog = fetch('https://dog.ceo/api/breeds/image/random')
                    .then(result => result.json())
                    .then(data => {
                        let node = document.createElement("div");
                        document.body.appendChild(node).innerHTML = `<img src="${data.message}">`;
                    });

// 2. ¿Quieres saber mi información? Aquí la tienes.
// Para este ejercicio vamos a utilizar la API de usuarios de GitHub, la cual tiene esta URL: https://api.github.com/users/{username}. {username} es el nombre del usuario en GitHub, por lo que si quieres buscar a cualquier usuario, solo tienes que ponerlo en la url. Por ejemplo, https://api.github.com/users/silvialcastilla. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
// Lo primero que haremos será crear un input de tipo texto y un botón para buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después crearemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición a la API para obtener información de ese usuario y así mostrarla en nuestra página:
const input = document.createElement("input");
input.type = "text";
input.id = "gitHubUser";

const btn = document.createElement("button");
btn.innerHTML = "Search";
btn.id = "btn";

document.body.after(input);
document.body.after(btn);
// Lo que queremos que se imprima por consola será:
// nombre
// número de repositorios
// avatar (imagen)
const buttonSearch = document.querySelector("#btn");
const inputUsername = document.querySelector("#gitHubUser");

buttonSearch.addEventListener("click", function(){
    let user = inputUsername.value;
    const userGitHub = fetch(`https://api.github.com/users/${user}`)
                            .then(result => result.json())
                            .then(data => {
                                console.log(`Name: ${data.name}`);
                                console.log(`Repositories: ${data.public_repos}`);
                                console.log(`Avatar: ${data.avatar_url}`);
                                // Si ya has obtenido toda la información, utiliza las herramientas del arbol DOM para que esta información aparezca en la pantalla.
                                let newUser = document.createElement("div");
                                document.body.appendChild(newUser).innerHTML = `<p>Name: ${data.name} - Repositories: ${data.public_repos} - Avatar: ${data.avatar_url}</p>`;
                            });                      
});
// 3. Promesas, promesas y más promesas.
// Dada una lista de usuarios de github guardada en una array, utiliza 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario.
// Objetivo: Usar Promise.all()
// Recordatorio: Una llamada a fetch() devuelve un objeto promesa.
// Pregunta. ¿cuántas promesas tendremos?
// Hasta que no se resuelvan todas las promesas desencadenadas por cada fetch(), no se cargarán los datos.

// Pasos:

// Mapear el array y hacer un fetch() para cada usuario. Esto nos de vuelve un array lleno de promesas.
// Con Promise.all() harás que se tenga que resolver todo el proceso de peticiones a GitHub a la vez.
// Cuando Promise.all() haya terminado:
// Consigue que se imprima por consola la url del repositorio de cada usuario.
// 
const arrUser = ["manuelmartin-developer", "silvialcastilla", "alejandroereyesb"];
const promiseArr = [];
arrUser.map((user) => {
    let mypromise = fetch(`https://api.github.com/users/${user}`)
                        .then(result => result.json());
        promiseArr.push(mypromise);
} )
Promise.all(promiseArr)
.then((data) => console.log(data));

//! Ver para corregir
// let githubUsers = ["silvialcastilla", "ichikonwd", "ivanqgervas", "gugohh"];
// let promises = githubUsers.map((user) => {
//   return fetch(`https://api.github.com/users/${user}`).then((res) =>
//     res.json()
//   );
// });
// Promise.all(promises).then((datos) => {
//   datos.forEach((dato) => {
//     console.log(dato.repos_url);
//     console.log(dato.name);
//   });
// });