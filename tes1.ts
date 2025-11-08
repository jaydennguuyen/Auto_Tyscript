import { Console } from "console"
import { Tracing } from "trace_events"

let x:number = 1
const y:number = 3
const z = x + y
console.log(z)

function hello(name: string): string{
    return `Hello ban ${name}`
}

console.log(hello('Nam'))

const names = ["Nguyen Van Lam", "Truong Quoc Nam", "Thai Viet Tin", "Tran Ngoc Thao"]
names.forEach(element => {
    console.log(element.toLowerCase())
});

function printID (id: number | string)
{
    if (typeof id === "number")
    {
        console.log("Your ID is :"+ id)
    }
    else
    {
        console.log("Your ID is: " + id)
    }
}

printID("Nguyen van lam")

let age:number[] = [1,2,3]
// age.splice(2, 2,34,55)
// console.log(age)
// console.log(age.push(56))
console.log(age.pop())

age.forEach(function (v) {
    // return console.log(v)

    return console.log(age.at(1))
})


class Base {
    race: string;
    constructor(race: string)
    {
        this.race = race
    }

}


// extend class person with name param

class Person extends Base{
    protected id : number
    protected name: string
    constructor(id: number, name: string, race: string)
    {super(race)

        this.id = id;
        this.name = name;

    }

    get Id(): number
    {
        return  this.id ;
    }
    get Name(): string
    {
        return this.name;
    }

    set Id(value: number)
    {
        this.id = value;
    }
    set Name(nameVL: string)
    {
        this.name  = nameVL
    }


}

let numP =new Person(12, "Nguyen Van Lam", "racing");
numP.Id = 123 ;
numP.Name = "Nguyen Quoc Lam";
numP.race = "Tocder"
console.log(numP.Name)

