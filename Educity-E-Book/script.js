

// $('.cart_btn').click(function(){
//   var cart_value = parseInt($('#cart').html());
//   $('#cart').html(cart_value+1);
// });



let btn = document.querySelectorAll('.cart_btn')
for (let button of btn) { 
    button.addEventListener('click', (e) => {
     const et = e.target.value;
        const cart = document.querySelector('#cart');
        let cart_value = parseInt(cart.innerHTML);
        cart.innerHTML = cart_value + 1;
        console.log(et);
        
    })
    }