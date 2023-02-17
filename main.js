
let main = document.getElementById('main');
let frame = document.createElement('div');
frame.className = 'text-center'


let header = document.createElement('weatherApp')
header.setAttribute ('class', "header");
header.textContent = 'Weather App'
main.appendChild(header);


// input.textContent = 'input'

let topSection = document.createElement('div');
main.appendChild(topSection);

let button = document.createElement('button')
button.textContent = 'Get Weather'
button.addEventListener('click', () => {
    // console.log('aaaaaaaaaaaaaaa');
    setData();
}
)
topSection.appendChild(button);



let input = document.createElement('input')
input.textContent = 'input'
topSection.appendChild(input);
main.appendChild(frame);


// getting the zipCode

let zipCode = '';
function getZip() {
    zipCode = input.value;
    console.log(zipCode);
}

// when input loses focus it will run getZip function
input.onblur = getZip;

// this is going to hide the frame when click the input
input.onfocus = hide;

let mainData = {
    condition: "",
    city: "",
    temp: "",
    otherInfo: "",
};
// function to hide/show frame

function hide() {
    frame.hidden = true;
}

function show() {
    frame.hidden = false;
}


// City section  

let city = document.createElement('div')
city.textContent = 'City'
frame.appendChild(city)

let cityValue = document.createElement('div')
cityValue.textContent = mainData.city;
frame.appendChild(cityValue);


// Temp section

let temperature = document.createElement('div')
temperature.textContent = 'Temperature'
frame.appendChild(temperature);

// container for temp

let tempContainer = document.createElement('div')
tempContainer.className = "container  text-center"
frame.appendChild(tempContainer);



// row and column for temp

let tempRow = document.createElement("div")
tempRow.className = "row align-items-start"
tempContainer.appendChild(tempRow);

let tempValue = document.createElement('div')
tempValue.className = "col"

let fahrenheitDiv = document.createElement('div')
fahrenheitDiv.className = "col"

let celsiusDiv = document.createElement('div')
celsiusDiv.className = "col"

tempRow.appendChild(tempValue)
tempRow.appendChild(fahrenheitDiv)
tempRow.appendChild(celsiusDiv)


// conditions section


let condition = document.createElement('div')
condition.textContent = "Condition"
frame.appendChild(condition)

let conditionWeather = document.createElement('div')
conditionWeather.textContent = mainData.condition
frame.appendChild(conditionWeather);



// Other info section

let otherInfo = document.createElement('div')
otherInfo.textContent = 'What does it look like outside...'
frame.appendChild(otherInfo);

// gets data from data object

let icon = document.createElement('img')

frame.appendChild(icon);

// 3. connect API

// async - technique that enables your program to start a potentially long-running 
// task and still be able to be responsive to other events while that task runs

async function getData() {
    // requesting info from api
    let request = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=6a59100ef22a193081d29e1193fbc24d`)
    // get data
    let data = request.data
    // return the data
    return data;
}
// set the data into the object to go through mainData
async function setData() {
    //  try - try to do everything in function, fail will go to catch
    try {
        // returns data from get data 
        data = await getData();
        console.log(data);
        // setting object properties with data value from the api
        mainData.condition = data.weather[0].main;
        mainData.city = data.name;
        mainData.temp = data.main.temp;
        mainData.otherInfo = data.weather[0].icon;
        // updates the properties everytime the button gets clicked with the new zip code data
        updateData();
        // everytime we click button want to show data 
        frame.hidden = false;
    } catch (e) {
        console.log(e);

    }
}
// updates the ojected everytime set data gets ran
function updateData() {
    let fahrenheit = Math.ceil(mainData.temp * (9 / 5) - 459.67);
    let celsius = Math.ceil(mainData.temp - 273.15);
    cityValue.textContent = mainData.city;
    tempValue.textContent = `${mainData.temp} K`;
    fahrenheitDiv.textContent = `${fahrenheit} F`;
    celsiusDiv.textContent = `${celsius} C`;
    conditionWeather.textContent = mainData.condition;
    icon.src = `http://openweathermap.org/img/wn/${mainData.otherInfo}@2x.png`
}

// this is initlizing the body to not show the frame
function init() {
    frame.hidden = true;
}

// background Image
document.body.style.backgroundImage = "url(IMG/clouds10.jpeg)"