let c = console.log;
let buscar = "Lima";
const $cuidad = document.getElementById("cuidad")
function upperA (str){
  return str.split(" ").map(e => e[0].toUpperCase() + e.slice(1)).join(" ")
}
//const transformada = upperA ($cuidad);

const $box = document.getElementById("container__box"),
      fragmento = document.createDocumentFragment(),
      url = "https://api.openweathermap.org/data/2.5/weather?q=Ayacucho&appid=215ac86156a45affffa7e8fcf2f0c69f&lang=es&units=metric";
    
function axiosAsync(){
  async function geTdata(){
    try {
      let response = await axios.get(url),
      obj = await response.data;
      let array = [obj];
      c(array);
      array.forEach((e) => {
        const li = document.createElement("li");
        li.innerHTML = `<div class="tarjeta">
                          <div class="descripcion">
                            <h1>Buscador de Clima</h1>
                            <h2>clima en ${e.name}</h2>
                            <h3>CLIMA:${e.weather[0].main}</h3>
                            <h4>Descripcion: ${e.weather[0].description}</h4>
                            <img src="https://openweathermap.org/img/wn/${e.weather[0].icon}@4x.png" alt="img">
                            <h3>temperatura ${e.main.temp} °C</h3>
                            <p>Max: ${e.main.temp_max} °C </p>
                            <p>Min: ${e.main.temp_min} °C </p>
                            <input type="text" placeholder="Cuidad" id="cuidad">
                            <button id="btn">Consulatr el Clima</button>
                          </div>
                        </div>`;
        fragmento.appendChild(li);
      });
      $box.appendChild(fragmento);
    } catch (error) {
      let message =  "ocurrio un error";
      $box.innerHTML = `Error ${message}`;
    } finally {
      c("siempre ejecutandose");
    }
  }
  geTdata()
}

document.getElementById("btn").addEventListener("click", ()=>{
  axiosAsync();
});