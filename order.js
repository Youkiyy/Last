

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const placeOrderButton = document.getElementById('place-order');
    let cart = [];
    let totalPrice = 0;

    // Add event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const name = product.getAttribute('data-name');
            const price = parseFloat(product.getAttribute('data-price'));

            // Add product to cart
            cart.push({ name, price });
            totalPrice += price;
            updateCart();
        });
    });

    // Update the cart display
    function updateCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(3)}`;
            cartItems.appendChild(li);
        });
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(3)}`;
    }

    // Place order functionality
    placeOrderButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert(`Order placed! Total price: $${totalPrice.toFixed(3)}`);
            cart = [];
            totalPrice = 0;
            updateCart();
        } else {
            alert('Your cart is empty!');
        }
    });
});


let cart=0;
let cartscore=document.getElementById("cart1");
function tap(){
   cart++;
     cartscore.textContent = cart;
}
function reject() {
    if(cart > 0) { 
        cart--;
        cartscore.textContent = cart;
        prompt("What do you want to cancel?");
        alert("Your order has been cancelled!")
    }
}

// function rejectOrder() {
//     cart = 0;  
//     cartscore.textContent = cart;
//     alert("Order has been rejected. Cart has been cleared.");
// }