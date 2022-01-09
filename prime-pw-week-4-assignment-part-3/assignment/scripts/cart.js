console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket= [];

function addItem(item){
  //push new item into Basket
  basket.push(item);
  console.log("added", item, "to the basket");
  return  true;
}
console.log(addItem());
addItem("wrench")
addItem("poodle")
addItem("horse")

console.log(basket, 'in the basket');

function empty(){
  basket.splice(0, basket.length);
}//empty the basket.
empty(basket)
console.log("Did I empty the basket?", basket);
