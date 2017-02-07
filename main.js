var groceryItem = {
name: "bananas",
price: 2.00
};

var groceryItem2 = {
  name: "apples",
  price: 1.00
} ;

var groceryItem3 = {
  name: "yogurt",
  price: 1.00
};

var groceryItem4 = {
  name: "chocolate milk",
  price: 3.00
};

var groceryItem5 = {
  name:"uncrustables",
  price: 6.00
};

// var groceryArray = [groceryItem.name, groceryItem.price,
//               groceryItem2.name, groceryItem2.price,
//               groceryItem3.name, groceryItem3.price,
//               groceryItem4.name, groceryItem4.price,
//               groceryItem5.name, groceryItem5.price];



// groceryArray.forEach(function(groceryList) {
//   console.log(groceryList)
// });


var groceryArray = [];
groceryArray[0] = groceryItem;
groceryArray[1] = groceryItem2;
groceryArray[2] = groceryItem3;
groceryArray[3] = groceryItem4;
groceryArray[4] = groceryItem5;

// console.log(groceryArray.name);

var sum = 0;

groceryArray.forEach(function(groceryArray)
                     { console.log("item " + groceryArray.name + " price "  + groceryArray.price + ".00"); sum += groceryArray.price; } );


console.log("total is " + "$" +  sum + ".00");
