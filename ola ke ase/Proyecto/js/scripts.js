'use strict'
// " ` "

// Función constructora del objeto Shopping Cart, incluye Array "cart y métodos
function ShoppingCart() {
    this.cart = [];

    this.populate = function() {
        this.cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    }
    
    this.llenarCarrito = function(){
        cart = this.get();
    }

// Método que hace .push al objeto que se agregue mediante .add(...)
//Convierto el carrito en un JSON hecho string y lo guardo en local Storage
    this.add = function(producto) {
        cart.push(producto);
        var cartString = JSON.stringify(cart);
        localStorage.setItem('data',cartString)
    }
    
// Metodo que retorna el carrito con objetos agregados (en caso de  tener)
//retorna el objeto del local storage string transformado en Objeto js utilizable
    this.get = function() {
        
        var data = localStorage.getItem('data');
        return JSON.parse(data)
        
    }
}

// Función constructora del objeto PRODUCTO (no tiene métodos)
function Producto(nombre, precio, descripcion) {
	this.nombre = nombre;
	this.precio = precio;
	this.descripcion = descripcion;
}

// PRODUCTOS DE JSON

// myShoppingCart -> Función creada a partir de constructora ShoppingCart -> tiene array Cart y métodos 
let myShoppingCart = new ShoppingCart();

// Agrego a myShoppingCart mediante un cart.push(producto) los productos 1 y 2 creados arriba
// myShoppingCart.add(producto_ryzen7);
// myShoppingCart.add(producto_ram16_2666);
// myShoppingCart.add(producto_rtx2060);
// myShoppingCart.add(producto_monitorasus24);
// myShoppingCart.add(producto_gabinetex10);

// Obtengo el contenido de mi carrito con el método .get
let contentShoppingCart = myShoppingCart.get();


// Calculo el precio final de la compra según items de 'cart'
let finalPrice = 0

contentShoppingCart.forEach((producto)=>{  
    finalPrice+=producto.precio
})


contentShoppingCart.forEach((producto)=>{  
    finalPrice+=producto.precio
})

// Devuelvo el valor de 'nombre' para cada item del array
contentShoppingCart.forEach((producto)=>{

    console.log(`${producto.nombre}\n $${producto.precio} \n  `);
})
console.log(`El precio final es $${finalPrice}`)


