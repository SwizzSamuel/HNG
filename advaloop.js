//1
const basket = ['apples', 'oranges', 'grapes'];

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 50,
}

for ( let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}
//2
basket.forEach(item => {
    console.log(item); 
})
//for of
for (item of detailedBasket) {
    console.log(item);
}
//for in
for(item in Basket) {
    console.log(item);
}