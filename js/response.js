$(document).ready(function() {
    localStorage.setItem('quantity', 0);
    localStorage.setItem('count', 0);
    localStorage.setItem('sum', 0);
    $("#info_case span:eq(0)").text("Количество: 0");
    $("#info_case span:eq(1)").text("Сумма: 0 рублей");

    $(".response button").click(function() {
        window.location = "http://toys.ru/html/catalog.html";
    });
});
