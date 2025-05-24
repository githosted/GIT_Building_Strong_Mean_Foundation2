displayCart = function(){
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = '';

    // Add logo at the top of the cart
    cartList.innerHTML += `
        <div class="text-center mb-4">
            <img src="../Images/background.jpg" alt="Snackers Point Logo" style="height: 60px; width: auto;">
        </div>
    `;

    console.log(cartItems);

    cartItems.forEach(item =>{
        const cartCard = `
        <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="https://via.placeholder.com/150" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Product Title</h5>
                    <p class="card-text">Description of the product goes here.</p>
                    <p class="card-text"><small class="text-muted">$10.00</small></p>
                    <button class="btn btn-danger">Remove</button>
                </div>
            </div>
        </div>
    </div>
        `;
        cartList.innerHTML += cartCard;
    })
}