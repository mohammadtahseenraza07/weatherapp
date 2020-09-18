let loc = document.getElementById("location")
let tempicon = document.getElementById("temp-icon")
let tempvalue = document.getElementById("temp-value")
let climate = document.getElementById("climate")
let iconfile;

window.addEventListener("load", () =>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((Position) =>{
            long = Position.coords.longitude;
            lat = Position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=76f86f061ce80811cd5fb554dd0455cd`;
            fetch(api)
            .then((Response) => {
                return Response.json();
            })
            .then(data => {
                 const {name} = data ;
                 const {feels_like} = data.main ;
                 const {id,main} = data.weather[0];
                loc.textContent = name;
                climate.textContent = main;
                tempvalue.textContent = Math.round(feels_like-273);
                if(id < 250){
                    tempicon.src = 'icons8-storm-100.png'
                }
                else if (id < 350){
                    tempicon.src = 'climate.svg'
                }
                else if (id < 550){
                    tempicon.src = 'icons8-heavy-rain-100.png'
                }
                else if (id < 650){
                    tempicon.src = 'icons8-winter-lanscape-100.png'
                }
                else if (id < 800){
                    tempicon.src = 'icons8-summer-100.png'
                }

                console.log(data);
            })
        })
    }
})