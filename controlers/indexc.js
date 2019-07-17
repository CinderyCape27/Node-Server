const items = [
    {id:1, name:'Product 1'},
    {id:2, name:'Product 2'},
    {id:3, name:'Product 3'},
];

const index = (req, res) => {
    res.render('index', {  // res.end('Hello World');
        title: 'My WebStore' // A parte del index podemos agregar mad objetos en formato JSON y será recibido en el archivo ejs
    }) // Renderiza el archivo index.ejs el cual se convierte en un archivo HTML y que luego será lo que se muestre en el server
}

const ListOfproducts = (req, res, next) => {
    res.render('products', {
        title: 'List of Products',
        items: items
    });
}
const newProduct = (req, res, next) => {
    const { newItem } = req.body;
    items.push({
        id:items.length + 1,
        name: newItem
    });
    res.redirect('./products');
}
module.exports = {
    index,
    ListOfproducts,
    newProduct
}

