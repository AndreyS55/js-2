function Salad(type, weight) {
    Menu.call(this, type);
    this.weight = weight;
}

Salad.prototype = Object.create(Menu.prototype);
Salad.prototype.constructor = Salad;

Salad.CAESAR = {
    name: 'Caesar',
    price: 100,
    calories: 20
};
Salad.OLIVIE = {
    name: 'Olivie',
    price: 50,
    calories: 80
};

Salad.prototype.getWeight = function () {
    return this.weight;
};

Salad.prototype.calculatePrice = function () {
    return this.getType().price * this.getWeight() / 100;
};

Salad.prototype.calculateCalories = function () {
    return this.getType().calories * this.getWeight() / 100;
};
