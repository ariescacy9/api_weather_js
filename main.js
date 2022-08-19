let key = "215ac86156a45affffa7e8fcf2f0c69f"
let $button = document.getElementById("btn")
let $search = document.getElementById("search")

$button.addEventListener("click", (e) => {
  e.preventDefault()
  let resultado = $search.value
  let city = resultado
  if (resultado === "") {
    errorMensaje()
  }
  callCity(city)
})


function callCity(city) {

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${key}`

  axios.get(url)
    .then(response => {
      this.users = response.data;
      let clima = response.data;
      let icon = response.data.weather[0].icon
      let dato = response.data.weather[0].description
      let result = `<h1>${response.data.name}</h1>
                    <h3>${response.data.weather[0].description}</h3><br>
                    <li>Temperatura:
                      <h2>${Math.floor((response.data.main.temp))}°C<h2>
                    </li>
                    <li>Min: ${Math.floor(response.data.main.temp_min)}°</li>
                    <li>Max: ${Math.floor(response.data.main.temp_max)}°</li>`
      let img = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`
      document.getElementById("container").innerHTML = result
      document.getElementById("img-container").innerHTML = img
    })
    .catch(e => {
      let message =  "ocurrio un error";
      document.getElementById("container").innerHTML = message
    })
}