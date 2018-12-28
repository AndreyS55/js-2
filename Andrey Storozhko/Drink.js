function Drink(type) {
    Menu.call(this, type);
}

Drink.prototype = Object.create(Menu.prototype);
Drink.prototype.constructor = Drink;

Drink.COLA = {
    name: 'Coca-Cola',
    price: 50,
    calories: 40
};
Drink.COFFEE = {
    name: 'Latte',
    price: 80,
    calories: 20
};
