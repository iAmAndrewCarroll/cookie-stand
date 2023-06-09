'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']

// 1st step in event handling
// saving an element from our HTML as a JavaScript DOM object
let form = document.getElementById("addLocationForm");

// this is the entry point to the DOM for the list
let storeSales = document.getElementById("storeSales"); // this element id comes from the HTML doc

// this is the entry point to the DOM for the table
let storeTable = document.getElementById("storeTable");

// this is an OBJECT CONSTRUCTOR FUNCTION (Store Constructor)
// this.name = name; this.name is the property and name is the value
function Store(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesPerHourArray = []
    this.dailyTotal = 0;
}

    // this is attaching a method to the constructor function Store
    Store.prototype.generateRandomCustomers = function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    };

    Store.prototype.calculateCookiesPerHour = function () {
        // console.log(`this is xyz`)
        for (let i = 0; i < hours.length; i++) {
            let RandoCustomers = this.generateRandomCustomers();
            // math.ceil rounds up & math.floor rounds down
            let cookiesPerHour = Math.round(RandoCustomers * this.avg);
            // console.log('cPH', cookiesPerHour)
            this.cookiesPerHourArray.push(cookiesPerHour);
            // console.log('cPHA', this.cookiesPerHourArray)
            // x += y is the same as x = x + y; this saves us from having to write out longer form
            this.dailyTotal += cookiesPerHour;
        }
    }

    // Store.prototype.renderList = function () {
    //     this.calculateCookiesPerHour();
    //     let h2StoreName = document.createElement('h2');
    //     h2StoreName.textContent = `${this.name}`;
    //     storeSales.appendChild(h2StoreName);
    //     for (let i = 0; i < hours.length; i++) {
    //         // create the li element in html doc
    //         let li = document.createElement('li');
    //         // get the li content from within the function
    //         li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
    //         // append list item elements
    //         // the variable for the parent is seattleContainer
    //         storeSales.appendChild(li);
    //     }
    //     // returns the daily total and is not inside the loop because it only needs to run once the loop is complete
    //     let li = document.createElement('li');
    //     li.textContent = `Total: ${this.dailyTotal} cookies`;
    //     storeSales.appendChild(li);
    // }

    // I am creating a method within the object constructor
    Store.prototype.renderTable = function () {
        this.calculateCookiesPerHour();
        // create table row
        let storeTr = document.createElement('tr')
        // append to table element
        storeTable.appendChild(storeTr);
        // create new element w/ content of city names and append to the row
        let storeName = document.createElement('th')
        storeName.textContent = this.name;
        storeTr.appendChild(storeName);
        for (let i = 0; i < hours.length; i++) {
            let td = document.createElement('td');
            td.textContent = this.cookiesPerHourArray[i];
            storeTr.appendChild(td);
        }
        let storeTotal = document.createElement('th')
        storeTotal.textContent = this.dailyTotal;
        storeTr.appendChild(storeTotal);
    }

// create the hours header
let renderHeader = function () {
    let hoursHeader = document.createElement('tr')
    storeTable.appendChild(hoursHeader);
    let emptyCell = document.createElement('th')
    emptyCell.textContent = '';
    hoursHeader.appendChild(emptyCell);
    for (let i = 0; i < hours.length; i++) {
        let storeHours = document.createElement('th');
        storeHours.textContent = hours[i];
        hoursHeader.appendChild(storeHours);
    }
    // create Daily Location Total label 
    let TotalHeader = document.createElement('th')
    TotalHeader.textContent = `Daily Location Total`;
    hoursHeader.appendChild(TotalHeader);
}

let footerRow = document.createElement('tr');

// create Daily Hourly Total label
let renderFooter = function () {
    footerRow.innerHTML = '';
    storeTable.appendChild(footerRow);
    let totalLower = document.createElement('th');
    totalLower.textContent = 'Total';
    footerRow.appendChild(totalLower);
    let totalTotal = 0;
    for (let i = 0; i < hours.length; i++) {
        let hourlyTotal = 0;
        for (let j = 0; j < cityArray.length; j++) {
            hourlyTotal += cityArray[j].cookiesPerHourArray[i];
        }
        let hourlyRow = document.createElement('th');
        hourlyRow.textContent = hourlyTotal;
        footerRow.appendChild(hourlyRow);
        totalTotal += hourlyTotal;
        // console.log(totalTotal)
        // console.log(hourlyTotal);
    }
    let AllTotal = document.createElement('th');
    AllTotal.textContent = (totalTotal);
    footerRow.appendChild(AllTotal);
}

// 3rd step in event handling
// the code that is triggered in response to an event
function handleFormSubmit(event) {
    // preventDefault stops JS from running its foundation code which will not store the data
    event.preventDefault();
    const name = event.target.name.value;
    const min = parseInt(event.target.minCustomers.value);
    const max = parseInt(event.target.maxCustomers.value);
    const avgSales = parseFloat(event.target.avgSales.value);
    let newStore = new Store(name, min, max, avgSales);
    console.log('form submitted')
    event.target.name.value = null;
    event.target.minCustomers.value = null;
    event.target.maxCustomers.value = null;
    event.target.avgSales.value = null;
    cityArray.push(newStore);
    newStore.renderTable()
    renderFooter()
}

let cityArray = [
    new Store('Seattle', 23, 65, 6.3),
    new Store('Tokyo', 3, 24, 1.2),
    new Store('Dubai', 11, 38, 3.7),
    new Store('Paris', 20, 38, 2.3),
    new Store('Lima', 2, 16, 4.6),
];
renderHeader()
for (let i = 0; i < cityArray.length; i++) {
    cityArray[i].renderTable();
}
renderFooter()

// 2nd step in event handling
// adding an event listener
// the event type as a string
//the name of the function that we want to be triggered in response to the event
form.addEventListener('submit', handleFormSubmit)



// // NOTES???

// // seattleStore.renderList();

// // seattleStore.calculateCookiesPerHour();
// // console.log(seattleStore.cookiesSoldPerHourArray);
// // console.log(seattleStore.dailyTotal);

// // console.log(storeContainer);

// // let storeArticle = document.createElement('article');

// // storeInfo.appendChild(storeContainer);

// // let storeTwo = document.createElement('h3');

// // storeTwo.textContent = 'Store 2'

// // storeContainer.appendChild(storeTwo);

// // let p = document.createElement('p');
// // p.textContent = `${hours[i]}: ${cookiesPerHourArray[i]} cookies`;
// // storeContainer.appendChild(p);

// // let img = document.createElement('img');
// // img.src = 'img/';
// // img.alt = 'alt text';
// // storeContainer.appendChild(img);

// // let li = document.createElement('li');
// // li.textContent = 