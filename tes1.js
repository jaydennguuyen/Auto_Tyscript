"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var x = 1;
var y = 3;
var z = x + y;
console.log(z);
function hello(name) {
    return "Hello ban ".concat(name);
}
console.log(hello('Nam'));
var names = ["Nguyen Van Lam", "Truong Quoc Nam", "Thai Viet Tin", "Tran Ngoc Thao"];
names.forEach(function (element) {
    console.log(element.toLowerCase());
});
function printID(id) {
    if (typeof id === "number") {
        console.log("Your ID is :" + id);
    }
    else {
        console.log("Your ID is: " + id);
    }
}
printID("Nguyen van lam");
var age = [1, 2, 3];
// age.splice(2, 2,34,55)
// console.log(age)
// console.log(age.push(56))
console.log(age.pop());
age.forEach(function (v) {
    // return console.log(v)
    return console.log(age.at(1));
});
var Base = /** @class */ (function () {
    function Base(race) {
        this.race = race;
    }
    return Base;
}());
// extend class person with name param
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(id, name, race) {
        var _this = _super.call(this, race) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    Object.defineProperty(Person.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (value) {
            this.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (nameVL) {
            this.name = nameVL;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}(Base));
var numP = new Person(12, "Nguyen Van Lam", "racing");
numP.Id = 123;
numP.Name = "Nguyen Quoc Lam";
numP.race = "Tocder";
console.log(numP.Name);
