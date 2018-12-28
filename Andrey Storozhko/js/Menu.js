function Menu(type) {
    this.type = type;
    this.name = type.name;
}

Menu.prototype.getType = function () {
    return this.type;
};

Menu.prototype.getName = function () {
    return this.name;
};

Menu.prototype.calculatePrice = function () {
    return this.type.price;
};

Menu.prototype.calculateCalories = function () {
    return this.type.calories;
};
