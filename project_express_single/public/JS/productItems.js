"use strict";

Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value) {
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="catalog__group">
            <product ref="refref" v-for="item of filtered" :key="item.id_product" :img="item.img" :product="item"></product>
        </div>
    `
});

Vue.component('filters', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `
            <form action="#" class="search__form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="text" class="search__field" v-model="userSearch">
                <button class="btn__search" type="submit">
                    <img src="./img/lupa.svg" alt="search">
                </button>
            </form>
    `
});

Vue.component('product', {
    props: ['product'],
    template: `
    <article class="catalog__content">
        <div class="catalog__img">
            <img :src="product.img" alt="foto">
            <div class="overlay">
                <button class="btn" @click="$root.$refs.cart.addProduct(product)"><img src="./img/whitecart.svg" alt="cart"><span class="hidden">Add to cart</span></button>
            </div>
         </div>
         <div class="catalog__item">
            <h3 class="article__head">{{product.product_name}}</h3>
             <p class="article__text">Known for her sculptural takes on traditional tailoring, Australian
            arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
             <p class="article__price">{{product.price}}$</p>
        </div>
    </article>
    `
    //         `
    //     <div class="product-item">
    //                 <img :src="img" alt="Some img">
    //                 <div class="desc">
    //                     <h3>{{product.product_name}}</h3>
    //                     <p>{{product.price}}₽</p>
    //                     <button class="buy-btn" @click="cartAPI.addProduct(product)">Купить</button>
    // <!-- 1                    <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>-->
    // <!-- 2                    <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>-->
    //                 </div>
    //             </div>
    //     `
});
