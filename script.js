const decreaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    
    if(itemval.value>0){
    itemval.value = parseInt(itemval.value) - 1;
   
}
  else{
          alert('Not to be less than 0');
     }
}
const increaseNumber = (incdec, itemprice) => {
var itemval = document.getElementById(incdec);

itemval.value = parseInt(itemval.value) + 1;


}


const decreaseNumber1 = (incdec, itemprice) => {
    var itemval1 = document.getElementById(incdec);
  
    if(itemval1.value>0){
    itemval1.value = parseInt(itemval1.value) - 1;
   
    }
    else{
        alert('Not to be less than 0');
    }
    }
const increaseNumber1 = (incdec, itemprice) => {
var itemval1 = document.getElementById(incdec);

itemval1.value = parseInt(itemval1.value) + 1;


}


const warn=()=> {
    alert('Saved for next time');
}
const placed=()=> {
    alert('Your order is palced successfully');
}