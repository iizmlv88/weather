
const weather_input = document.getElementById('weather_input');
const weather_btn = document.getElementById('weather_btn');
const weater_output = document.getElementById('weater_output')
async function handleCityChange(city) {
    try{
    

      
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&land=ua&appid=79e1905d682590dfbe6b44ebc2beaf49`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    // const sunriseTime = data.city.sunrise
    // const sunrise = new Date(sunriseTime * 1000); // 
    // console.log(sunrise.toLocaleString());

    const sunriseTime = new Date(data.city.sunrise * 1000)
    const sunrise = sunriseTime.toLocaleString()
    
    const sunsetTime = new Date(data.city.sunset * 1000)
    const sunset = sunsetTime.toLocaleString()
    
    const icon = document.getElementById('icon');
    icon.innerHTML = "";
    icon.insertAdjacentHTML('beforeend', `<img src='https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png' alt="">`)
    // const weather_info = `
    // <div><span>${data.city.country}</span> <span>${data.city.name}</span> <span>${data.city.timezone
    // }</span><span>рівень над рівнем моря ${data.list[0].main.sea_level}</span><span>коорд ${data.city.coord.lat} ${data.city.coord.lon}</span></div>
    
    // <p>схід сонця ${sunrise}</p>
    // <p>захід сонця ${sunset}</p>
    // <p>середня температура ${data.list[0].main.temp}\u2103</p>
    // <p>вологість повітря ${data.list[0].main.humidity}</p>
    // <p>тиск ${data.list[0].main.pressure}</p>
    // <p>вологість повітря ${data.list[0].main.humidity}</p>
    // <p>weather ${data.list[0].clouds.dt_txt}</p>
    // <p>weather ${data.list[0].weather[0].description}</p>
    // <p>weather ${data.list[0].weather[0].icon}</p>
    // <p>weather ${data.list[0].weather[0].main}</p>
    // <p>швидкість вітру ${data.list[0].wind.speed}</p>
    // <p>бачення ${data.list[0].sys.visibility}</p>
    // `
    // document.getElementById('weater_output').innerHTML = weather_info
    document.getElementById('info').innerHTML = `${data.city.name}, ${data.city.country}. Latitude: ${data.city.coord.lat}, Longitude: ${data.city.coord.lon}`
    document.getElementById('temp').innerHTML = `${Math.round(data.list[0].main.temp)}<div id="ccc">\u2103</div>`
    document.getElementById('wind_speed').innerHTML = `Wind ${Math.round(data.list[0].wind.speed)} m/s`
    document.getElementById('humidity').innerHTML = `Humidity ${data.list[0].main.humidity}%`
    document.getElementById('ahtung').innerHTML = `${data.list[0].main.pressure} hPa`
    document.getElementById('right_weather').innerHTML = `WEATHER`
    document.getElementById('data').innerHTML = `${data.list[0].dt_txt}`
    document.getElementById('weatherweather').innerHTML = `${data.list[0].weather[0].description}`.toUpperCase()
    
    

    setInterval(displayTime, 1000);

    document.getElementById('weather_text').innerHTML = ``
    weather_input.value = ""

    var slider = document.getElementById("slider"); 
    slider.style.width = "100%"; 
    slider.style.display = "flex"; 
    slider.style.flexDirection = "row"; 
    slider.style.justifyContent = "center"; 
    slider.style.alignItems = "center"; 
    slider.style.gap = "5px"; 

    var weather_slider = document.getElementById("weather_slider");
    weather_slider.style.width = "100%"; 
    weather_slider.style.height = "100%";
    weather_slider.style.display = "flex"; 
    weather_slider.style.flexDirection = "row";
    weather_slider.style.justifyContent = "center";
    weather_slider.style.alignItems = "center"; 
    weather_slider.style.gap = "5px"; 

    } catch (error) {
    document.getElementById('weather_text').innerHTML = `Введіть існуюче місто`
    console.error(error);
  }
}

let city = '';

weather_btn.addEventListener("click", () => {
  
  if("click"){
    city = weather_input.value;
  if (city.trim() === ""){
    weather_input.style.backgroundColor = "rgb(150, 35, 35)";
  } else {
    weather_input.style.color = ""; 
    handleCityChange(city);
    nextLine (city)
    table(city)
  }
}
});

weather_input.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
city = weather_input.value;
if (city.trim() === "") {
weather_input.style.backgroundColor = "rgb(150, 35, 35)";

} else {
weather_input.style.color = ""; 
handleCityChange(city);
nextLine (city)
table(city)
}
}
});

function displayTime() {
			let currentTime = new Date();
			let hours = currentTime.getHours();
			let minutes = currentTime.getMinutes();
			let seconds = currentTime.getSeconds();
			let meridiem = "AM";

			if (hours > 12) {
				hours = hours - 12;
				meridiem = "PM";
			}

			if (minutes < 10) {
				minutes = "0" + minutes;
			}

			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			let clockDiv = document.getElementById('clock');
			clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
		}

    //!--------------------------------------------------------------------------------
// const btn_table = document.getElementById('btn_table')

// btn_table.addEventListener("click", () => {
  
//   if("click"){
//     city = weather_input.value;
//   if (city.trim() === ""){
//     weather_input.style.backgroundColor = "rgb(150, 35, 35)";
//   } else {
//     weather_input.style.color = ""; 
//     table(city)
//   }
// }
// });

