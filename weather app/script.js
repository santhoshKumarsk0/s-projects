const apikey = "e10bd6dfa75eb5caeaa95bdbed32159f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status==404){
        document.querySelector('.error').style.display="block"
        document.querySelector('.weather').style.display="none"
    }
    else{
        var data = await response.json();
  
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main =="Clouds"){
            weatherIcon.src="/projects/weather app/media/images/clouds.png"
        }
        else if(data.weather[0].main=='Clear'){
            weatherIcon.src='/projects/weather app/media/images/clear.png'
        }
        else if(data.weather[0].main=='Rain'){
            weatherIcon.src='/projects/weather app/media/images/rain.png'
        }
        else if(data.weather[0].main=='Drizzle'){
            weatherIcon.src='/projects/weather app/media/images/drizzle.png'
        }
        else if(data.weather[0].main=='Mist'){
            weatherIcon.src='/projects/weather app/media/images/mist.png'
        }
       let wet= document.querySelector('.weather')
       wet.style.display = "block"
       document.querySelector('.error').style.display="none"
 
    }
}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value)
})
