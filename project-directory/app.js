let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function generateRange(min, max) {
 let number = Math.floor(Math.random() * (max - min + 1) + min);
 return number;
}


let seattle = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookPerCust: 6.3,
  cookiesPerHour: [],
  hourlyCustomers: function(min, max) {
    for (let i = 0; i < hours.length; i++) {
     let generateNumber = generateRange(this.minCustPerHour, this.maxCustPerHour);

     this.cookiesPerHour.push(Math.round(generateNumber * this.avgCookPerCust));
    }
  },
};

console.log(seattle);
seattle.hourlyCustomers();

let tokyo = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookPerCust: 1.2,
  hourlyCustomers: function(min, max) {
    for (let i = 0; i < hours.length; i++) {
     let generateNumber = generateRange(this.minCustPerHour, this.maxCustPerHour);

     console.log(Math.round(generateNumber * this.avgCookPerCust));
    }
  },
};


let dubai = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookPerCust: 63.7,
  hourlyCustomers: function(min, max) {
    for (let i = 0; i < hours.length; i++) {
     let generateNumber = generateRange(this.minCustPerHour, this.maxCustPerHour);

     console.log(Math.round(generateNumber * this.avgCookPerCust));
    }
  },
};


let paris = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookPerCust: 2.3,
  hourlyCustomers: function(min, max) {
    for (let i = 0; i < hours.length; i++) {
     let generateNumber = generateRange(this.minCustPerHour, this.maxCustPerHour);

     console.log(Math.round(generateNumber * this.avgCookPerCust));
    }
  },
};


let lima = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookPerCust: 4.6,
  hourlyCustomers: function(min, max) {
    for (let i = 0; i < hours.length; i++) {
     let generateNumber = generateRange(this.minCustPerHour, this.maxCustPerHour);

     console.log(Math.round(generateNumber * this.avgCookPerCust));
    }
  },
};
