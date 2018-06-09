$(document).ready(function () {
    $(".catalog_type").click(function() {
        var str = $(this).text();
        find_type(str);
    });
});


function find_type (str) {
    $("#filter input[name=price]:checked").prop("checked", false);
    $("#filter input[name=price][value=any]").prop("checked", true);
    var products = $(".product_div");
    var count = 0;
    console.log("Внутри");
    if (str === 'Каталог:') {
        for (var i = 0; i < products.length; i++) {
            products.eq(i).animate({opacity: "show"}, "fast");
            count++;
        }
    } else {
        for (var i = 0; i < products.length; i++) {
            var type = products.eq(i).find("strong:eq(2)").next().text();
            if (type !== str) {
                products.eq(i).hide();
                products.eq(i).addClass("hidden");
            } else {
                products.eq(i).animate({opacity: "show"}, "fast");
                products.eq(i).removeClass("hidden");
                count++;
            }
        }
      }
    if (count === 0) {
         if ($('#center_div > span').text() !== "На нашем сайте нет товара с такими критериями")
            $('#center_div').append("<span>На нашем сайте нет товара с такими критериями</span>");
     } else {
        $('#center_div > span').text("");
    }
}

$(document).ready(function () {
    $("#filter_apply").click(function () {
        var products = $(".product_div").not(".hidden");
        var count = 0;
        var filter = Number($("#filter input[name=price]:checked").val());
        for (var i = 0; i < products.length; i++) {
            var price = products.eq(i).find("strong:eq(1)").next().text();
            price = Number(price.substring(0, price.indexOf(' ')));
            if (price > filter) products.eq(i).hide();
            else {
                products.eq(i).animate({opacity: "show"}, "fast");
                count++;
            }
        }
        if (count === 0) {
            if ($('#center_div > span').text() !== "На нашем сайте нет товара с такими критериями")
                $('#center_div').append("<span>На нашем сайте нет товара с такими критериями</span>");
        } else {
            $('#center_div > span').text("");
        }
    });
});