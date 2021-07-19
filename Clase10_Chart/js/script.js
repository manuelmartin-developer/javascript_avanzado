// Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.
// En el eje X el nombre de la película
// En el eje Y año de publicación
// API ENDPOINT --> https://swapi.dev/api/films/
(async () => {

    try {
        
        let fetchFilms = await fetch ('https://swapi.dev/api/films/');
    
        let data = await fetchFilms.json();
    
        let films = data.results;

        let dataX = [];
        let dataY = [];
        for(let film of films){
            dataX.push(film.title);
            let year = film.release_date.slice(0,4);
            dataY.push(year);
        };
    
    let ctx = document.getElementById('filmsYear').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dataX,
            datasets: [{
                label: 'year',
                data: dataY,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64,1 )'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    min: 1950,
                    max: 2020
    
                }
            }
           
        }
    });
    } catch (error) {
        console.log(`Error: ${error}`);
    }

})();

 (async () => {

    try {
        let fetchFilms = await fetch ('https://swapi.dev/api/people/');
    
        let data = await fetchFilms.json();
    
        let characters = data.results;

        let dataX = [];
        let dataY = [];
        for (let character of characters){
            dataX.push(character.name)
            dataY.push((character.films).length)
        };

    let ctx2 = document.getElementById('characterName').getContext('2d');
    let myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: dataX,
            datasets: [{
                label: 'Film\'s number',
                data: dataY,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64,1 )'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    min: 0,
                    max: 10
    
                }
            }
           
        }
    });

    } catch (error) {
        console.log(`Error`);
    }

})();
