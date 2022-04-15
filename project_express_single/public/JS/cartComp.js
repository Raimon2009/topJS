Vue.component('cart', {
    data() {
        return {
            cartItems: [],
            showCart: false,
            counter: 0,
        }
    },
    methods: {
        addProduct(product) {
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;
                            this.counter++;
                        } else {
                            let prod = Object.assign({ quantity: 1 }, product);
                            this.cartItems.push(prod);
                            this.counter++;
                        }
                    } else {
                        alert('Error');
                    }
                })
        },
        remove(item) {
            this.$parent.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                            this.counter--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                            this.counter--;
                        }
                    }
                })
        },
    },
    template: ` 
        <div>   
            <div class="people__card" @mouseover="showCart = !showCart">
                <img class="header__item" src="./img/people.svg" alt="logo">
                <span class="cartIconWrap">
                    <a class="cartIcon" href="card.html"><img class="header__item" src="./img/cart.svg" alt="logo"></a>
                    <span >{{ counter }}</span>                                
                </span>                                                                       
            </div>     
            <div v-show="showCart">
                <p class="emptyBasket" v-if="!cartItems.length">Корзина пуста</p>
                <basket-up ref="basket-up"  v-for="item of cartItems" :key="item.id_product"></basket-up>
            </div> 
        </div>  
        `
});

Vue.component('basket-up', {
    props: ['cartItem'],
    template: `
        <div>    
            < div class="basketUp">
                <div>
                    <span>Наименование:{{cartItem.product_name}}</span>
                </div>
                <div>
                    <span>Количество:{{cartItem.quantity}}</span> шт.
                </div>
                <div>Цена:{{cartItem.price}}</div>
                <div>
                    <span>Общая стоимость:{{cartItem.quantity*cartItem.price}}</span>
                </div>
            </div>
        </div>
    `
});
