function filtro() {
    
    let valor = document.getElementById("searchInput").ariaValueMax.toUpperCase();
    let nombre = document.getElementById("names");
    let filas = nombre.getElementsByTagName("tr");

    for(let i = 0; i < filas.length; i++){
        let columnaLenguaje = filas[i].getElementsByTagName("td")[2];
        let lenguaje = columnaLenguaje.textContent;
        filas[i].style.display = lenguaje.toUpperCase().indexOf(valor) > -1 ? "" : "none";
      }
    }
    
    document.getElementById("searchInput").addEventListener("keyup", filtro);

