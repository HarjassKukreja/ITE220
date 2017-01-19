// var products = [
//     "Brooklyn T-Shirt White",
//     "Brooklyn T-Shirt Black",
//     "Apple Watch",
//     "Android Phone"];

// var prices = [10,10,199,159];


// var customerName = "Singh";


// var customerElement= document.getElementById("customer-name");
// customerElement.textContent = customerName;



// var totalPrice = prices[0] + prices[1] + prices[2] + prices[3];
// var totalPriceElement = document.getElementById("total-price");
// totalPriceElement.textContent= totalPrice;


// var productsText ="";
// var productsElement = document.getElementById("product-list");

// productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[0]+"</span>"+products[0]+"</li>";
// productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[1]+"</span>"+products[1]+"</li>";
// productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[2]+"</span>"+products[2]+"</li>";
// productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[3]+"</span>"+products[3]+"</li>";

// productsElement.innerHTML = productsText;

// new Date() .getHours()


var shop = {
    customerName: "Singh",
    totalPrice: 0,
    products: [
        "Brooklyn T-Shirt White",
        "Brooklyn T-Shirt Black",
        "Apple Watch",
        "Android Phone"
    ],
    prices: [10, 10, 199, 159],

    // display customer name function
    
    displayCustomerName: function() {
    var customerElement = document.getElementById("customer-name");
    customerElement.textContent = this.customerName;
    },

    // display customer name function
    displayCustomerList: function() {
        var productsText = "";
        var productsElement = document.getElementById("product-list");
        
        for ( var i = 0 ; i < shop.products.length; i++){
    productsText += "<li class='list-group-item'><span class='badge'>$" + shop.prices[i] + "</span>" + shop.products[i] + "</li>";
        };
        
    productsElement.innerHTML = productsText;
    },
    

    
    // calculate total price function
    
    calculateTotalPrice: function() {
        return (this.prices[0] + this.prices[1] + this.prices[2] + this.prices[3] ) * 0.75;
    },
    
    // display total price function
    
    displayTotalPrice: function() {
        this.totalPrice = this.calculateTotalPrice();
        var totalPriceElement = document.getElementById("total-price");
        totalPriceElement.textContent = this.calculateTotalPrice();
    
    }

}
shop.displayCustomerName();
shop.displayCustomerList();
shop.displayTotalPrice();


//Aj. some  taken in js.