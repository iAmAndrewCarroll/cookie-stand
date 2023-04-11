'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']

let cityArray = []

let storeSales = document.getElementById("storeSales"); // this element id comes from the HTML doc

// this is an object constructor function
// this.name = name; this.name is the property and name is the value
function Store(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesPerHourArray = []
    this.dailyTotal = 0;
    this.generateRandoCookies = function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    };
    this.CPH = function () {
        // console.log(`this is xyz`)
        for (let i = 0; i < hours.length; i++) {
            let RandoCustomers = this.generateRandoCookies();
            // math.ceil rounds up & math.floor rounds down
            let cookiesPerHour = Math.round(RandoCustomers * this.avg);
            // console.log('cPH', cookiesPerHour)
            this.cookiesPerHourArray.push(cookiesPerHour);
            // console.log('cPHA', this.cookiesPerHourArray)
            // x += y is the same as x = x + y; this saves us from having to write out longer form
            this.dailyTotal += cookiesPerHour;
        }
    }
    this.renderList = function () {
        this.CPH();
        let h2StoreName = document.createElement('h2');
        h2StoreName.textContent = `${this.name}`;
        storeSales.appendChild(h2StoreName);
        for (let i = 0; i < hours.length; i++) {
            // create the li element in html doc
            let li = document.createElement('li');
            // get the li content from within the function
            li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
            // append list item elements
            // the variable for the parent is seattleContainer
            storeSales.appendChild(li);
        }
        // returns the daily total and is not inside the loop because it only needs to run once the loop is complete
        let li = document.createElement('li');
        li.textContent = `Total: ${this.dailyTotal} cookies`;
        storeSales.appendChild(li);
    }
}
// create INSTANCES of Store
let seattle = new Store('Seattle', 23, 65, 6.3)
let tokyo = new Store('Tokyo', 3, 24, 1.2)
let dubai = new Store('Dubai', 11, 38, 3.7)
let paris = new Store('Paris', 20, 38, 2.3)
let lima = new Store('Lima', 2, 16, 4.6)
// seattle.CPH()
seattle.renderList()
tokyo.renderList()
dubai.renderList()
paris.renderList()
lima.renderList()

// let seattleStore = {
//     name: 'Seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     cookiesPerHourArray: [],
//     dailyTotal: 0,
//     generateRandoCookies: function () {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//     calculateCookiesPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let RandoCustomers = this.generateRandoCookies();
//             // console.log('randoCustomers', RandoCustomers)
//             // math.ceil rounds up & math.floor rounds down
//             let cookiesPerHour = Math.round(RandoCustomers * this.avg);
//             // console.log('cPH', cookiesPerHour)
//             this.cookiesPerHourArray.push(cookiesPerHour);
//             // console.log('cPHA', this.cookiesPerHourArray)
//             // x += y is the same as x = x + y; this saves us from having to write out longer form
//             this.dailyTotal += cookiesPerHour;
//         }
//     },
//     renderList: function () {
//         this.calculateCookiesPerHour();
//         for (let i = 0; i < hours.length; i++) {
//             // create the li element in html doc
//             let li = document.createElement('li');
//             // get the li content from within the function
//             li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
//             // append list item elements
//             // the variable for the parent is seattleContainer
//             seattleContainer.appendChild(li);
//         }
//         // returns the daily total and is not inside the loop because it only needs to run once the loop is complete
//         let li = document.createElement('li');
//         li.textContent = `Total: ${this.dailyTotal} cookies`;
//         seattleContainer.appendChild(li);
//     }
// }

// seattleStore.renderList();

// let tokyoContainer = document.getElementById("tokyoList");

// let tokyoStore = {
//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     cookiesPerHourArray: [],
//     dailyTotal: 0,
//     generateRandoCookies: function () {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//     calculateCookiesPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let RandoCustomers = this.generateRandoCookies();
//             // console.log('randoCustomers', RandoCustomers)
//             let cookiesPerHour = Math.round(RandoCustomers * this.avg);
//             // console.log('cPH', cookiesPerHour)
//             this.cookiesPerHourArray.push(cookiesPerHour);
//             // console.log('cPHA', this.cookiesPerHourArray)
//             this.dailyTotal += cookiesPerHour;
//         }
//     },
//     renderList: function () {
//         this.calculateCookiesPerHour();
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
//             tokyoContainer.appendChild(li);
//         }
//         let li = document.createElement('li');
//         li.textContent = `Total: ${this.dailyTotal} cookies`;
//         tokyoContainer.appendChild(li);
//     }
// }

// tokyoStore.renderList();

// let dubaiContainer = document.getElementById("dubaiList");

// let dubaiStore = {
//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     cookiesPerHourArray: [],
//     dailyTotal: 0,
//     generateRandoCookies: function () {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//     calculateCookiesPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let RandoCustomers = this.generateRandoCookies();
//             // console.log('randoCustomers', RandoCustomers)
//             let cookiesPerHour = Math.round(RandoCustomers * this.avg);
//             // console.log('cPH', cookiesPerHour)
//             this.cookiesPerHourArray.push(cookiesPerHour);
//             // console.log('cPHA', this.cookiesPerHourArray)
//             this.dailyTotal += cookiesPerHour;
//         }
//     },
//     renderList: function () {
//         this.calculateCookiesPerHour();
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
//             dubaiContainer.appendChild(li);
//         }
//         let li = document.createElement('li');
//         li.textContent = `Total: ${this.dailyTotal} cookies`;
//         dubaiContainer.appendChild(li);
//     }
// }

// dubaiStore.renderList();

// let parisContainer = document.getElementById("parisList");

// let parisStore = {
//     name: 'Paris',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     cookiesPerHourArray: [],
//     dailyTotal: 0,
//     generateRandoCookies: function () {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//     calculateCookiesPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let RandoCustomers = this.generateRandoCookies();
//             // console.log('randoCustomers', RandoCustomers)
//             let cookiesPerHour = Math.round(RandoCustomers * this.avg);
//             // console.log('cPH', cookiesPerHour)
//             this.cookiesPerHourArray.push(cookiesPerHour);
//             // console.log('cPHA', this.cookiesPerHourArray)
//             this.dailyTotal += cookiesPerHour;
//         }
//     },
//     renderList: function () {
//         this.calculateCookiesPerHour();
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
//             parisContainer.appendChild(li);
//         }
//         let li = document.createElement('li');
//         li.textContent = `Total: ${this.dailyTotal} cookies`;
//         parisContainer.appendChild(li);
//     }
// }

// parisStore.renderList();

// let limaContainer = document.getElementById("limaList");

// let limaStore = {
//     name: 'Lima',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     cookiesPerHourArray: [],
//     dailyTotal: 0,
//     generateRandoCookies: function () {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//     calculateCookiesPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let RandoCustomers = this.generateRandoCookies();
//             // console.log('randoCustomers', RandoCustomers)
//             let cookiesPerHour = Math.round(RandoCustomers * this.avg);
//             // console.log('cPH', cookiesPerHour)
//             this.cookiesPerHourArray.push(cookiesPerHour);
//             // console.log('cPHA', this.cookiesPerHourArray)
//             this.dailyTotal += cookiesPerHour;
//         }
//     },
//     renderList: function () {
//         this.calculateCookiesPerHour();
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
//             limaContainer.appendChild(li);
//         }
//         let li = document.createElement('li');
//         li.textContent = `Total: ${this.dailyTotal} cookies`;
//         limaContainer.appendChild(li);
//     }
// }

// limaStore.renderList();

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