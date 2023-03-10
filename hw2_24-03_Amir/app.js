
var starbucks = {
  coffee: {
    americano: "Классический кофе с горячей водой",
    latte: "Кофе с молоком",
    cappuccino: "Кофе с равными долями молока и молочной пены",
    mocha: "Кофе с шоколадом и молоком ",
    espresso: "Крепкий кофе",
  },
  tea: {
    green: "Зеленый чай",
    black: "Черный чай",
    herbal: "Травяной чай",
    oolong: "Оолонг",
    chai: "Чай массала",
  }
};

var drink = prompt("Введите название напитка");
if (starbucks.coffee[drink]) {
  console.log(`${drink}: ${starbucks.coffee[drink]}`);
} else if (starbucks.tea[drink]) {
  console.log(`${drink}: ${starbucks.tea[drink]}`);
} else {
  console.log(`Ошибка! Напиток ${drink} не найден.`);
}
