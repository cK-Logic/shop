/* drop dowm menu */

var menuicone = document.getElementById("menuicone")
var menuc = document.querySelector(".showdropdowm")

menuicone.addEventListener(`click`, function() {
  menuc.classList.toggle("show_showdropdowm")
})




let cart = document.querySelectorAll("#add-cart")



let cartcount = document.getElementById("#cartcount")


for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener(`click`, () => {
    cartnumbers();
  })
};


function cartnumbers() {
  let productnumber = localStorage.getItem(`cartnumbers`) 
  productnumber = parseInt(productnumber)
  localStorage.setItem(`cartnumbers`, 1)
}




// this is to prevent the <a> to take me home
const link = document.querySelectorAll('#notevent');

link.forEach(link => {
  link.onclick = function() {
    event.preventDefault();
  }
})







const addToCartButtons = document.querySelectorAll(".add-cart");
const addMoreContainer = document.querySelector(".addmore");
const cartTotalElement = document.querySelector("#cart-total");
const cartCountElement = document.querySelector("#cartcount");
let cartTotal = 0;
let cartCount = 0;

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const price = parseFloat(button.parentNode.querySelector("p").textContent.slice(1)); // convert price to a number
    const photoSrc = button.parentNode.parentNode.querySelector(".photocontainer img").src;

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("cart-item");

    const photo = document.createElement("img");
    photo.src = photoSrc;
    itemContainer.appendChild(photo);

    const priceElement = document.createElement("p");
    priceElement.textContent = "$" + price.toFixed(2);
    itemContainer.appendChild(priceElement);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button"); // add a class to the remove button
    itemContainer.appendChild(removeButton);

    addMoreContainer.appendChild(itemContainer);

    cartTotal += price; // update the cart total
    cartTotalElement.textContent = "$" + cartTotal.toFixed(2); // set the text content of the cart total element

    cartCount++; // increment the cart count
    cartCountElement.textContent = cartCount; // update the text content of the cart count element

    removeButton.addEventListener("click", () => {
      itemContainer.remove();
      cartTotal -= price; // update the cart total when an item is removed
      cartTotalElement.textContent = "$" + cartTotal.toFixed(2); // set the text content of the cart total element

      cartCount--; // decrement the cart count
      cartCountElement.textContent = cartCount; // update the text content of the cart count element
    });
  });
});





// pop up

let open = document.getElementById("carticone")
let cartarea = document.querySelector(".popupcontainer")

open.addEventListener("click", function() {
  cartarea.classList.toggle("show-popupcontainer")
})

