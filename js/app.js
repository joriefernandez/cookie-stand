'use strict';

//store hours
var hours =[];

//1st and Pike Location
var firstAndPike = {
  storeName: '1st and Pike',
  storeHours: 15,
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiesPerCust: 6.3,
  customers:[],
  cookies:[],
  totalSale: 0,
  
  initializeCustomers: function(){
    for (var index = 0; index < this.storeHours; index++){
     
      this.customers.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
      console.log(this.customers[index]);
    }
    
  },  

  calculateCookies: function(){
    for (var index = 0; index < this.storeHours; index++){
      this.cookies.push(Math.ceil(this.customers[index] * this.avgCookiesPerCust));
    }
  }, 

  calculateTotalSale: function(){

    for (var index = 0; index < this.storeHours; index++){
      this.totalSale += Math.ceil(this.cookies[index]);
    }   
  },
  
  displaySales: function(){
    this.initializeCustomers();
    this.calculateCookies();
    this.calculateTotalSale();

    var elem = document.createElement('h2').textContent = this.storeName;
    document.write(elem);  
    //List sales
    var ulElem = document.createElement('ul');

    for(var index = 0; index < hours.length; index++){
      var liElem = document.createElement('li');
      liElem.textContent = hours[index] + this.cookies[index] + ' cookies';   
      ulElem.appendChild(liElem);
    }

    var totalElem = document.createElement('li');
    totalElem.textContent = 'Total:' + this.totalSale + ' cookies';
    ulElem.appendChild(totalElem);
    document.body.appendChild(ulElem);
  }
  
};

/**
 *  SeaTac Airport
 */


var seatacAirport = {
  storeName: 'SeaTac Airport',
  storeHours: 15,
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiesPerCust: 1.2,
  customers:[],
  cookies:[],
  totalSale: 0,
  
  initializeCustomers: function(){
    for (var index = 0; index < this.storeHours; index++){
     
      this.customers.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
      console.log(this.customers[index]);
    }
    
  },  

  calculateCookies: function(){
    for (var index = 0; index < this.storeHours; index++){
      this.cookies.push(Math.ceil(this.customers[index] * this.avgCookiesPerCust));
    }
  }, 

  calculateTotalSale: function(){

    for (var index = 0; index < this.storeHours; index++){
      this.totalSale += Math.ceil(this.cookies[index]);
    }   
  },
  
  displaySales: function(){
    this.initializeCustomers();
    this.calculateCookies();
    this.calculateTotalSale();

    var elem = document.createElement('h2').textContent = this.storeName;
    document.write(elem);  
    //List sales
    var ulElem = document.createElement('ul');

    for(var index = 0; index < hours.length; index++){
      var liElem = document.createElement('li');
      liElem.textContent = hours[index] + this.cookies[index] + ' cookies';   
      ulElem.appendChild(liElem);
    }

    var totalElem = document.createElement('li');
    totalElem.textContent = 'Total:' + this.totalSale + ' cookies';
    ulElem.appendChild(totalElem);
    document.body.appendChild(ulElem);
  }
  
};

/*
Seattle Center
*/

var seattleCenter = {
  storeName: 'Seattle Center',
  storeHours: 15,
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiesPerCust: 3.7,
  customers:[],
  cookies:[],
  totalSale: 0,
  
  initializeCustomers: function(){
    for (var index = 0; index < this.storeHours; index++){
     
      this.customers.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
      console.log(this.customers[index]);
    }
    
  },  

  calculateCookies: function(){
    for (var index = 0; index < this.storeHours; index++){
      this.cookies.push(Math.ceil(this.customers[index] * this.avgCookiesPerCust));
    }
  }, 

  calculateTotalSale: function(){

    for (var index = 0; index < this.storeHours; index++){
      this.totalSale += Math.ceil(this.cookies[index]);
    }   
  },
  
  displaySales: function(){
    this.initializeCustomers();
    this.calculateCookies();
    this.calculateTotalSale();

    var elem = document.createElement('h2').textContent = this.storeName;
    document.write(elem);  
    //List sales
    var ulElem = document.createElement('ul');

    for(var index = 0; index < hours.length; index++){
      var liElem = document.createElement('li');
      liElem.textContent = hours[index] + this.cookies[index] + ' cookies';   
      ulElem.appendChild(liElem);
    }

    var totalElem = document.createElement('li');
    totalElem.textContent = 'Total:' + this.totalSale + ' cookies';
    ulElem.appendChild(totalElem);
    document.body.appendChild(ulElem);
  }
  
};

