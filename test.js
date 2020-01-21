class Test{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.z = 0;
    }
    info(){
        console.log("x = " + this.x.toString() + " y = " + this.y.toString() + " z =  " + this.z.toString())
    }
    sum(){
        return (this.x + this.y + this.z);
    }
}

class Number{
    constructor(n){
        this.n = n;
    }
    info(){
        console.log("Значение равно " + this.n);
    }
    setN(n){
        this.n = n;
        this.info();
    }
    incN(){
        this.n++;
        this.info();
    }
    decN(){
        this.n--;
        this.info();
    }
    plus(m){
        this.n += m;
        this.info();
    }
    minus(m){
        this.n -= m;
        this.info();
    }
    multiply(m){
        this.n *= m;
        this.info();
    }
    divide(m){
        this.n /= m;
        this.info();
    }
}

//number = new Number(5);
////test = new Test(5)
//number.info();
//number.n = 7;
//number.info();
//number.setN(17);
//number.plus(10);
//number.minus(3);
//number.multiply(2);
//number.divide(12);
test = new Test(5,7);
console.log(test.sum());
//2 + 3
//
//2.plus(3)
//
//2 + 3 + 7
//
//2.plus(3).plus(7)
//
//var n = 5;