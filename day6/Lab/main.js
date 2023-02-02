class Shape {
    #name;
    #sides;
    #sideLength;
    constructor(name,sides,sideLength){
        this.#name=name;
        this.#sides=sides;
        this.#sideLength=sideLength;
    }
    // set name(n){
    //     this.#name=n;
    // }
    // set sides(n){
    //     this.#sides=n;
    // }
    // set sideLength(n){
    //     this.#sideLength=n;
    // }

    // get name(){
    //     return this.#name;
    // }
    // get sides(){
    //     return this.#sides;
    // }
    // get sideLength(){
    //     return this.#sideLength;
    // }
    
    calcPerimeter() {
        return this.sides*this.sideLength;
    }
}

class Sqaure extends Shape{
    constructor(sideLength){
        super("sqaure",4,sideLength)
        
    }
    calcArea(){
        return this.sideLength*this.sideLength;
    }

}

let shape=new Shape("triangle",3,3);
console.log("shape object: ",shape)

console.log("shape Perimeter: ",shape.calcPerimeter())
let sqaure=new Sqaure(5);
console.log("sqaure object: ",sqaure)

console.log("sqaure Area: ",sqaure.calcArea())
console.log("sqaure Perimeter: ",sqaure.calcPerimeter())


class Triple{
    static customName ="Triple";
    static description ="I triple any number you provide";
    static calculate (n=1){
        return n*3;
    }
}

class SquaredTriple extends Triple{

    static longDescription;
    static description="I square the triple of any number you provide"
    static calculate(n){
        return super.calculate(n) * super.calculate(n);
    }
}

console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); //Triple
