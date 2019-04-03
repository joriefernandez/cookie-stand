'use strict';

//store hours
var hours =[];
// Length of store hours
var timeLength = 15;
// list of all store locations
var allStores = [];

//sale totals per hour
var hourlyTotal = [];

//Constructor for store location
function StoreLocationSales(name, storeTimeLength, minCust, maxCust, avgCookies){
  this.storeName = name;
  this.minCustomer = maxCust;
  this.maxCustomer = avgCookies;
  this.avgCookiesPerCust = avgCookies;
  this.customers = [];
  this.cookies = [];
  this.totalSale = 0;
  this.storeHours = storeTimeLength;

  //methods
  //fill out customer array
  this.initializeCustomers =function(){
    for (var index = 0; index < this.storeHours; index++){
      this.customers.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    }
  };

  this.calculateCookies = function(){
    for (var index = 0; index < this.storeHours; index++){
      this.cookies.push(Math.ceil(this.customers[index] * this.avgCookiesPerCust));
    }
  };

  this.calculateTotalSale = function(){

    for (var index = 0; index < this.storeHours; index++){
      this.totalSale += Math.ceil(this.cookies[index]);
    }
  };

  this.render = function(tableElement){


    tableElement.appendChild(makeTableRow(this.storeName, this.cookies, this.totalSale));

  };

  allStores.push(this);

}



//fill out hours

function initializeHours(){
  console.log('initializing hours..');
  var openTime = 6; //6 am
  var closeTime = 20; //8 pm; 8 + 12
  var timeLength = (closeTime - openTime)+ 1;

  for (var index = 0; index < timeLength; index++){
    if(openTime <= 12){
      hours[index] = `${openTime}:00am`;
    } else {
      hours[index] = `${openTime - 12}:00pm`;
    }
    openTime += 1;

  }
}


//Function to create an element
function createPageElement(element){
  return document.createElement(element);
}

//Function to create a table header
function makeHeader(headerArr){
  var trEl = createPageElement('tr');

  //create empty header
  createTableItem('', trEl, 'th');

  //create hour headers
  for(var index = 0; index < headerArr.length; index++){
    createTableItem(headerArr[index], trEl, 'th');
  }

  //create total header
  createTableItem('Daily Location Total', trEl, 'th');

  return trEl;
}

//Function to create table rows
function makeTableRow(store, storeDataArr, total ){
  // make a tr
  var trEl = createPageElement('tr');

  //create store name cell
  createTableItem(store, trEl, 'td');

  //create cookie sales cells
  for (var index = 0; index < storeDataArr.length; index++){
    createTableItem(storeDataArr[index], trEl, 'td');
  }

  //add total sales
  createTableItem(total, trEl, 'td');
  return trEl;
}

//function to create table data item
function createTableItem(data, parentTag, currentTag){
  var tagEl = createPageElement(currentTag);
  tagEl.textContent = data;
  parentTag.appendChild(tagEl);
}

//create table
function initializeTable(){

  //List sales
  var tableElem = createPageElement('table');
  tableElem.appendChild(makeHeader(hours));
  return tableElem;
}

//Function to process store locations
function processDailySales(){
  for (var index = 0; index < allStores.length; index++){
    allStores[index].initializeCustomers();
    allStores[index].calculateCookies();
    allStores[index].calculateTotalSale();

  }

}

//Function to render all store location sales
function renderAllDailySales(){
  for (var index = 0; index < allStores.length; index++){
    allStores[index].render(tableElem);
  }
}

//Function to compute hourly total
function calculateHourlyTotal(){
  var theArr = [];


  for (var index = 0; index < hours.length; index++){
    var currentTotal = 0;
    for (var loc = 0; loc < allStores.length; loc++){

      currentTotal += allStores[loc].cookies[index];

    }
    theArr[index] = currentTotal;
    console.log(theArr[index]);
  }
  return theArr;
}

//Function to get sum in an array
function getSum(numArr){
  var total = 0;
  for (var index = 0; index < numArr.length; index++){
    total += numArr[index];
  }

  return total;
}

//Function to display totals in a table row
function makeTotalRow(tableElement){
  //compute total per hour of all locations
  hourlyTotal = calculateHourlyTotal();
  //add total
  tableElement.append(makeTableRow('Totals', hourlyTotal, getSum(hourlyTotal) ));
}


/*******************
 *  FUNCTION CALLS
 *
 *******************/

//initialize hours
initializeHours();

// create store locations
new StoreLocationSales('1st and Pike', timeLength, 23, 65, 6.3);
new StoreLocationSales('SeaTac Airport', timeLength, 3, 24, 1.2);
new StoreLocationSales('Seattle Center', timeLength, 11, 38, 3.7);
new StoreLocationSales('Capitol Hill', timeLength, 20, 38, 2.3);
new StoreLocationSales('Alki', timeLength, 2, 16, 4.6);

//Calculate sales per location
processDailySales();


//Display information to page using table

var divEl = document.getElementById('storeSales');
var tableElem = initializeTable();

//Render all store location data
renderAllDailySales();

makeTotalRow(tableElem);

//display the store location
divEl.append(tableElem);

