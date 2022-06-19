document.getElementById("country").addEventListener("change", function () {
    let value = this.value;
    document.querySelectorAll("select#country>option").forEach(e => e.removeAttribute('selected'));

    document.querySelector("option[value='" + value + "']").setAttribute('selected', true);


    prepareCities(value);
})

document.getElementById("cities").addEventListener("change", function () {
    document.querySelectorAll("select#cities>option").forEach(e => e.removeAttribute('selected'));
    let value = this.value;
    document.querySelector("option[value='" + value + "']").setAttribute('selected', true);


    let pElem = document.getElementById("destination");
    pElem.innerHTML = `${document.querySelector("select#country>option[selected]").textContent},
     ${document.querySelector("select#cities>option[selected]").textContent}`;
})


function prepareCities(country) {
    removeAllCities();
    switch (country) {
        case "ger":
            addSelectElements(['Berlin', 'Hamburg', 'Ganza']);
            break;
        case "usa":
            addSelectElements(['New York', 'Austin']);
            break;
        case "ukr":
            addSelectElements(['Lviv', 'Kyiv']);
            break;
    }
}

function addSelectElements(cities){
    let citiesDropdown = document.querySelector("select#cities");
    cities.forEach((city) => {
        let option = document.createElement("option");
        option.text = city;
        option.value = city.toLowerCase();
        citiesDropdown.appendChild(option);
    });
}

function removeAllCities() {
    let cities = document.querySelectorAll("select#cities > option");
    cities.forEach(e => e.remove());
}