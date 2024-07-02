let allProducts = [
    { id: 1, title: "تور هفت روزه استامبول", price: 1_300_000, img: './img/zayn-shah-CkT2-hmNvgA-unsplash.jpg', count: 1 },
    { id: 2, title: "تور هفت روزه استامبول", price: 1_300_000, img: './img/article.jpg', count: 1 },
    { id: 3, title: "تور هفت روزه استامبول", price: 1_300_000, img: './img/article2.jpg', count: 1 },
    { id: 4, title: "تور هفت روزه استامبول", price: 1_300_000, img: './img/2.jpg', count: 1 },
]

let userBasket = []

let $ = document
const shopItemsContainer = $.querySelector('.shop-items')
const bastekProductsContainer = $.querySelector('.cart-items')
const removeAllProductsBtn = $.querySelector('#remove-all-products')
const cartTotalPriceElem = $.querySelector('.cart-total-price')

allProducts.forEach(function (product) {
    let productContainer = $.createElement('div')
    productContainer.classList.add('shop-item')

    let productTitleSpan = $.createElement('span')
    productTitleSpan.classList.add('shop-item-title')
    productTitleSpan.innerHTML = product.title

    let productImageElem = $.createElement('img')
    productImageElem.classList.add('shop-item-image')
    productImageElem.setAttribute('src', product.img)

    let productDetailsContainer = $.createElement('div')
    productDetailsContainer.classList.add('shop-item-details')

    let productPriceSpan = $.createElement('span')
    productPriceSpan.innerHTML = product.price
    productPriceSpan.classList.add('shop-item-price')

    let prodcutAddButton = $.createElement('button')
    prodcutAddButton.innerHTML = 'افزودن به سبد خرید'
    prodcutAddButton.className = 'btn btn-primary shop-item-button'
    prodcutAddButton.addEventListener('click', function () {
        addProductToBasketArray(product.id)
    })

    productDetailsContainer.append(productPriceSpan, prodcutAddButton)
    productContainer.append(productTitleSpan, productImageElem, productDetailsContainer)
    shopItemsContainer.append(productContainer)

})



function addProductToBasketArray(productId) {

    let mainProduct = allProducts.find(function (product) {
        return product.id === productId
    })

    userBasket.push(mainProduct)

    basketProductsGenerator(userBasket)
    calcTotalPrice(userBasket)

    console.log(userBasket);
}

function basketProductsGenerator(userBasketArray) {
    bastekProductsContainer.innerHTML = ''

    userBasketArray.forEach(function (product) {

        let basketProductContainer = $.createElement('div')
        basketProductContainer.classList.add('cart-row')

        let basketProductDetailsContainer = $.createElement('div')
        basketProductDetailsContainer.className = 'cart-item cart-column'

        let basketProductImg = $.createElement('img')
        basketProductImg.setAttribute('src', product.img)
        basketProductImg.setAttribute('width', "100")
        basketProductImg.setAttribute('height', "100")
        basketProductImg.classList.add('cart-item-image')

        let basketProductTitleSpan = $.createElement('span')
        basketProductTitleSpan.classList.add('cart-item-title')
        basketProductTitleSpan.innerHTML = product.title

        basketProductDetailsContainer.append(basketProductImg, basketProductTitleSpan)

        let basketProductPriceSpan = $.createElement('span')
        basketProductPriceSpan.className = 'cart-price cart-column'
        basketProductPriceSpan.innerHTML = product.price

        let basketProductInputsContainer = $.createElement('div')
        basketProductInputsContainer.className = 'cart-quantity cart-column'

        let basketProductInput = $.createElement('input')
        basketProductInput.className = 'cart-quantity-input'
        basketProductInput.value = product.count
        basketProductInput.setAttribute('type', 'number')
        basketProductInput.addEventListener('change', function () {
            updateProductCount(product.id, basketProductInput.value)
        })

        let basketProductRemoveBtn = $.createElement('button')
        basketProductRemoveBtn.className = 'btn btn-danger'
        basketProductRemoveBtn.innerHTML = 'حذف'
        basketProductRemoveBtn.addEventListener('click', function () {
            removeProductFromBasket(product.id)
        })

        basketProductInputsContainer.append(basketProductInput, basketProductRemoveBtn)

        basketProductContainer.append(basketProductDetailsContainer, basketProductPriceSpan, basketProductInputsContainer)

        bastekProductsContainer.append(basketProductContainer)

    })
}

function removeProductFromBasket(productId) {

    userBasket = userBasket.filter(function (product) {
        return product.id !== productId
    })

    basketProductsGenerator(userBasket)
}

removeAllProductsBtn.addEventListener('click', function () {
    userBasket = []
    basketProductsGenerator(userBasket)
})

function calcTotalPrice(userBasketArray) {
    let totalPriceValue = 0

    userBasketArray.forEach(function (product) {
        totalPriceValue += product.count * product.price
    })

    cartTotalPriceElem.innerHTML = totalPriceValue
}

function updateProductCount(productId, newCount) {
    console.log("product id: " + productId + ' new count: ' + newCount);

    userBasket.forEach(function (product) {
        if (product.id === productId) {
            product.count = newCount
        }
    })
    calcTotalPrice(userBasket)
}