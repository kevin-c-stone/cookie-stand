'use strict';

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function StoreLocation(name, minCust, maxCust, avgCookiesPerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.hourlySales = [];
  this.dailySales = 0;
  StoreLocation.all.push(this);
}

StoreLocation.all = [];

StoreLocation.prototype.calcAvgCookiesBought = function() {
  for (let i = 0; i < storeHours.length; i++) {
    let cookiesSales = Math.floor(this.calcRandomCookieSales());

    this.hourlySales.push(cookiesSales);

    this.dailySales = this.dailySales + cookiesSales;
  }
};

StoreLocation.prototype.calcRandomCookieSales = function() {
  return (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) * this.avgCookiesPerCust;
};

StoreLocation.prototype.renderTableRow = function() {
  let parentEl = document.getElementById('sales-data');

  let rowEl = document.createElement('tr');

  let dataEl = document.createElement('td');
  dataEl.innerText = this.name;
  rowEl.appendChild(dataEl);



  for (let i = 0; i < this.hourlySales.length; i++) {
    let dataEl = document.createElement('td');
    dataEl.innerText = this.hourlySales[i];
    rowEl.appendChild(dataEl);
  }

  dataEl = document.createElement('td');
  dataEl.innerText = this.dailySales;
  rowEl.appendChild(dataEl);

  parentEl.appendChild(rowEl);

};

let seattle = new StoreLocation('Seattle', 23, 65, 6.3);
let tokyo = new StoreLocation('Tokyo', 3, 24, 1.2);
let dubai = new StoreLocation('Dubai', 11, 38, 3.7);
let paris = new StoreLocation('Paris', 20, 38, 2.3);
let lima = new StoreLocation('Lima', 2, 16, 4.6);

seattle.calcAvgCookiesBought();
seattle.renderTableRow();

tokyo.calcAvgCookiesBought();
tokyo.renderTableRow();

dubai.calcAvgCookiesBought();
dubai.renderTableRow();

paris.calcAvgCookiesBought();
paris.renderTableRow();

lima.calcAvgCookiesBought();
lima.renderTableRow();

function renderFooter() {

  let parentEl = document.getElementById('sales-data');
  let rowEl = document.createElement('tfoot');
  rowEl.setAttribute('id', 'tablefooter');

  let dataEl = document.createElement('td');
  dataEl.innerText = 'Total';
  rowEl.appendChild(dataEl);

  let gTotal = calculateTotals(dataEl, rowEl);

  dataEl = document.createElement('td');
  dataEl.innerText = gTotal;
  rowEl.appendChild(dataEl);
  parentEl.appendChild(rowEl);
}

renderFooter();

function calculateTotals(elData, elRow) {
let grandTotal = 0;
  for (let i = 0; i < storeHours.length; i++) {

    let elData = document.createElement('td');
    let sum = 0;

    for (let j = 0; j < StoreLocation.all.length; j++) {

      sum = sum + StoreLocation.all[j].hourlySales[i];
      grandTotal = grandTotal + StoreLocation.all[j].hourlySales[i];
    }
    elData.innerText = sum;
    elRow.appendChild(elData);
  }
  return grandTotal;

}



StoreLocation.prototype.render = render;

function render () {
  let parentEl = document.getElementById('sales-data');

  let rowEl = document.createElement('tr');
  parentEl.appendChild(rowEl);
  let dataEl = document.createElement('td');
  dataEl.innerText = this.name;
  rowEl.appendChild(dataEl);



  for (let i = 0; i < this.hourlySales.length; i++) {
    let dataEl = document.createElement('td');
    dataEl.innerText = this.hourlySales[i];
    rowEl.appendChild(dataEl);
  }

  dataEl = document.createElement('td');
  dataEl.innerText = this.dailySales;
  rowEl.appendChild(dataEl); 
}

function updateTotals() {
  let elGrab = document.getElementById('tablefooter');
  elGrab.remove();

  renderFooter();
}

// Form
let applicationForm = document.getElementById('apply');

function newCookieStand(event) {
  event.preventDefault();
  
  let name = event.target.city.value;
  let minCust = parseInt(event.target.minimumCust.value);
  let maxCust = parseInt(event.target.maximumCust.value);
  let avgCookiesPerCust = parseInt(event.target.avgCookieSale.value);
  let hourlySales = [];
  let dailySales = 0;

  let newApplicant = new StoreLocation(name, minCust, maxCust, avgCookiesPerCust, hourlySales, dailySales);
  console.log(newApplicant);

  newApplicant.calcAvgCookiesBought();
  newApplicant.render();
  applicationForm.reset();
  updateTotals();
}

applicationForm.addEventListener('submit', newCookieStand);



// newApplicant.calcAvgCookiesBought();
// newApplicant.renderTableRow();

