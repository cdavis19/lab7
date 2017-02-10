
var groceryItem1 = {
name: "Bananas",
price: 2.00
};

var groceryItem2 = {
  name: "Apples",
  price: 1.00
} ;

var groceryItem3 = {
  name: "Yogurt",
  price: 1.00
};

var groceryItem4 = {
  name: "Chocolate milk",
  price: 3.00
};

var groceryItem5 = {
  name:"Uncrustables",
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
groceryArray[0] = groceryItem1;
groceryArray[1] = groceryItem2;
groceryArray[2] = groceryItem3;
groceryArray[3] = groceryItem4;
groceryArray[4] = groceryItem5;

// console.log(groceryArray.name);

var sum = 0;

var receiptPaper = document.createElement("div");
receiptPaper.id = "receiptContainer";
document.body.appendChild(receiptPaper);
// receiptContainer.style = "background-color: black";
// var receiptContent = document.getElementById("receiptContainer");
var shoppingList = document.createElement("ul")
receiptContainer.appendChild(shoppingList);
receiptPaper.style = "color: black; text-align: center; background-color: rgba(176, 108, 7, 0.76); font-family: sans-serif; font-size: 18px;"



groceryArray.forEach(function(item)
                     { console.log("item " + groceryArray.name + " price "  + groceryArray.price + ".00");
                     sum += item.price;

                     var itemName = document.createElement("p");
                    itemName.textContent = item.name;
                    //  receiptContainer.appendChild(itemName);
                    //  itemName.className = "nameTable";




                     var itemPrice = document.createElement("p");
                     itemPrice.textContent = itemName.textContent + " $" + item.price + ".00";
                     receiptContainer.appendChild(itemPrice);
                     itemPrice.className = "priceSpan";

                     






                   } );

                   var displayTotal = document.createElement("p");
                   displayTotal.textContent = "Your grand total is $" + sum + ".00";
                   receiptContainer.appendChild(displayTotal);


// console.log("total is " + "$" +  sum + ".00");
