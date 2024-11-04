'use strict'

class BestCar {

    constructor(name, color, strike){
        this.name = name;
        this.color = color;
        this._bestStrike = strike;
    }

    info() {
        console.log(`This car's name is ${this.name}, color is ${this.color}, and strike power is ${this._bestStrike}`);
    }

    get strike() {
        return this._bestStrike;
    }

    set strike(strike) {
        if (strike > 0 && strike < 100 && typeof strike == "number") {
            this._bestStrike = strike;
        } else {
            console.log("You can not set strike to this value");
        }
    }

};

const obj = new BestCar("BMW", "Black", 99);

console.log(obj.strike = 22)

obj.info()
// To'g'ridan-to'g'ri `info()` chaqirish
