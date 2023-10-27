const apikey = "12db9b3710771f242c24f65cd26d24de";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const btn = document.querySelector('button');
const searchInput =  document.querySelector("input");
async function checkwheather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}` )
    let data = await response.json();
  //  console.log(data)
    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
        searchInput.value = "";
    }

    else{
        document.querySelector('.error').style.display = "none";

        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.wind').innerHTML = data.wind.speed +"Km/h";
        document.querySelector('.humidity').innerHTML = data.main.humidity +"%";
        document.querySelector('.location').innerHTML  = data.name;
        if(data.weather[0].main == "Clouds"){
            document.querySelector('.weather-icon').src = "assets/img/clouds.png"
       }
       else if(data.weather[0].main == "Clear"){
            document.querySelector('.weather-icon').src = "assets/img/clear.png";
       }
       else if(data.weather[0].main == "Rain"){
        document.querySelector('.weather-icon').src = "assets/img/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
        document.querySelector('.weather-icon').src = "assets/img/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            document.querySelector('.weather-icon').src = "assets/img/mist.png";
       }
       document.querySelector('.weather').style.display = "block";
       searchInput.value = "";
}   
    }


btn.addEventListener('click',function(){
    
    checkwheather(searchInput.value)
})