const apiUrl = 'https://database-hp.vercel.app/libros';

async function getData() {
    const response = await fetch(apiUrl);
    const result = await response.json();
    //console.log(result);
    
}
getData();