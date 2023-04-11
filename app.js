'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']

let seattleContainer = document.getElementById("seattleList");

let seattleStore = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesPerHourArray: [],
    dailyTotal: 0,
    generateRandoCookies: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    calculateCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let RandoCustomers = this.generateRandoCookies();
            // console.log('randoCustomers', RandoCustomers)
            let cookiesPerHour = Math.round(RandoCustomers * this.avg);
            // console.log('cPH', cookiesPerHour)
            this.cookiesPerHourArray.push(cookiesPerHour);
            // console.log('cPHA', this.cookiesPerHourArray)
            this.dailyTotal += cookiesPerHour;
        }
    },
    renderList: function () {
        seattleStore.calculateCookiesPerHour();
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
            seattleContainer.appendChild(li);
        }
        let li = document.createElement('li');
        li.textContent = `Total: ${this.dailyTotal} cookies`;
        seattleContainer.appendChild(li);
    }
}

seattleStore.renderList();

let tokyoContainer = document.getElementById("tokyoList");

let tokyoStore = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesPerHourArray: [],
    dailyTotal: 0,
    generateRandoCookies: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    calculateCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let RandoCustomers = this.generateRandoCookies();
            // console.log('randoCustomers', RandoCustomers)
            let cookiesPerHour = Math.round(RandoCustomers * this.avg);
            // console.log('cPH', cookiesPerHour)
            this.cookiesPerHourArray.push(cookiesPerHour);
            // console.log('cPHA', this.cookiesPerHourArray)
            this.dailyTotal += cookiesPerHour;
        }
    },
    renderList: function () {
        tokyoStore.calculateCookiesPerHour();
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
            tokyoContainer.appendChild(li);
        }
        let li = document.createElement('li');
        li.textContent = `Total: ${this.dailyTotal} cookies`;
        tokyoContainer.appendChild(li);
    }
}

tokyoStore.renderList();

let dubaiContainer = document.getElementById("dubaiList");

let dubaiStore = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    cookiesPerHourArray: [],
    dailyTotal: 0,
    generateRandoCookies: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    calculateCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let RandoCustomers = this.generateRandoCookies();
            // console.log('randoCustomers', RandoCustomers)
            let cookiesPerHour = Math.round(RandoCustomers * this.avg);
            // console.log('cPH', cookiesPerHour)
            this.cookiesPerHourArray.push(cookiesPerHour);
            // console.log('cPHA', this.cookiesPerHourArray)
            this.dailyTotal += cookiesPerHour;
        }
    },
    renderList: function () {
        dubaiStore.calculateCookiesPerHour();
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
            dubaiContainer.appendChild(li);
        }
        let li = document.createElement('li');
        li.textContent = `Total: ${this.dailyTotal} cookies`;
        dubaiContainer.appendChild(li);
    }
}

dubaiStore.renderList();

let parisContainer = document.getElementById("parisList");

let parisStore = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    cookiesPerHourArray: [],
    dailyTotal: 0,
    generateRandoCookies: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    calculateCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let RandoCustomers = this.generateRandoCookies();
            // console.log('randoCustomers', RandoCustomers)
            let cookiesPerHour = Math.round(RandoCustomers * this.avg);
            // console.log('cPH', cookiesPerHour)
            this.cookiesPerHourArray.push(cookiesPerHour);
            // console.log('cPHA', this.cookiesPerHourArray)
            this.dailyTotal += cookiesPerHour;
        }
    },
    renderList: function () {
        parisStore.calculateCookiesPerHour();
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
            parisContainer.appendChild(li);
        }
        let li = document.createElement('li');
        li.textContent = `Total: ${this.dailyTotal} cookies`;
        parisContainer.appendChild(li);
    }
}

parisStore.renderList();

let limaContainer = document.getElementById("limaList");

let limaStore = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    cookiesPerHourArray: [],
    dailyTotal: 0,
    generateRandoCookies: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    calculateCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let RandoCustomers = this.generateRandoCookies();
            // console.log('randoCustomers', RandoCustomers)
            let cookiesPerHour = Math.round(RandoCustomers * this.avg);
            // console.log('cPH', cookiesPerHour)
            this.cookiesPerHourArray.push(cookiesPerHour);
            // console.log('cPHA', this.cookiesPerHourArray)
            this.dailyTotal += cookiesPerHour;
        }
    },
    renderList: function () {
        limaStore.calculateCookiesPerHour();
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
            limaContainer.appendChild(li);
        }
        let li = document.createElement('li');
        li.textContent = `Total: ${this.dailyTotal} cookies`;
        limaContainer.appendChild(li);
    }
}

limaStore.renderList();

// NOTES???

// seattleStore.renderList();

// seattleStore.calculateCookiesPerHour();
// console.log(seattleStore.cookiesSoldPerHourArray);
// console.log(seattleStore.dailyTotal);

// console.log(storeContainer);

// let storeArticle = document.createElement('article');

// storeInfo.appendChild(storeContainer);

// let storeTwo = document.createElement('h3');

// storeTwo.textContent = 'Store 2'

// storeContainer.appendChild(storeTwo);

// let p = document.createElement('p');
// p.textContent = `${hours[i]}: ${cookiesPerHourArray[i]} cookies`;
// storeContainer.appendChild(p);

// let img = document.createElement('img');
// img.src = 'img/';
// img.alt = 'alt text';
// storeContainer.appendChild(img);

// let li = document.createElement('li');
// li.textContent = 