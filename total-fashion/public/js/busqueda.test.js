let elementos
let count = 1

function filtrar() {
    if (count == 1){
        elementos = document.querySelectorAll(".producto")
        count++
    }
    // Obtener el texto de la barra de búsqueda
    var textoBusqueda = document.getElementById("input-search").value;
    // Crear una expresión regular para buscar el texto
    var expresionRegular = new RegExp(textoBusqueda, "i");
    // Filtrar los elementos HTML
    
    var elementosFiltrados = [];
    for (var i = 0; i < elementos.length; i++) {
        if (expresionRegular.test(elementos[i].children[1].textContent)) {
        elementosFiltrados.push(elementos[i]);
        // console.log(elementos[i].children[1].textContent);
    }
}

    // Mostrar los elementos filtrados
    var resultados = document.getElementById("contenedor-productos");
    resultados.innerHTML = "";
    // if () {}
    if (elementosFiltrados.length != 0){
        for (var i = 0; i < elementosFiltrados.length; i++) {
            resultados.appendChild(elementosFiltrados[i]);
        }
    } else {
        resultados.innerHTML = `<br><h4 style='margin-left:20px'>No se encontraron registros coincidentes.</h4>`;
    }
}

function update_items() {
    elementos = document.querySelectorAll(".producto")
    count = 1
}