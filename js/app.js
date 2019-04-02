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


//Function to display hourly sales per location
function displaySalesPerLocation(curStore){

  curStore.initializeCustomers();
  curStore.calculateCookies();
  curStore.calculateTotalSale();

  displayStoreName(curStore.storeName);
  //List sales
  var ulElem = document.createElement('ul');
  

  for(var index = 0; index < hours.length; index++){
    var liElem = document.createElement('li');
    liElem.textContent = hours[index] + curStore.cookies[index] + ' cookies';   
    ulElem.appendChild(liElem);
  }

  var totalElem = document.createElement('li');
  totalElem.textContent = 'Total:' + curStore.totalSale + ' cookies';
  ulElem.appendChild(totalElem);
  document.body.appendChild(ulElem);
}

//Function to display store name
function displayStoreName(storeName){
  var elem = document.createElement('h2').textContent = storeName;
  document.write(elem);  
}

initializeHours();

//Display 1st and Pike info
displaySalesPerLocation(firstAndPike);