const tableDiv = document.getElementById('tableBlock')

async function table(city) {
    try{
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&land=ua&appid=79e1905d682590dfbe6b44ebc2beaf49`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headRow = document.createElement('tr');

    const timeHead = document.createElement('th');
    const tempHead = document.createElement('th');
    const temp_maxHead = document.createElement('th');
    const temp_minHead = document.createElement('th');
    const pressureHead = document.createElement('th');
    const humidityHead = document.createElement('th');
    const windHead = document.createElement('th');
    const weatherHead = document.createElement('th');
    const iconHead = document.createElement('th');


    timeHead.textContent = 'TIME';
    tempHead.textContent = 'T\u2103';
    temp_maxHead.textContent = 'MAX \u2103'
    temp_minHead.textContent = 'MIN \u2103'
    pressureHead.textContent = 'PRESSURE'
    humidityHead.textContent = 'HUMIDITY'
    windHead.textContent = 'WIND'
    weatherHead.textContent = 'WEATHER'
    iconHead.textContent = 'SKY'
    

    headRow.appendChild(timeHead);
    headRow.appendChild(tempHead);
    headRow.appendChild(temp_maxHead);
    headRow.appendChild(temp_minHead);
    headRow.appendChild(pressureHead);
    headRow.appendChild(humidityHead);
    headRow.appendChild(windHead);
    headRow.appendChild(weatherHead);
    headRow.appendChild(iconHead);

    thead.appendChild(headRow);
  
  data.list.forEach(item => {
    let row = document.createElement('tr');
    
    let timeCell = document.createElement('td');
    timeCell.textContent = item.dt_txt;
    row.appendChild(timeCell);
    
    let tempCell = document.createElement('td');
    tempCell.textContent = `${item.main.temp}\u2103`;
    row.appendChild(tempCell);

    let tempMaxCell = document.createElement('td');
    tempMaxCell.textContent = `${item.main.temp_max}\u2103`;
    row.appendChild(tempMaxCell);

    let tempMinCell = document.createElement('td');
    tempMinCell.textContent = `${item.main.temp_min}\u2103`;
    row.appendChild(tempMinCell);

    let pressureHeadCell = document.createElement('td');
    pressureHeadCell.textContent = `${data.list[0].main.pressure} hPa`;
    row.appendChild(pressureHeadCell);


    let humidityHeadCell = document.createElement('td');
    humidityHeadCell.textContent = `${data.list[0].main.humidity}%`;
    row.appendChild(humidityHeadCell);

    let windHeadCell = document.createElement('td');
    windHeadCell.textContent = `${data.list[0].wind.speed} m/s`;
    row.appendChild(windHeadCell);

    let weatherHeadCell = document.createElement('td');
    weatherHeadCell.textContent = data.list[0].weather[0].description;
    row.appendChild(weatherHeadCell);

    let iconCell = document.createElement('td');
     iconCell.insertAdjacentHTML('beforeend', `<img src='https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png' alt="">`)
    row.appendChild(iconCell);
    
    tbody.appendChild(row);
  });
  
  table.appendChild(thead);
  table.appendChild(tbody);
  
  tableDiv.appendChild(table)
  
  }catch (error) {
    document.getElementById('weather_text').innerHTML = `Введіть існуюче місто`
    console.error(error);
  }
}

// ??????????????????????????????????????????????????????????????????????????????????

async function nextLine (city) {
    try{
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&land=ua&appid=79e1905d682590dfbe6b44ebc2beaf49`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  
    const table = document.createElement('table');

    const tbody = document.createElement('tbody');
  
let row = document.createElement('tr');

  data.list.forEach(item => {
  
    let cell = document.createElement('td');
    let pTime = document.createElement('p');
    let pTemp = document.createElement('p');

    pTime.innerHTML= item.dt_txt;
    cell.insertAdjacentElement('beforeend', pTime);

    pTemp.innerHTML = `temp: ${item.main.temp}`;
    cell.insertAdjacentElement('beforeend', pTemp);
   

     cell.insertAdjacentHTML('beforeend', `<img src='https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png' alt="">`)
   ;
   row.appendChild(cell);
  });
    
    tbody.appendChild(row)

  table.appendChild(tbody);
  
  document.getElementById('weater_output_next_line').appendChild(table)
  
  }catch (error) {
    document.getElementById('weather_text').innerHTML = `Введіть існуюче місто`
    console.error(error);
  }
}

const slideRight = document.getElementById("slideRight");

slideRight.onclick = () => {
  document.getElementById("weater_output_next_line").scrollBy({
    left: 80,
    behavior: "smooth",
  });
};

const slideLeft = document.getElementById("slideLeft");

slideLeft.onclick = () => {
  document.getElementById("weater_output_next_line").scrollBy({
    left: -80,
    behavior: "smooth",
  });
};


const weather_sliderRight = document.getElementById("weather_sliderRight");

weather_sliderRight.onclick = () => {
  document.getElementById("tableBlock").scrollBy({
    left: 80,
    behavior: "smooth",
  });
};

const weather_sliderLeft = document.getElementById("weather_sliderLeft");

weather_sliderLeft.onclick = () => {
  document.getElementById("tableBlock").scrollBy({
    left: -80,
    behavior: "smooth",
  });
};