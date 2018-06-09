<?php
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $phone = $_POST["phone"];
    $mail = $_POST["mail"];
    $address = $_POST["shop"];
    $quantity = $_POST["quantity"];
    $sum = $_POST["sum"];
    $products_str = $_POST["products"];
    $products = explode(';', $products_str);
    $length_array = count($products);

    $message = "Имя: ".$name."\nФамилия: ".$surname."\nТелефон: ".$phone."\nПочта: ".$mail.
        "\nПункт выдачи: ".$address."\nКоличество: ".$quantity."\nСумма: ".$sum.
        "\nПродукты: ";

    for ($i = 0; $i < $length_array; $i++) {
        $message = $message.$products[$i]."\n\t";
    }

    $messageClient = "Ваш заказ на сумму ".$sum." принят.\n Мы сообщим Вам, когда заказ будет готов к выдаче.\n
    Оплата при получении заказа.";

    mail("lizaklokova@mail.ru", "From Toy-Shop", $message);
    mail($mail, "Интернет-магазин 'Игрушки'", $messageClient);

    header("Location: http://toys.ru/html/response.html");
?>