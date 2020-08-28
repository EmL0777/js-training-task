new Vue({
  el: '#app',
  data: {
    products: [],
    tempProduct: {},
    user: {
      token: '',
      uuid: '',
    },
  },
  created() {
    // 從 Cookies 取得 token & uuid
    // 會把 uuid 存 Cookies，這樣不同的帳號也可以使用這個網頁
    this.user.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    this.user.uuid = document.cookie.replace(/(?:(?:^|.*;\s*)uuid\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (this.user.token === '' && this.user.uuid === '') {
      // 如果沒取得 token & uuid 就返回登入頁
      window.location = 'Login.html';
    }

    this.getProducts();
  },
  methods: {
    getProducts() {
      const api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/products`;

      // 預設帶入 token
      axios.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;

      axios.get(api).then((response) => {
        this.products = response.data.data;
      });
    },
    openModal(type, item) {
      switch (type) {
        case 'new':
          this.tempProduct = {}
          $('#productModal').modal('show');
          break;
        case 'edit':
          // 下面的 item 是淺拷貝，需要用深拷貝的方式接資料，避免修改資料時，沒按儲取，一樣能修改資料
          this.tempProduct = Object.assign({}, item);
          $('#productModal').modal('show');
          break;
        case 'delete':
          this.tempProduct = Object.assign({}, item);  //同69行
          $('#deleteModal').modal('show');
          break;
        default:
          break;
      }
    },
    updateProduct() {
      if (this.tempProduct.id) {
        const id = this.tempProduct.id;
        this.products.forEach((product, index) => {
          if (product.id === id) {
            this.products[index] = this.tempProduct;
          }
        });
      } else {
        const id = Math.floor(Date.now());
        this.tempProduct.id = id;
        this.products.push(this.tempProduct);
      }

      this.tempProduct = {};  // 清空 tempProduct，避免下次打開 Modal 時，發生資料不正確的問題
      $('#productModal').modal('hide');
    },
    deleteProduct() {
      if (this.tempProduct.id) {
        const id = this.tempProduct.id;
        this.products.forEach((product, index) => {
          if (product.id === id) {
            this.products.splice(index, 1);
            this.tempProduct = {};
          }
        });
      }
      $('#deleteModal').modal('hide');
    }
  }
});