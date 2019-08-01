const listaPaises = document.getElementById("Countries")
const descripcionPaises = document.getElementById("descripcion-pais")

const extraerTodosLosPaises = () => {
    fetch("https://restcountries.eu/rest/v2/all").then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        listaPaises.innerHTML = data.map((pais) => {
            return `
     <tr class="countries">
     <td>
     <img class="small-flag"
     src="${pais.flag}" />
    <span> ${pais.name}</span>
    </td>
    </tr>
     `
        }).join('')
    })
}

const describirPaises = (pais) => {
        console.log(pais.name)
        descripcionPaises.innerHTML = pais.name
    }
    //EVENTOS
extraerTodosLosPaises()