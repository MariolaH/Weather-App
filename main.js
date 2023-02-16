
let main = document.getElementById('main');

// 1. create onclick and input 

let button = document.createElement('button')
button.textContent = 'Get Weather'
button.addEventListener('click', () =>  {
    // console.log('aaaaaaaaaaaaaaa');
getData();
}
)
main.appendChild(button);

 

let input = document.createElement('input')
input.textContent = 'input'
main.appendChild(input)


// rest button

addEventListener('rest',(event) => {});
onset = (event) => {};


// getting the zipCode

let zipCode = '';
function getZip(){
zipCode = input.value;    
console.log(zipCode); 
}

input.onblur = getZip;

let mainData = {
    condition: "",
    city: "",
    temp: "",
    otherInfo: "",
};
// 2. create object that connect to html
//     city
//     temperature
//         Kelvin, Fahrenheit, and Celsius
//     condition
//     Other Info
//         ie. image

function display() {

// City section   

let city = document.createElement('div')
city.textContent = 'City'
main.appendChild(city)

// gets data from API

let cityValue = document.createElement('div')
cityValue.textContent = mainData.city;
main.appendChild(cityValue)

// Temp section & convet k to c, K to F
// This renders kelvin


let temperature = document.createElement('div')
temperature.textContent = 'Temperature'
main.appendChild(temperature)

let tempContainer = document.createElement('div')
tempContainer.className = "container"
main.appendChild(tempContainer);

let tempRow = document.createElement("div")
tempRow.className = "row align-items-start"
tempContainer.appendChild(tempRow);


// gets data from API

let tempValue = document.createElement('div')
tempValue.className = "col"
tempValue.textContent = mainData.temp
// main.appendChild(tempValue)

let fahrenheit = Math.ceil(mainData.temp * (9/5) - 459.67);
let fahrenheitDiv = document.createElement('div')
fahrenheitDiv.className = "col"
fahrenheitDiv.textContent = `${fahrenheit} F`

let celsius = Math.ceil(mainData.temp - 273.15);
let celsiusDiv = document.createElement('div')
celsiusDiv.className = "col"
celsiusDiv.textContent = `${celsius} C`


tempRow.appendChild(tempValue)
tempRow.appendChild(fahrenheitDiv)
tempRow.appendChild(celsiusDiv)


// conditions section


let condition = document.createElement('div')
condition.textContent = "Condition"
main.appendChild(condition)

// gets data from API

let conditionWeather = document.createElement('div')
conditionWeather.textContent = mainData.condition
main.appendChild(conditionWeather);



// Other info section

let otherInfo = document.createElement('div')
otherInfo.textContent = 'Other Info'
main.appendChild(otherInfo);

// gets data from data object

let icon = document.createElement('div')
icon.textContent = mainData.otherInfo
main.appendChild(icon);
}

// 3. connect API

function getData() {
    // zipCode = document.getElementById('input').value;
    console.log(zipCode);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=6a59100ef22a193081d29e1193fbc24d`)
        .then(function (response) {
            // handle sucess
            let data = response.data;
            mainData.condition = data.weather[0].main;
            mainData.city = data.name;
            mainData.temp = data.main.temp;
            mainData.otherInfo = data.weather[0].icon;            
            display();
        })
        .catch(function (error) {
            console.log(error);
        })

}



// 4. create functions that converts Kelvin, Fahrenheit, and Celsius





// created case for each state on page




