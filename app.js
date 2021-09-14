var cardPais;

fetch("https://restcountries.eu/rest/v2/region/europe")
    .then(res => res.json())
    .then(res => {
        //console.log(res)    
        const paisesFetch = res;

        for (const pais of paisesFetch) {
            document.getElementById("containterMain--BanderasPais").innerHTML += `
        <li class="cardPais">          
            <img class="paisImagen" src="${pais.flag}" >
            <h3 class="paisNombre">${pais.name}</h3>  
            <h5><b>REGION: </b>${pais.region}</h5>
            <h5><b>CAPITAL: </b>${pais.capital}</h5>
            <h5><b>POBLACIÓN: </b>${pais.population}</h5>             
        </li>
        `;
        }
    })




btnModo.addEventListener('click', (e) => {
    var btnModo = document.getElementById('btnModo')
    var elemBody = document.getElementById('elemBody')

    if (btnModo.value == "Dark Mode") {
        btnModo.value = "Light Mode"
        elemBody.classList.toggle("modoClaro")
    } else {
        btnModo.value = "Dark Mode"
        elemBody.classList.toggle("modoClaro")
    }
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('.cardPais')) return;

    // Log the clicked element in the console
    console.log(event.target.parentNode.childNodes[3].innerHTML);
    abrirPaisDetalle(event.target.parentNode.childNodes[3].innerHTML)
}, false);

function abrirPaisDetalle(pais) {
    window.open("detalle.html?name=" + pais, "_self");        
}







