const decreaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);

  if (itemval.value > 0) {
    itemval.value = parseInt(itemval.value) - 1;
  } else {
    alert("Not to be less than 0");
  }
};

const increaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);

  itemval.value = parseInt(itemval.value) + 1;
};

const decreaseNumber1 = (incdec, itemprice) => {
  var itemval1 = document.getElementById(incdec);

  if (itemval1.value > 0) {
    itemval1.value = parseInt(itemval1.value) - 1;
  } else {
    alert("Not to be less than 0");
  }
};
const increaseNumber1 = (incdec, itemprice) => {
  var itemval1 = document.getElementById(incdec);
  itemval1.value = parseInt(itemval1.value) + 1;
};
const total = (item1, item2, tot) => {
  var itemval1 = document.getElementById(item1);
  var itemval = document.getElementById(item2);
  var itemval2 = document.getElementById(tot);
  itemval2.value =
    parseInt(itemval.value) * 74.99 + parseInt(itemval1.value) * 54.99;
};
const warn = () => {
  alert("Saved for next time");
};
const placed = (tot) => {
  var itemval2 = document.getElementById(tot);
  alert(
    "  Your price for the order is " +
      parseFloat(itemval2.value) +
      "  $ Your order is palced successfully"
  );
};

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn = (tot, itembox3) => {
  modal.style.display = "block";

  var itemval2 = document.getElementById(tot);
  var itemval3 = document.getElementById(itembox3);
  itemval3.value = parseFloat(itemval2.value);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
