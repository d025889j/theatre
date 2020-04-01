
const show = document.getElementById("shows");
const showPrice = document.getElementById("showPrice");
const seats = document.getElementById("seats");
const deliveryCost = document.getElementById("deliveryCost");
const btnBook = document.getElementById("bookBtn");
const summary = document.getElementById("output");
const delivery = document.querySelectorAll("input[name='delivery']");
const delEticket = document.getElementById("email");
const delPost = document.getElementById("post");
const delBox = document.getElementById("boxOffice");


let ticketPrice = 0.00;
let deliveryPrice = 0.00;
const eticketCost = 0.00;
const postCost = 3.99;
const boxCost = 1.50;
const blank = document.getElementById("blank")
const phantom = document.getElementById("phantom");
const hamilton = document.getElementById("hamilton");
const lion = document.getElementById("lion");
const saigon = document.getElementById("saigon");
const phantomPrice = 79.00;
const hamiltonPrice = 85.00;
const lionPrice = 67.00;
const saigonPrice = 83.00;




delEticket.addEventListener("click", changeDelivery);
delPost.addEventListener("click", changeDelivery);
delBox.addEventListener("click", changeDelivery);
show.addEventListener("change", displayShowprice);
btnBook.addEventListener("click", book);

seats.value = 0;
showPrice.innerText = `-`;
deliveryCost.innerText = `£${deliveryPrice.toFixed(2)}`;

if (showPrice.innerText = "-"){
    document.getElementById("bookBtn").disabled = true;
}

function changeDelivery (){ 
   if (delEticket.checked) {
       deliveryPrice = eticketCost.toFixed(2);
        deliveryCost.innerText = `£${deliveryPrice}`;

    }
    else if (delPost.checked){
        deliveryPrice = postCost.toFixed(2);
        deliveryCost.innerText = `£${deliveryPrice}`;

    }
    else if (delBox.checked){
        deliveryPrice = boxCost.toFixed(2);
        deliveryCost.innerText = `£${deliveryPrice}`;

    }
}

function displayShowprice(){

    if (phantom.selected){
        ticketPrice = phantomPrice.toFixed(2);
        showPrice.innerText = `£${ticketPrice}`;
        document.getElementById("bookBtn").disabled = false;

    }
    else if (hamilton.selected){
        ticketPrice = hamiltonPrice.toFixed(2);
        showPrice.innerText = `£${ticketPrice}`;
        document.getElementById("bookBtn").disabled = false;

    }
    else if (lion.selected){
        ticketPrice = lionPrice.toFixed(2);
        showPrice.innerText = `£${ticketPrice}`;
        document.getElementById("bookBtn").disabled = false;

    }
    else if (saigon.selected){
        ticketPrice = saigonPrice.toFixed(2);
        showPrice.innerText = `£${ticketPrice}`;
        document.getElementById("bookBtn").disabled = false;

    }
    else{
        showPrice.innerText = `-`;
        document.getElementById("bookBtn").disabled = true;

    }
}


function book(){

    if (seats.value <=0){
        summary.innerText = "Ticket Number Required";
    }
    else if (seats.value >0 && seats.value <2){
        let showShow = show.options[show.selectedIndex].innerText;
        let deliveryDelivery = document.querySelector("input[name='delivery']:checked");
        let deliveryNumber = parseFloat(deliveryPrice);
        let totalPrice = ticketPrice * seats.value;
        let finalCost = totalPrice + deliveryNumber;

    
    
        summary.innerText = 
        `Your Order:
        ${seats.value} ticket for ${showShow} at ${showPrice.innerText} per ticket
        Total Ticket Cost : £${totalPrice.toFixed(2)}
    

        Ticket Collection Via ${deliveryDelivery.value}: ${deliveryCost.innerText}
    
        Final Cost: £${finalCost.toFixed(2)}`
        }
        
    else if (seats.value >=6 && seats.value <=9){
    let showShow = show.options[show.selectedIndex].innerText;
    let deliveryDelivery = document.querySelector("input[name='delivery']:checked");
    let totalPrice = ticketPrice * seats.value;
    let deliveryNumber = parseFloat(deliveryPrice);
    let finalCost = totalPrice + deliveryNumber;
    let discount = totalPrice / 100 * 10;
    let discountedTotal = finalCost - discount;

    summary.innerText = 
    `Your Order:
    ${seats.value} tickets for ${showShow} at ${showPrice.innerText} per ticket
    Total Ticket Cost : £${totalPrice.toFixed(2)}
    10% Discount applied at: £${discount.toFixed(2)}

    Ticket Collection Via ${deliveryDelivery.value}: ${deliveryCost.innerText}

    Final Cost: £${discountedTotal.toFixed(2)}`
    }

    else if (seats.value >=10){
        let showShow = show.options[show.selectedIndex].innerText;
        let deliveryDelivery = document.querySelector("input[name='delivery']:checked");
        let totalPrice = ticketPrice * seats.value;
        let deliveryNumber = parseFloat(deliveryPrice);
        let finalCost = totalPrice + deliveryNumber;
        let discount = totalPrice / 100 * 15;
        let discountedTotal = finalCost - discount;
    
        summary.innerText = 
        `Your Order:
        ${seats.value} tickets for ${showShow} at ${showPrice.innerText} per ticket
        Total Ticket Cost : £${totalPrice.toFixed(2)}
        15% Discount applied at: £${discount.toFixed(2)}
    
        Ticket Collection Via ${deliveryDelivery.value}: ${deliveryCost.innerText}
    
        Final Cost: £${discountedTotal.toFixed(2)}`
        }    
    else {
        let showShow = show.options[show.selectedIndex].innerText;
        let deliveryDelivery = document.querySelector("input[name='delivery']:checked");
        let totalPrice = ticketPrice * seats.value;
        let deliveryNumber = parseFloat(deliveryPrice);
        let finalCost = totalPrice + deliveryNumber;
    
        summary.innerText = 
        `Your Order:
        ${seats.value} tickets for ${showShow} at ${showPrice.innerText} per ticket
        Total Ticket Cost : £${totalPrice.toFixed(2)}
    
        
        Ticket Collection Via ${deliveryDelivery.value}: ${deliveryCost.innerText}
    
        Final Cost: £${finalCost.toFixed(2)}`
        }
}
