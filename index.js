// Write your solution in this file!

// 1) Declare customerName to be bob in global scope
var customerName = 'bob';

// 2) Function to return the customerName
function returnCustomerName() {
    return customerName;
}

// 3) Function to modify the customerName variable to uppercase
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 4) Function to set bestCustomer
var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// 5) Function to overwrite the best customer
function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}

// 6) Declare leastFavoriteCustomer in global scope and try to reassign it
const leastFavoriteCustomer = 'some initial value';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; // This will throw an error
}
