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

// getting the zipCode

let zipCode; 

// 2. create object that connect to html
//     city
//     temperature
//         Kelvin, Fahrenheit, and Celsius
//     condition
//     Other Info
//         ie. image


let city = document.createElement('div')
city.textContent = 'City'
main.appendChild(city)

let temperature = document.createElement('div')
temperature.textContent = 'Temperature'
main.appendChild(temperature)

let condition = document.createElement('div')
condition.textContent = 'Condition'
main.appendChild(condition)

let otherInfo = document.createElement('div')
otherInfo.textContent = 'Other Info'
main.appendChild(otherInfo)

// 3. connect API

// let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=6a59100ef22a193081d29e1193fbc24d`


// function getData
// gets data from api

function getData() {
    zipCode = document.getElementById('input');
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=6a59100ef22a193081d29e1193fbc24d`)
        .then(function (response) {
            console.log(response);
            console.log("main", response.data)
            main = response.data;
            console.log(main);
            createListItems(main);
        })
        .catch(function (error) {
            console.log(error);
        })

}

// 4. create functions that converts Kelvin, Fahrenheit, and Celsius





