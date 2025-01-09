    console.log("Hello i am printing before return keyword")
    function test1(){
    return a+b;
    console.log("Hello i am printing before return keyword")
}
console.log(test1(5,5));

let x = (a, b) => {return a*b};
console.log(x,(5,5));

let y = (a,b) => a+b;
console.log(y(100,200));