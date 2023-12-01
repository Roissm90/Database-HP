const apiUrl = 'http://localhost:3000/personajes';

async function getData() {
    const response = await fetch(apiUrl);
    const result = await response.json();
    console.log(result);
}
getData();