what this app needs to do:

input zip code
input wrong zip code diplay error message


display: 
    city
    temperature
        Kelvin, Fahrenheit, and Celsius
    condition
    other info
        ie. image



Everything will be in JS except



Functions:

    input button - for zip code - create onClick button
    when new zip code is put in and button is clicked renders new weather info for new zip code
    refresh button - resets weather info in app????
    or just use same button
    click input box clear screen

    when zip doesn't exist... error message or alert pop up



buildHTML() elements
     city
    temperature
        Kelvin, Fahrenheit, and Celsius
    condition
    other info
        ie. image
    * use appendChild to add these objects to the html


    ex.
        <ul id="menu"></ul>


        function createMenuItem(name) {
        let li = document.createElement('li');
        li.textContent = name;
        return li;
    }

    // get the ul#menu
    const menu = document.querySelector('#menu');
    // add menu item
    menu.appendChild(createMenuItem('Home'));
    menu.appendChild(createMenuItem('Services'));
    menu.appendChild(createMenuItem('About Us'));



    function getData
            gets data from api

        function getData() {
        axios.get(url)
            .then(function (response) {
                console.log(response);
                console.log("catInfo", response.data)
                catInfo = response.data;
                console.log(catInfo);
                createListItems(catInfo);
            })
            .catch(function (error) {
                console.log(error);
            })

    }       



function that pulls out specific items froms the api.....

city
    temperature
        Kelvin, Fahrenheit, and Celsius
    condition
    other info
        ie. image


                function weatherData(arr) {
    for (cat of arr) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${cat.text}: ${cat.source}`;
`${city}: ${temperature}, ${condition}, ${other info}`;

        document.getElementById("myList").appendChild(listItem);
    }
}
        



        init()
convertTemperature()
buildHTML() elements
Show city, populate with state data currentWeather.city
Show temperature
Change the src of the image tag to the currentWeather.image
Populate with api data
changeHTML()
getData - call the api
Uses axios to call some endpoint ?
.then for success()
updateState()
.then for state updated
buildHTML()
.catch for failure()
handleError()


handleError()
