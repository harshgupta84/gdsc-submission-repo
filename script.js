
const increaseNumber = (incdec, itemprice) => {
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);
// console.log(itemval.value);

itemval.value = parseInt(itemval.value) + 1;
itemprice.innerHTML  = parseInt(itemprice.innerHTML ) + 15;
product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + 15;
total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
}

const warn=()=> {
    alert('Saved for next time');
}
const placed=()=> {
    alert('Your order is palced successfully');
}