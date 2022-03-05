const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    cartItem: [],
    products: [],
    imgCatalog: 'https://via.placeholder.com/200x150',
    imgCart: 'https://via.placeholder.com/50x100',
    searchLine: '',
    isVisibleCart: 'false',
    filters: [],
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product) {
      this.getJson(`${API}/addToBasket.json`)
        .then(data => {
          if (data.result === 1) {
            let find = this.cartItem.find(el => el.id_product === product.id_product);
            if (find) {
              find.quantity++;
            } else {
              let prod = Object.assign({ quantity: 1 }, product);
              this.cartItem.push(prod)
            }
          } else {
            alert('Error');
          }
        })
    },
    remove(item) {
      this.getJson(`${API}/deleteFromBasket.json`)
        .then(data => {
          if (data.result === 1) {
            if (item.quantity > 1) {
              item.quantity--;
            } else {
              this.cartItem.splice(this.cartItem.indexOf(item), 1)
            }
          }
        })
    },
    filterGoods() {
      let regExp = new RegExp(this.searchLine, 'i');
      this.filters = this.products.filter(el => regExp.test(el.product_name))
    },
  },
  // beforeCreated() { },
  created() {
    this.getJson(`${API}/getBasket.json`)
      .then(data => {
        for (let el of data.contents) {
          this.cartItem.push(el);
        }
      });
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
          this.filters.push(el);
        }
      });
  },
});