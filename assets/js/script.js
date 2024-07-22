// 1. Realizar un request (consulta) a la API usando async-await.
// 2. Mostrar el resultado del request en HTML (utilizar listas desordenadas para mostrar cada uno de los post).
// 3. Manejar los posibles errores con try-catch

// --- ---

// Variable para llamar a la API
const urlApi = "https://jsonplaceholder.typicode.com/posts";

// GET DATA para consumir la API
const getData = async (url) =>{
    try {
        let response = await fetch(url);
        console.log(response);
        let data = await response.json();
        return data;
    } catch (error) {
        alert('Hubo un error!');
    }
}

// Función para presionar el botón y llamar a la función GET DATA
const getPosts = async () =>{
    const posts = await getData(urlApi);
    mostrarHtml(posts);
}

//Mostrar Elementos en el HTML
const mostrarHtml = (posts) => {
    // Variable para obtener id del div del documento
    let postData = document.getElementById("post-data");

    // Agregar etiqueta de apertura y cierre de UL, con una id para la misma
    postData.innerHTML += "<ul id='lista'></ul>";

    // Obtener id de la lista UL
    let lista = document.getElementById("lista");

    // Refreshear la lista, para no llenar la lista de nuevos posts cada vez que se apriete el botón
    lista.innerHTML = "";

    // Realizar recorrido del array dentro de las etiquetas UL
    posts.forEach(post => {
        lista.innerHTML += `<li><strong>${post.title}</strong> <br> ${post.body}</li> <br>`
    });
}