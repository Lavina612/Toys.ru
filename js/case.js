$(document).ready(function () {
    var quantity = Number(localStorage.getItem('quantity')) || 0;
    console.log(quantity);
    $("#info_case span:eq(0)").text("Количество: " + quantity);

    var sum = Number(localStorage.getItem('sum')) || 0;
    $("#info_case span:eq(1)").text("Сумма: " + sum + " рублей");

    $(".case_apply").click(function () {
        if (location.href !== "http://toys.ru/html/case.html")
            location.href = "http://toys.ru/html/case.html";
        else {
            if (Number(localStorage.getItem('count')) !== 0) {
                location.href = "http://toys.ru/html/form.html";
            }
        }
    });

    $(".case_cancel").click(function() {
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
    });
});