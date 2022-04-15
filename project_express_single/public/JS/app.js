'use strict';

const API = 'https://raw.githubusercontent.com/Raimon2009/online-store-api/master/responses';


const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
    },
    mounted() {
        console.log(this);
    }
});

// class NewProducts {
//     constructor(number, name, price) {
//         this.number = number;
//         this.name = name;
//         this.price = price;
//     }
// }
// let products = [
//     new NewProducts(0, 'Blue jacket', 52.00,),
//     new NewProducts(1, 'Red shirt', 52.00,),
//     new NewProducts(2, 'Blue sweater with hat', 52.00),
//     new NewProducts(3, 'Blue T-shirt', 52.00),
//     new NewProducts(4, 'White sweater', 52.00),
//     new NewProducts(5, 'White T-shirt', 52.00),
//     new NewProducts(6, 'White shirt', 52.00),
//     new NewProducts(7, 'Black jacket', 52.00),
//     new NewProducts(8, 'Green T-shirt', 52.00),
// ];
// let basket = {};
// let basketTotal = document.querySelector('.basketTotal');
// let cartIconWrap = document.querySelector('.cartIconWrap')
// let basketHidden = document.querySelector('.basket')
// let basketTotalValue = document.querySelector('.basketTotalValue')

// cartIconWrap.addEventListener('mouseover', function () {
//     basketHidden.classList.toggle('hidden_two');
// });
// cartIconWrap.addEventListener('mouseout', function () {
//     basketHidden.classList.toggle('hidden_two');
// });

// let forAddToBasketClick = document.querySelectorAll('button[data-id]');
// forAddToBasketClick.forEach(function (button) {
//     button.addEventListener('click', clickHandler)
// });

// function clickHandler(e) {
//     const id = e.currentTarget.getAttribute('data-id');
//     AddToBasketTotal(id)
// }

// function AddToBasketTotal(id) {
//     summProduct();
//     checkIdInBasket(id);
//     addProductInBasket(id)
//     summProductInBasket(id)
// }

// function summProduct() {
//     let span = document.querySelector('.cartIconWrap span');
//     span.textContent++;
// }

// function checkIdInBasket(id) {
//     if (!(id in basket)) {
//         basket[id] = 1;
//     } else {
//         basket[id]++;
//     }
// }

// function addProductInBasket(id) {
//     let checkId = document.querySelector(`.productCount[data-id="${id}"]`)
//     if (checkId) {
//         summProducts(id);
//         addCount(id);
//     } else {
//         createNewproductInBasket(id)
//     }
// }

// function summProducts(id) {
//     let quantytyProducts = document.querySelector(`.productCount[data-id="${id}"]`)
//     quantytyProducts.textContent++;
// }

// function addCount(id) {
//     let countUp = document.querySelector(`.productTotalRow[data-id="${id}"]`)
//     let totalPrice = basket[id] * products[id].price
//     countUp.textContent = totalPrice;
// }

// function createNewproductInBasket(id) {
//     let newString = `
//         <div class="basketUp">
//             <div>${products[id].name}</div>
//             <div>
//                 <span class="productCount" data-id="${id}">1</span> шт.
//             </div>
//             <div>$${products[id].price}</div>
//             <div>
//                 $<span class="productTotalRow" data-id="${id}">${products[id].price}</span>
//             </div>
//         </div>
//     `;
//     basketTotal.insertAdjacentHTML('beforebegin', newString);
// }

// function summProductInBasket() {
//     let totalNumber = 0;
//     for (let id in basket) {
//         totalNumber += basket[id] * products[id].price
//     }
//     basketTotalValue.textContent = totalNumber;
// }