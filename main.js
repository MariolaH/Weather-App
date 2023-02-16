
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

let zipCode = 40511; 

let mainData = [];

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
// city.classList.add(container, center) 
city.textContent = 'City'
main.appendChild(city)

// gets data from API

// let cityValue = document.createElement('div')
// cityValue.textContent = mainData.name;
// main.appendChild(cityValue)

// Temp section & convet k to c, K to F
// This renders kelvin

let temperature = document.createElement('div')
temperature.textContent = 'Temperature'
main.appendChild(temperature)

// gets data from API

let tempValue = document.createElement('div')
tempValue.textContent = mainData.main.temp
main.appendChild(tempValue)

// convet k to c

// function kelvinToCelsius(celsius) {
//     return kelvin - 273.15;
}

// convet k to F

// function kelvinToFahrenheit(fahrenheit)
//     return kelvin * (9/5) - 459.67;

// conditions section

let condition = document.createElement('div')
condition.textContent = 'Condition'
main.appendChild(condition)

// gets data from API

// let conditionValue = document.createElement('div')
// conditionValue.textContent = mainData.main.clouds
// main.appendChild(conditionValue)

// other info ie.  image

let otherInfo = document.createElement('div')
otherInfo.textContent = 'Other Info'
main.appendChild(otherInfo)

// 3. connect API

function getData() {
    // zipCode = document.getElementById('input').value;
    console.log(zipCode);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=6a59100ef22a193081d29e1193fbc24d`)
        .then(function (response) {
            // handle sucess
            console.log(response);
            console.log("main", response.data)
            mainData = response.data;
            console.log(mainData);
            display();
            // createListItems(main);
        })
        .catch(function (error) {
            console.log(error);
        })

}



// 4. create functions that converts Kelvin, Fahrenheit, and Celsius





// created case for each state on page




