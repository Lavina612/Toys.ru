$(function() {
window.productsCollection = new App.Collections.ProductCollection ([
    {
        name: 'Мягкая игрушка 1',
        price: '500 рублей',
        type: 'Семейные игры',
        data_id: '000000'
    },
    {
        name: 'Мягкая игрушка 2',
        price: '300 рублей',
        type: 'Логические игры',
        data_id: '000001'
    },
    {
        name: 'Мягкая игрушка 3',
        price: '1400 рублей',
        type: 'Головоломки',
        data_id: '000002'
    },
    {
        name: 'Мягкая игрушка 4',
        price: '1450 рублей',
        type: 'Семейные игры',
        data_id: '000003'
    },
    {
        name: 'Мягкая игрушка 5',
        price: '350 рублей',
        type: 'Логические игры',
        data_id: '000004'
    },
    {
        name: 'Мягкая игрушка 6',
        price: '1600 рублей',
        type: 'Головоломки',
        data_id: '000005'
    }
]);

    window.productsView = new App.Views.Products({ collection: productsCollection });
    $('#center_div div').html(productsView.render().el);
    console.log(productsView.el);

});