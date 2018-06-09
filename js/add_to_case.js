$(document).ready(function () {
    $(".add_to_case").click(function () {

        var product = $(this).parent();
        var product_id = $(this).attr('data-id');
        var product_img = product.find('img').attr('src');
        var product_name = product.find('strong:eq(0)').next().text();
        var product_price_str = product.find('strong:eq(1)').next().text();

        var product_general = {
            id: product_id,
            name: product_name,
            img: product_img,
            price: product_price_str,
            count: 1
        };

        var count = localStorage.getItem('count') || 0;
        var quantity = localStorage.getItem('quantity') || 0;
        var new_count = 0;

        for (var i = 1; i <= count; i++) {
            var product_old = JSON.parse(localStorage.getItem('product' + i));
            if (+product_old.id === +product_general.id) {
                product_old.count = Number(product_old.count);
                product_old.count++;
                localStorage.setItem('product' + i, JSON.stringify(product_old));
                new_count = 1;
                console.log("p_o.count " + i + " = " + product_old.count);
                break;
            }
        }

        if (new_count === 0) {
            count++;
            localStorage.setItem('count', count);
            console.log(count);
            localStorage.setItem('product' + count, JSON.stringify(product_general));
        }

        quantity++;
        $("#info_case span:eq(0)").text("Количество: " + quantity);
        localStorage.setItem('quantity', quantity);
        set_sum(product_price_str);

        $('#alert').fadeIn(400);
        setTimeout(function() {
            $('#alert').fadeOut(400);
        }, 400);
    });
});

function set_sum(product_price_str) {
    var sum = Number(localStorage.getItem('sum')) || 0;
    var product_price = Number(product_price_str.substring(0, product_price_str.indexOf(' ')));
    sum += product_price;
    $("#info_case span:eq(1)").text("Сумма: " + sum + " рублей");
    localStorage.setItem('sum', sum);
}

