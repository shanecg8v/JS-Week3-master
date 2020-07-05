var app = new Vue({
    el: '#app',
    data: {
        tempProduct: {
            options: {
                stars: 0,
                comments: []
            }
        },
        products: [{
            id: '123456789',
            title: '壓馬路機',
            category: '藝術',
            content: '來自世界上最有的名的哲學家所使用的武器',
            description: '吃我的壓馬路機攻擊',
            imageUrl: 'https://pic.pimg.tw/cmlpsupport2015/1439514723-3451158707_wn.jpg',
            enabled: true,
            origin_price: 585858,
            price: 585858,
            unit: '台',
            options: {
                stars: 1,
                comments: [{
                    name: 'JoJo',
                    avator: 'https://stickershop.line-scdn.net/stickershop/v1/product/3065/LINEStorePC/main.png;compress=true',
                    comment: '你有想過被壓到很痛嗎?沒有因為你只想到你自己!'
                }]
            }
        }, {
            id: '234567891',
            title: '疊疊石',
            category: '藝術',
            content: '義大利名師Sit Down Please設計',
            description: '來自世界上靠近海邊的石頭',
            imageUrl: 'https://images.unsplash.com/photo-1593227500315-8bad8e6d751a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            enabled: false,
            origin_price: 150,
            price: 140,
            unit: '組',
            options: {
                stars: 5,
                comments: [{
                    name: '十一姑',
                    avator: 'https://cdn2.ettoday.net/images/2653/d2653244.jpg',
                    comment: '義大利名師Sit Down Please設計的款式我都愛'
                }]
            }
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
            this.tempProduct = {
                options: {
                    stars: 0,
                    comments: []
                }
            };
            $('#productModal').modal('hide');
        },
        openModal(action, item) {
            switch (action) {
                case 'new':
                    this.tempProduct = {
                        options: {
                            stars: 0,
                            comments: []
                        }
                    };
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
                case 'option':
                    this.tempProduct = Object.assign({}, item);
                    $('#optionProductModal').modal('show');
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