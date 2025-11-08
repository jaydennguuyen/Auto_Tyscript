function printId(id: number | string)
{
    if (typeof id === "number")
    {
        console.log("This is a type number")
    }
    else {
        console.log("This is a String")
    }

}

function welcomePeople(x : string[] | string)
{
    if (Array.isArray(x))
    {
        console.log("Hello")
    }
    else 
    {
        console.log("Welcome to string type")
    }
}

type Point = {
    x: number;
    y: number;

};
function printValue(pt: Point)
{
    console.log("The cordinate x value is  " +pt.x)
}

interface Cat {
    age: number;
    name: string;
}

function getFullNameCat(ct: Cat)
{
    console.log("This is cat with name: "+ ct.name);
    console.log("This is a cat with Age: "+ ct.age);
}

getFullNameCat({age: 23, name: "Bup"});

// prefer dung interface cho beginer va co the them duoc argument trong object. 
// type: hop voi nhieu nguoi, khong the edit duoc cai argument trong object do.

let nummVar: number | null = null;
let undefinedVar: number | undefined;

let ages:number[] = [1,2,3]  // co nghia la khai bao bien va co the khai bao sau nay
// null: chu dong, minh tu muon gan cho n bien null, undefined co the chu dong, nhieu truong hop khi cal function ma dieu kien chua den
// thi variable do se la undefine, co nghia la khai bao nhung chua khoi tao.

// ex:
let demo_arr = [ 1,2,3,4]

demo_arr.splice(1,3,4)
demo_arr.forEach(function(v)
{return console.log(v);})


// tuple python: inmutable 
// tuple ts: [string, number]: khi lam thi phai dung kieu du lieu 
// //[...string]: khi min khoi tao thi cai nay co hay hong co cung duoc, nhung n phai la string 

