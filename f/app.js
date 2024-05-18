// function hello()
// {
// console.log("hello to everyone");
// }
// setTimeout(hello,4000)
// setTimeout(() => {
//     console.log("hii to everyone");
// }, 2000);

let foodDetails=[
    {
        Id:1,
        name:'Pizza',
        description:'Classic pizza with your favourite toppings',
        price:300 
    },
    {
        Id:2,
        name:'Burger',
        description:'Delicious burger with favourite cheese.',
        price:200
    },
    {
        Id:3,
        name:'Biryani',
        description:'Classic Biryani with green veggies.',
        price:350
    },
    {
        Id:4,
        name:'Noodles',
        description:'Delicious Noodles with pure vaggies.',
        price:400 
     }
]

let cart = JSON.parse(localStorage.getItem('cart')) ||  []; 

function viewItemDetails(foodId){
    // console.log(foodDetails[foodId])
    const selectedItemArray = foodDetails.filter(item=>item.Id === foodId);
   const selectedObject = selectedItemArray[0];
    // console.log('Object',selectedObject)
//inorder to store the data in localstorage we have to store the data in the form of string
    // console.log('JSON stringified object',JSON.stringify(selectedObject));
    const convertedObject = JSON.stringify(selectedObject);

    //localstorage allows the users to store the values in the form of string against a key
    //key here is setectItem and stored values will be appering inside the dev tools application tab and by selecting the localstorage
    localStorage.setItem('selectedItem',convertedObject)
    //naviate to datils page
    window.location.href = 'details.html' 
}  
function goBack(){
    // window.location.href = 'index.html'
    window.history.back()
}
function displayItemDetails(){
const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
const itemDetailsSection = document.getElementById('item-details');
 
//es6 format -${} template literals`
const buildItemDetailsHTML =`
<h2>${selectedItem.name}</h2>
<p>${selectedItem.description}</p>
<p> Price:$${selectedItem.price}</p>
<button onclick="addToCart (${selectedItem.id})"> Add to Cart </button>
`

 itemDetailsSection.innerHTML = buildItemDetailsHTML
}

function addToCart(){
   
    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
    if (selectedItem) {
        cart.push({id:selectedItem.id, name:selectedItem.name, price: selectedItem.price})
        updateCart();
        saveCartToLocalStorage();
        window.location.href = 'checkout.html';
    } else{
 alert('Item not found! ');
    }   
}

function saveCartToLocalStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
 
function updateCart(){
    const cartItemsList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
console.log(cartItemsList,cart)
    //clear previous items
    if(cartItemsList){
        cartItemsList.innerHTML = '';
    let total= 0;

    console.log('cart',cart);
    cart.forEach(item => {
       const listItem = document.createElement('li'); 
       listItem.innerText = `${item.name} - ${item.price}`;
       cartItemsList.appendChild(listItem);
        total += item.price;
    });
    //Update total price
    totalElement.innerText = total 
    }
    

}
function checkout(){
    alert('Checkout process goes here!')
}