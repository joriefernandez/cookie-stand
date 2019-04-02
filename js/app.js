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




// Function calls

initializeHours();
firstAndPike.displaySales();

