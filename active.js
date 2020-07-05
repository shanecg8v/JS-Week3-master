var app = new Vue({
    el: '#app',
    data: {
        tempProduct: {},
        products: [{
            id: '123456789',
            title: '測試產品',
            category: '測試',
            content: '測試',
            description: '測試',
            imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            enabled: true,
            origin_price: 20,
            price: 15,
            unit: 'US',
        }]
    },
    methods: {
        updateProduct() {
            if (this.tempProduct.id) {
                this.products.forEach((item, index) => {
                    if (item.id == this.tempProduct.id) {
                        this.products[index] = this.tempProduct;
                    }
                });
            } else {
                const id = Math.floor(new Date().getTime() / 1000);
                this.tempProduct.id = id;
                this.products.push(this.tempProduct);
            }
            this.tempProduct = {};
            $('#productModal').modal('hide');
        },
        openModal(action, item) {
            switch (action) {
                case 'new':
                    this.tempProduct = {};
                    $('#productModal').on('show.bs.modal', e => {
                        $('#productModalLabel').text("新增產品");
                    }).modal('show');
                    break;
                case 'edit':
                    this.tempProduct = Object.assign({}, item);
                    $('#productModal').on('show.bs.modal', e => {
                        $('#productModalLabel').text("編輯產品");
                    }).modal('show');
                    break;
                case 'delete':
                    this.tempProduct = Object.assign({}, item);
                    $('#delProductModal').modal('show');
                    break;
                default:
                    break;
            }
        },
        delProduct() {
            if (this.tempProduct.id) {
                this.products.forEach((item, index) => {
                    if (item.id == this.tempProduct.id)
                        this.products.splice(index, 1);
                });
            }
            $('#delProductModal').modal('hide');
        }
    }
});