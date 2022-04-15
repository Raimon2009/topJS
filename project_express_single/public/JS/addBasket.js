
Vue.conponent('add-basket', {
    props: ['cartItem'],
    template: `
    <div>
        <article class="card">
            <div>
                <img :src="cartItem.img" alt="foto">
            </div>
            <div class="card__block">
                <div class="card__block--header">
                    <h3 class="card__block--header--text">{{cartItem.product_name}}</h3><button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                </div>
                <div class="card__block--info">
                        <p class="card__block--info--text">Price: <span style="color: red">{{cartItem.price}}</span></p>
                    <p class="card__block--info--text">Color: {{cartItem.color}}</p>
                    <p class="card__block--info--text">Size: {{cartItem.size}}</p>
                    <div class="card__block--quantity">
                        <p>Quantity:{{cartItem.quantity}}</p>
                        <input class="card__block--quantity--number" type="number" required min="1">
                    </div>
                </div>
            </div>
        </article>
    </div>
    `
});