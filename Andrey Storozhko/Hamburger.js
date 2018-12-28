function Hamburger(size, stuffing) {
    Menu.call(this, size);
    this.stuffing = stuffing;
}

Hamburger.prototype = Object.create(Menu.prototype);
Hamburger.prototype.constructor = Hamburger;

Hamburger.SIZE_SMALL = {
    name: 'Slider',
    price: 50,
    calories: 20
};
Hamburger.SIZE_LARGE = {
    name: 'Whopper',
    price: 100,
    calories: 40
};
Hamburger.STUFFING_CHEESE = {
    name: 'cheese',
    price: 10,
    calories: 20
};
Hamburger.STUFFING_SALAD = {
    name: 'salad',
    price: 20,
    calories: 5
};
Hamburger.STUFFING_POTATO = {
    name: 'potato',
    price: 15,
    calories: 10
};

Hamburger.prototype.getSize = function () {
    return this.type;
};

Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
};

Hamburger.prototype.calculatePrice = function () {
    return this.getSize().price + this.getStuffing().price;
};

Hamburger.prototype.calculateCalories = function () {
    return this.getSize().calories + this.getStuffing().calories;
};
