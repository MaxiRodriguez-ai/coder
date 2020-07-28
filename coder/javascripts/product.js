function Products() {

    this.data = [];
    this.results = [];

    this.init = function(data) {
        this.data = data;
    }

    this.getById = function(id) {
        return this.data.filter((product)=> product.id === id);
    }

    this.buildHtml = function(id) {
        let product = this.getById(id)[0];

        return `
            <div class="col-4-12">
                <article class="search-item">
                     <div class="col-4-12">
                        <img src="${product.img}" width="100">
                     </div>
                     <div class="col-8-12">
                        <h2>${product.title}</h2>
                        <p>${product.price}</p>
                        <div>
                             <input type="button" class="btn -primary" value="detalle">
                             <input type="button" class="btn -secondary" value="agregar al carro" onlick="addToCart('${product}')">
                        </div>
                    </div>
                </article>
            </div>
        `
    }

    this.buildList = function(containerId, source) {
        let container = document.getElementById(containerId);
        container.innerHTML = "";
        let html = '';
        this[source].array.forEach(product => {
            html = html + this.buildHtml(product.id);   
        });

        container.innerHTML = html;
    }

    this.search = function(key) {
        this.data.forEach((product) => {
            if(product.title.toLowerCase().includes(key.toLowerCase())){
                this.results.push(product);
            }
        });
        return this.results;
    }
}