const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

fetch("https://restcountries.eu/rest/v2/name/" + params )
    .then(res => res.json())
    .then(res => {
        //console.log(res)    
        const paisesFetch = res;

        document.getElementById("containterMain--Banderas").innerHTML += `
        <li class="cardPais">          
            <img class="paisImagen" src="${pais.flag}" >
            <h3 class="paisNombre">${pais.name}</h3>  
            <h5><b>REGION: </b>${pais.region}</h5>
            <h5><b>CAPITAL: </b>${pais.capital}</h5>
            <h5><b>POBLACIÓN: </b>${pais.population}</h5>             
        </li>
        `;

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