/*
Capitol Hill
*/

var capitolHill = {
  storeName: 'Capitol Hill',
  storeHours: 15,
  minCustomer: 20,
  maxCustomer: 38,
  avgCookiesPerCust: 2.3,
  customers:[],
  cookies:[],
  totalSale: 0,
  
  initializeCustomers: function(){
    for (var index = 0; index < this.storeHours; index++){
     
      this.customers.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
      console.log(this.customers[index]);
    }
    
  },  

  calculateCookies: function(){
    for (var index = 0; index < this.storeHours; index++){
      this.cookies.push(Math.ceil(this.customers[index] * this.avgCookiesPerCust));
    }
  }, 

  calculateTotalSale: function(){

    for (var index = 0; index < this.storeHours; index++){
      this.totalSale += Math.ceil(this.cookies[index]);
    }   
  },
  
  displaySales: function(){
    this.initializeCustomers();
    this.calculateCookies();
    this.calculateTotalSale();

    var elem = document.createElement('h2').textContent = this.storeName;
    document.write(elem);  
    //List sales
    var ulElem = document.createElement('ul');

    for(var index = 0; index < hours.length; index++){
      var liElem = document.createElement('li');
      liElem.textContent = hours[index] + this.cookies[index] + ' cookies';   
      ulElem.appendChild(liElem);
    }

    var totalElem = document.createElement('li');
    totalElem.textContent = 'Total:' + this.totalSale + ' cookies';
    ulElem.appendChild(totalElem);
    document.body.appendChild(ulElem);
  }
  
};

/**
 * Alki
 */
var alki = {
  storeName: 'Alki',
  storeHours: 15,
  minCustomer: 2,
  maxCustomer: 16,
  avgCookiesPerCust: 4.6,
  customers:[],
  cookies:[],
  totalSale: 0,
  
  initializeCustomers: function(){
    for (var index = 0; index < this.storeHours; index++){
     
      this.customers.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
      console.log(this.customers[index]);
    }
    
  },  

  calculateCookies: function(){
    for (var index = 0; index < this.storeHours; index++){
      this.cookies.push(Math.ceil(this.customers[index] * this.avgCookiesPerCust));
    }
  }, 

  calculateTotalSale: function(){

    for (var index = 0; index < this.storeHours; index++){
      this.totalSale += Math.ceil(this.cookies[index]);
    }   
  },
  
  displaySales: function(){
    this.initializeCustomers();
    this.calculateCookies();
    this.calculateTotalSale();

    var elem = document.createElement('h2').textContent = this.storeName;
    document.write(elem);  
    //List sales
    var ulElem = document.createElement('ul');

    for(var index = 0; index < hours.length; index++){
      var liElem = document.createElement('li');
      liElem.textContent = hours[index] + this.cookies[index] + ' cookies';   
      ulElem.appendChild(liElem);
    }

    var totalElem = document.createElement('li');
    totalElem.textContent = 'Total:' + this.totalSale + ' cookies';
    ulElem.appendChild(totalElem);
    document.body.appendChild(ulElem);
  }
  
};




//fill out hours 

function initializeHours(){
  console.log('initializing hours..')
  var openTime = 6; //6 am
  var closeTime = 20; //8 pm; 8 + 12
  var timeLength = (closeTime - openTime)+ 1;

  for (var index = 0; index < timeLength; index++){
    if(openTime <= 12){
      hours[index] = openTime + 'am:';
    } else {
      
      hours[index] = (openTime - 12) + 'pm:';
    }
    openTime += 1;
    console.log(hours[index]);
  }
}
// Function calls

initializeHours();
firstAndPike.displaySales();
seatacAirport.displaySales();
seattleCenter.displaySales();
capitolHill.displaySales();
alki.displaySales();

