const orderButtton = document.getElementById('orderButton');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const cartItems = document.querySelectorAll('.ll');


function clearCart() {
    cartItems.forEach(item => {item.value = 0;
    });
}

orderButtton.addEventListener('click', () => {
    popup.classList.remove('hidden');
    clearCart();
});

closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
});