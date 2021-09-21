'use strict';


let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];


function generateRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattle = {
  name: 'seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookPerCust: 6.3,
  salesTotals: [],
  grandTotal: 0,
  hourlyCustomers: function() {
    for (let hour = 0; hour < hours.length; hour++) {
      
      let generateNumber = generateRange(this.minCustPerHour, this.maxCustPerHour);


      let customerSales = Math.round(generateNumber * this.avgCookPerCust);
      this.salesTotals.push(`${hours[hour]}: total sales ${customerSales}`);
      this.grandTotal = this.grandTotal + customerSales;
    }
  },
};

let tokyo = {
  name: 'tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookPerCust: 1.2,
  salesTotals: [],
  grandTotal: 0,
  hourlyCustomers: function() {
    for (let hour = 0; hour < hours.length; hour++) {
      
      let generateNumber = generateRange(this.minCustPerHour, this.maxCustPerHour);

      
      let customerSales = Math.round(generateNumber * this.avgCookPerCust);
      this.salesTotals.push(`${hours[hour]}: total sales ${customerSales}`);
      this.grandTotal = this.grandTotal + customerSales;
    }
  },
};

let dubai = {
  name: 'dubai',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookPerCust: 3.7,
  salesTotals: [],
  grandTotal: 0,
  hourlyCustomers: function() {
    for (let hour = 0; hour < hours.length; hour++) {
     
      let generateNumber = generateRange(this.minCustPerHour, this.maxCustPerHour);


      let customerSales = Math.round(generateNumber * this.avgCookPerCust);
      this.salesTotals.push(`${hours[hour]}: total sales ${customerSales}`);
      this.grandTotal = this.grandTotal + customerSales;
    }
  },
};

let paris = {
  name: 'paris',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookPerCust: 2.3,
  salesTotals: [],
  grandTotal: 0,
  hourlyCustomers: function() {
    for (let hour = 0; hour < hours.length; hour++) {
     
      let generateNumber = generateRange(this.minCustPerHour, this.maxCustPerHour);


      let customerSales = Math.round(generateNumber * this.avgCookPerCust);
      this.salesTotals.push(`${hours[hour]}: total sales ${customerSales}`);
      this.grandTotal = this.grandTotal + customerSales;
    }
  },
};

let lima = {
  name: 'lima',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookPerCust: 4.6,
  salesTotals: [],
  grandTotal: 0,
  hourlyCustomers: function() {
    for (let hour = 0; hour < hours.length; hour++) {
      
      let generateNumber = generateRange(this.minCustPerHour, this.maxCustPerHour);


      let customerSales = Math.round(generateNumber * this.avgCookPerCust);
      this.salesTotals.push(`${hours[hour]}: total sales ${customerSales}`);
      this.grandTotal = this.grandTotal + customerSales;
    }
  },
};




function generateLineItems(store) {
  
  let parentEl = document.querySelector(`#${store.name}`);

  
  for (let total = 0; total < store.salesTotals.length; total++) {

    let newItem = document.createElement('li');

    newItem.innerText = store.salesTotals[total];

    parentEl.appendChild(newItem);
  }
  let lastItem = document.createElement('li');
  lastItem.innerText = store.grandTotal;
  parentEl.appendChild(lastItem);
}



seattle.hourlyCustomers();
tokyo.hourlyCustomers();
dubai.hourlyCustomers();
paris.hourlyCustomers();
lima.hourlyCustomers();
generateLineItems(seattle);
generateLineItems(tokyo);
generateLineItems(dubai);
generateLineItems(paris);
generateLineItems(lima);
