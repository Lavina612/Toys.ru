$(document).ready(function () {
    var count = localStorage.getItem('count') || 0;
    console.log(count);
    $("#center_div_right span:eq(0)").text("Количество: " + (localStorage.getItem('quantity') || 0));
    $("#center_div_right span:eq(1)").text("Сумма: " + (localStorage.getItem('sum') || 0) + " рублей");
    if (+count === 0) {
        $('#center_case').html("<span class='case_empty'>Ваша корзина пуста</span>");
        $('#center_div_right').empty();
    } else {
        for (var i = 1; i <= count; i++) {
            var product = JSON.parse(localStorage.getItem('product' + i));
            console.log(product);
            console.log(product.img);
            console.log(product.count);
            $('#center_case').append('<div class="product_in_case" data-id=' + i + '>' +
                '<span class="delete_product"></span>' +
                '<img class="img_in_case" src=' + product.img + '>' +
                '<span class="id_product_in_case" hidden>' + product.id + '</span>' +
                '<span class="name_in_case"><span>Наименование:</span><br>' + product.name + '</span>' +
                '<button class="button_quantity minus"></button>' +
                '<label class="quantity_in_case">' + product.count + '</label>' +
                '<button class="button_quantity plus"></button>' +
                '<span class="price_in_case">' + product.price + '</span>' +
                '</div>');
        }
    }

    console.log($('.id_product_in_case').text());

    $('.delete_product').click(function() {
        var j = $(this).parent().attr('data-id');
        console.log(j);
        var price = $(this).parent().find(".price_in_case").text();
        var quantity_old = Number($(this).parent().find(".quantity_in_case").text());
        price = price.substring(0, price.indexOf(' '));
        price = Number(price);
        console.log(price);
        var sum = Number(localStorage.getItem('sum'));
        sum -= price*quantity_old;
        localStorage.setItem('sum', sum);
        $("#info_case span:eq(1)").text("Сумма: " + sum + " рублей");
        $("#center_div_right span:eq(1)").text("Сумма: " + sum + " рублей");

        var quantity = Number(localStorage.getItem('quantity'));
        console.log(quantity + ' - ' + quantity_old);
        quantity = quantity - quantity_old;
        $("#center_div_right span:eq(0)").text("Количество: " + quantity);
        $("#info_case span:eq(0)").text("Количество: " + quantity);
        localStorage.setItem('quantity', quantity);

        $(this).parent().animate({opacity: 'hide'}, 'fast');
        var count = localStorage.getItem('count');

        for (var i = (+j+1); i <= count; i++) {
            console.log(i);
            var product = JSON.parse(localStorage.getItem('product' + i));
            $(".product_in_case[data-id=" + i + "]").attr('data-id', i-1);
            console.log(product);
            localStorage.setItem('product' + (i-1), JSON.stringify(product));
        }
        localStorage.removeItem('product' + count);

        count--;
        localStorage.setItem('count', count);

        if (count === 0) {
            $('#center_case').html("<span class='case_empty'>Ваша корзина пуста</span>");
            $('#center_div_right').empty();
        }

    });

    $(".minus").click(function() {
        console.log(Number($(this).parent().find('.quantity_in_case').text()));
        if (Number($(this).parent().find('.quantity_in_case').text()) >= 2) {
            var j = $(this).parent().attr('data-id');
            var product_quantity = Number($(this).parent().find('.quantity_in_case').text());
            product_quantity--;
            $(this).parent().find('.quantity_in_case').text(product_quantity);
            var quantity = Number(localStorage.getItem('quantity'));
            quantity--;
            console.log(quantity);
            localStorage.setItem('quantity', quantity);
            console.log('j = ' + j);
            var product = JSON.parse(localStorage.getItem('product' + j));
            product.count--;
            console.log(product.count);
            localStorage.setItem('product' + j, JSON.stringify(product));
            var sum = Number(localStorage.getItem('sum'));
            var sum_old = $(this).parent().find('.price_in_case').text();
            sum_old = Number(sum_old.substring(0, sum_old.indexOf(' ')));
            sum = sum - sum_old ;
            localStorage.setItem('sum', sum);

            $("#info_case span:eq(1)").text("Сумма: " + sum + " рублей");
            $("#center_div_right span:eq(1)").text("Сумма: " + sum + " рублей");
            $("#center_div_right span:eq(0)").text("Количество: " + quantity);
            $("#info_case span:eq(0)").text("Количество: " + quantity);
        }
    });

    $(".plus").click(function() {
        console.log(Number($(this).parent().find('.quantity_in_case').text()));
        if (Number($(this).parent().find('.quantity_in_case').text()) < 50) {
            var j = $(this).parent().attr('data-id');
            var product_quantity = Number($(this).parent().find('.quantity_in_case').text());
            product_quantity++;
            $(this).parent().find('.quantity_in_case').text(product_quantity);
            var quantity = Number(localStorage.getItem('quantity'));
            quantity++;
            console.log(quantity);
            localStorage.setItem('quantity', quantity);
            var product = JSON.parse(localStorage.getItem('product' + j));
            product.count++;
            console.log(product.count);
            localStorage.setItem('product' + j, JSON.stringify(product));
            var sum = Number(localStorage.getItem('sum'));
            var sum_old = $(this).parent().find('.price_in_case').text();
            sum_old = Number(sum_old.substring(0, sum_old.indexOf(' ')));
            sum = sum + sum_old ;
            localStorage.setItem('sum', sum);

            $("#info_case span:eq(1)").text("Сумма: " + sum + " рублей");
            $("#center_div_right span:eq(1)").text("Сумма: " + sum + " рублей");
            $("#center_div_right span:eq(0)").text("Количество: " + quantity);
            $("#info_case span:eq(0)").text("Количество: " + quantity);
        }
    });

    $('#case_cancel_case').click(function() {
        var count = localStorage.getItem('count') || 0;
        for (var i = 1; i <=count; i++) {
            localStorage.removeItem('product' + i);
        }
        localStorage.setItem('count', 0);
        localStorage.setItem('quantity', 0);
        localStorage.setItem('sum', 0);
        $("#info_case span:eq(0)").text("Количество: 0");
        $("#info_case span:eq(1)").text("Сумма: 0 рублей");

        $('#center_case').html("<span class='case_empty'>Ваша корзина пуста</span>");
        $('#center_div_right').empty();
    })

    $("#case_apply_case").click(function () {
        location.href = "http://toys.ru/html/form.html";
    });
});