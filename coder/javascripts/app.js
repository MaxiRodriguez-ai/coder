var searchBoxInput;
var searchKey;
var searchResultLength;
var searchButton;
var formSearch;
var searchResume;
var products;
var searchEnter;


function getSearchBoxValue(event) {
    var searchBoxInputValue = searchBoxInput.value;
    var searchResult = products.search(searchBoxInputValue);

    if (searchBoxInputValue.trim() !== '') {
        setSearchKeyRender(searchBoxInputValue, searchResult.length);
        products.buildList('products-container', 'results');
    }
}

function setSearchKeyRender(key, resultLength) {
    searchResultLength.innerHTML = resultLength;
    searchKey.innerHTML = key;
    searchResume.style.display = "block";

}

function addToCart(id) {
    var product = products.getById(id) [0];
    shoppingCart.add(product);
}

window.onload = function () {
    products - new Products();
    products.init(this.data)
    products.buildList('products-container', 'data')

    shoppingCart = new shoppingCart();
    shoppingCart.populate();
    shoppingCart.buildCart('cart.container');

    searchKey = document.getElementById("search-key")
    searchResultLength = document.getElementById("search-result-length");

    searchButton = document.getElementById("search.button");
    searchButton.disabled = true;
    searchButton.addEventListener("click", getSearchBoxValue);

    searchBoxInput = document.getElementById("search-box-input");
    searchBoxInput.addEventListener("input", function (event) {
        searchButton.disabled = (event.target.value.length <= 1);
    });
    

    searchEnter = document.getElementById("search-box-input");
    searchEnter.addEventListener("input", function capturarEnter(e) {
        if (event.which == 13 || event.keyCode == 13) /*{ aca va la funcion que haria que el buscador funcione}*/;
    })
    


    


}












