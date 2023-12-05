const apiUrl = 'https://database-hp.vercel.app/personajes';
const body$$ = document.getElementById('myBody');

async function getData() {
    const response = await fetch(apiUrl);
    const result = await response.json();
    console.log(result);
    for (let character of result) {
        const img$$ = document.createElement('img');
        img$$.src = character.picture;
        img$$.style.width = '300px';
        img$$.style.height = '300px';
        body$$.appendChild(img$$);
    }
}
getData();