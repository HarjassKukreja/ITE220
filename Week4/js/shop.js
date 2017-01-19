var products = [
    "Brooklyn T-Shirt White",
    "Brooklyn T-Shirt Black",
    "Apple Watch",
    "Android Phone"];

var prices = [10,10,199,159];


var customerName = "Singh";


var customerElement= document.getElementById("customer-name");
customerElement.textContent = customerName;



var totalPrice = prices[0] + prices[1] + prices[2] + prices[3];
var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent= totalPrice;


var productsText ="";
var productsElement = document.getElementById("product-list");

productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[0]+"</span>"+products[0]+"</li>";
productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[1]+"</span>"+products[1]+"</li>";
productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[2]+"</span>"+products[2]+"</li>";
productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[3]+"</span>"+products[3]+"</li>";

productsElement.innerHTML = productsText;

var now = "";
now = new Date().getHours()
var text="";
if (now < 12) {
	text="Good Morning";
} else if (now < 17) {
	text="Good Afternoon";
} 
else {
	text="Good Evening";
}

document.getElementById("time").innerHTML = text;



