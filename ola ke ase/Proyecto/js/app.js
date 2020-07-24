
// variable global  
var searchBoxInput;
var products; 
var searchButton;
var cartButton

function onSearchClick(){

    var searchboxinputValue = searchBoxInput.value
    
    if(searchboxinputValue.trim() != ""){
        setSearchKeyRender(searchboxinputValue)
    }
}


window.onload = function() {

    products = new Producto
    products.init(this.data) 


    searchButton = document.getElementById("search-button");
    searchButton.addEventListener("submit", capturarEnter);
    
    function capturarEnter(event) {
        if (event.which == 13 || keyCode == 13) {
            searchButton.addEventListener("submit");
        }
    };
    
    cartButton = getElementByClassName("cart-button");
    cartButton.addEventListener("press")
}









