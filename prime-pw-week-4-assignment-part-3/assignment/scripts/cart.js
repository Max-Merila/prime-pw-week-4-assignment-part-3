console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket= [];
let empty = [];

function addItem(item){
  console.log("added", item, "to the basket");
  //push new item into Basket
  basket.push(item);
  return  true;
}
console.log(addItem());
addItem("wrench")
addItem("poodle")
addItem("horse")

console.log(basket, 'in the basket');
