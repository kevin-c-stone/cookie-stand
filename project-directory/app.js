'use strict';

const locationsTable = document.getElementById('store-locations');

const hoursOfOperation = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

function Location(name, minCustPerHour, maxCustPerHour, avgSalePerCust) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgSalePerCust = avgSalePerCust;
  this.salesTotals = [];

  Location.allLocations.push(this);
}

Location.allLocations = [];

Location.prototype.randomNumberOfCustomers = function() {
  return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour);
}

Location.prototype.fillHourlySalesArray = function() {
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
    this.salesTotals.push(Math.ceil(salesPerHour));
  }
}

const seattle = new Location('Seattle', 23, 65, 6.3);
const tokyo = new Location('Tokyo', 3, 24, 1.2);
const dubai = new Location('Dubai', 11, 38, 3.7);
const paris = new Location('Paris', 20, 38, 2.3);
const lima = new Location('Lima', 2, 16, 4.6);



function fillHourlySalesArrayAllLocations() {
  for (let i = 0; i < Location.allLocations.length; i++) {
    const currentLocation = Location.allLocations[i];
    currentLocation.fillHourlySalesArray();
  }
}

fillHourlySalesArrayAllLocations();


function _makeElement(tag, parent, text) {
  
  const element = document.createElement(tag);
  
  parent.appendChild(element);

  if (text) {
    element.textContent = text;
  }
  return element; 
}


Location.prototype.renderSingleLocation = function(body) {
  let total = 0;

  const rowEl = document.createElement('tr');
  body.appendChild(rowEl);
  
  const thElem = _makeElement('th', rowEl, this.name);
  
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let cookiesThisHour = this.salesTotals[i];
    total += cookiesThisHour;
    _makeElement('td', rowEl, cookiesThisHour);
  }
  _makeElement('td', rowEl, total)

}

function renderAllLocations() {
  let tbodyElem = _makeElement('tbody', locationsTable, null);
  for (let i = 0; i < Location.allLocations.length; i++) {
    Location.allLocations[i].renderSingleLocation(tbodyElem);
  }

}


function makeTheFooter() {
  const tfootElem = _makeElement('tfoot', locationsTable, null);
  const rowEl = _makeElement('tr', tfootElem, null);
  _makeElement('th', rowEl, 'Total');
  let hourlyTotal = 0;
  let grandTotal = 0;
  
  for (let i = 0; i < hoursOfOperation.length; i++) {
    for (let j = 0; j < Location.allLocations.length; j++) {
      let currentLocation = Location.allLocations[j];
      hourlyTotal += currentLocation.salesTotals[i]
    }
    
    _makeElement('td', rowEl, hourlyTotal);
    grandTotal += hourlyTotal;
    hourlyTotal = 0;
  }
  
  _makeElement('td', rowEl, grandTotal);
}

renderAllLocations();
makeTheFooter();