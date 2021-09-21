hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const storeLocation = [
    {
        location: 'Seattle',
        minCustomer: 23,
        maxCustomer: 65,
        avgCookieSales: 6.3,
        totalCookies: null
    },
    {
        location: 'Tokyo',
        minCustomer: 3,
        maxCustomer: 24,
        avgCookieSales: 1.2,
        totalCookies: null
    },
    {
        location: 'Dubai',
        minCustomer: 11,
        maxCustomer: 38,
        avgCookieSales: 63.7,
        totalCookies: null
    },
    {
        location: 'Paris',
        minCustomer: 20,
        maxCustomer: 38,
        avgCookieSales: 2.3,
        totalCookies: null
    },
    {
        location: 'Lima',
        minCustomer: 2,
        maxCustomer: 16,
        avgCookieSales: 4.6,
        totalCookies: null
    }
];

const randomCustomerGen = function (maxCustomer, minCustomer) {
    return Math.floor(Math.random() * (maxCustomer - minCustomer + 1) + minCustomer);
}

