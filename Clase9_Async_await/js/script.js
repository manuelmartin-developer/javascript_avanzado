// Utilizando la api de Pokemons https://pokeapi.co/ y usando sólo async/await:

// Obtener un Pokemon de manera aleatoria (fetch)
// Tras obtener dicho Pokémon
// Obten su imágen correspondiente
// Obtener nombre del Pokémon
// Dibujar nombre e imágen del Pokémon en el DOM
// OJO!! Te tocará estudiar cómo funciona la API de Pokémon para encontrar la imágen. Puede que tengas que hacer más de un fetch!! (depende de la ruta de consulta que uses)

(async () => {


    try {
        
        let num = Math.floor(Math.random()*500)
        let fetchPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
        let pokemon = await fetchPokemon.json();
        

        let container = document.createElement("div");
        container.id = "container";
        let images = document.createElement("div");
        images.id = "images";
        let img1 = document.createElement("img");
        img1.id = "imgPokemon_front";
        img1.src = pokemon.sprites.front_default;
        let img2 = document.createElement("img");
        img2.id = "imgPokemon_back";
        img2.src = pokemon.sprites.back_default;
        let newP = document.createElement("p");
        newP.id = "namePokemon";
        newP.innerHTML = pokemon.species.name;
        images.appendChild(img1);
        images.appendChild(img2);
        container.appendChild(images);
        container.appendChild(newP);
        document.body.appendChild(container);


        let dogNames = ["Rocky", "Flufy", "Firualais", "Toby"];
        let response2 = await fetch('https://dog.ceo/api/breeds/image/random');

        let dog = await response2.json();
        console.log(dog);
        let divVS = document.createElement("div");
        divVS.id = "vs";
        divVS.innerHTML = "Vs";
        container.appendChild(divVS);
        let dogDiv = document.createElement("div");
        dogDiv.id = "dogDiv";
        let img3 = document.createElement("img");
        img3.id = "dog_image";
        img3.src = dog.message;
        let newp2 = document.createElement("p");
        newp2.id = "nameDog";
        newp2.innerHTML = dogNames[Math.floor(Math.random()*dogNames.length)];
        dogDiv.appendChild(img3);
        dogDiv.appendChild(newp2);
        container.appendChild(dogDiv);

        




    } catch (error) {
        console.log(`Error: ${error}`);
    }
})();


