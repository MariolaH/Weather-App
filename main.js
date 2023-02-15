let main = document.getElementById('main');

// 1. create onclick

// 2. create object that connect to html
//     city
//     temperature
//         Kelvin, Fahrenheit, and Celsius
//     condition
//     other info
//         ie. image


        function Items(weather) {
            let li = document.createElement('li');
            li.textContent = weather;
            return li;
        }
 
        const main = document.querySelector('main');
        main.appendChild(createmainItem('City'));
        main.appendChild(createmainItem('Temperature'));
        main.appendChild(createmainItem('Condition'));
        main.appendChild(createmainItem('Other Info'));


// 3. connect API


// 4. create functions that converts Kelvin, Fahrenheit, and Celsius





