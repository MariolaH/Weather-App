
let main = document.getElementById('main');
let frame = document.createElement('div');

// 1. create onclick and input 

let button = document.createElement('button')
button.textContent = 'Get Weather'
button.addEventListener('click', () => {
    // console.log('aaaaaaaaaaaaaaa');
    setData();
}
)
main.appendChild(button);



let input = document.createElement('input')
input.textContent = 'input'
main.appendChild(input);
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

// gets data from API

let cityValue = document.createElement('div')
cityValue.textContent = mainData.city;
frame.appendChild(cityValue);

// Temp section

let temperature = document.createElement('div')
temperature.textContent = 'Temperature'
frame.appendChild(temperature);

// container for temp

let tempContainer = document.createElement('div')
tempContainer.className = "container"
frame.appendChild(tempContainer);



// row for temp

let tempRow = document.createElement("div")
tempRow.className = "row align-items-start"
tempContainer.appendChild(tempRow);


// gets data from API

let tempValue = document.createElement('div')
tempValue.className = "col"
// tempValue.textContent = `${Kelvin} K`
// main.appendChild(tempValue)

//  convert to fahrenheit, put into column and add F

let fahrenheitDiv = document.createElement('div')
fahrenheitDiv.className = "col"

// convert to fahrenheit, put into column and add F


let celsiusDiv = document.createElement('div')
celsiusDiv.className = "col"



tempRow.appendChild(tempValue)
tempRow.appendChild(fahrenheitDiv)
tempRow.appendChild(celsiusDiv)


// conditions section


let condition = document.createElement('div')
condition.textContent = "Condition"
frame.appendChild(condition)

// gets data from API

let conditionWeather = document.createElement('div')
conditionWeather.textContent = mainData.condition
frame.appendChild(conditionWeather);



// Other info section

let otherInfo = document.createElement('div')
otherInfo.textContent = 'Other Info'
frame.appendChild(otherInfo);

// gets data from data object

let icon = document.createElement('img')
icon.src = `http://openweathermap.org/img/wn/10d@2x.png`
frame.appendChild(icon);

// 3. connect API

// async - ???

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
        // setting objects properties with data value from the api
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
    icon.textContent = mainData.otherInfo;
}

// this is initlizing the body to not show the frame
function init(){
    frame.hidden = true;
}