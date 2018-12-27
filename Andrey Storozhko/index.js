/*------------------------MENU--------------------------*/

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

/*------------------------HAMBURGER--------------------------*/

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

/*------------------------SALAD--------------------------*/

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

/*------------------------DRINK--------------------------*/

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

/*------------------------ORDER--------------------------*/

function Order() {
    this.items = [].slice.call(arguments);
    this.isPaid = false;
}

Order.prototype.getItems = function() {
    console.log(this.items);
    return this.items;
};

Order.prototype.getPayInfo = function() {
    return this.isPaid;
};

Order.prototype.payForTheOrder = function() {
    this.isPaid = true;
    Object.freeze(this);
    console.log('Your order is paid. Bon appetite!');
};

Order.prototype.addPosition = function(position) {
    if(!this.isPaid) {
        this.items.push(position);
        console.log('Position successfully added!');
    } else {
        console.log('Sorry, your order has already been paid.');
    }
};

Order.prototype.deletePosition = function(position) {
    if(!this.isPaid) {
        if(this.items.indexOf(position) !== -1) {
            this.items.splice(this.items.indexOf(position), 1);
            console.log('Item removed successfully');
        } else {
            console.log('There is no such item in your order');
        }
    } else {
        console.log('Sorry, your order has already been paid.');
    }
};

Order.prototype.calculateTotalPrice = function() {
    var totalPrice = 0;
    if(!this.items.length) {
        console.log('Your order is empty! Please add something.');
    } else {
        this.items.forEach(function(item) {
            totalPrice += item.calculatePrice();
        });
    }
    console.log('Total price: ' + totalPrice + ' tu');
    return totalPrice;
};

Order.prototype.calculateTotalCalories = function() {
    var totalCalories = 0;
    if(!this.items.length) {
        console.log('Your order is empty! Please add something.');
    } else {
        this.items.forEach(function(item) {
            totalCalories += item.calculateCalories();
        });
    }
    console.log('Total calories: ' + totalCalories + ' cal');
    return totalCalories;
};

var hamburger_1 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
var hamburger_2 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);
var caesar = new Salad(Salad.CAESAR, 200);
var cola = new Drink(Drink.COLA);

var order1 = new Order(hamburger_2, caesar, cola);
order1.getItems();
order1.calculateTotalCalories();
order1.calculateTotalPrice();
order1.addPosition(hamburger_1);
order1.getItems();
order1.calculateTotalCalories();
order1.calculateTotalPrice();
order1.deletePosition(hamburger_2);
order1.getItems();
order1.calculateTotalCalories();
order1.calculateTotalPrice();
order1.payForTheOrder();
order1.addPosition(hamburger_1);

var order2 = new Order();
order2.getItems();
order2.calculateTotalCalories();
order2.calculateTotalPrice();
order2.addPosition(hamburger_1);
order2.addPosition(cola);
order2.getItems();
order2.calculateTotalCalories();
order2.calculateTotalPrice();
order2.payForTheOrder();
