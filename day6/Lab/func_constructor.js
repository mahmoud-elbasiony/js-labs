function Shape(name,sides,sideLength){
    this.name=name;
    this.sides=sides;
    this.sideLength=sideLength;
}
// add method to shape prototype

Shape.prototype.calcPerimeter=function() {
    return this.sides*this.sideLength;
}

function Sqaure(sideLength){

    Shape.call(this,"sqaure",4,sideLength)
    
}
//prototypal inheritance
Sqaure.prototype=Object.create(Shape.prototype);

//reasign sqaure constructor to sqaure instead of shape constructor after prototypal inheritance
Sqaure.prototype.constructor=Sqaure;

// add method to sqaure prototype

Sqaure.prototype.calcArea=function(){
    return this.sideLength*this.sideLength;
}
console.log("shape object: ",Shape)

let shape=new Shape("triangle",3,3);
console.log("shape object: ",shape)

console.log("shape Perimeter: ",shape.calcPerimeter())
let sqaure=new Sqaure(5);
console.log("sqaure object: ",sqaure)

console.log("sqaure Area: ",sqaure.calcArea())
console.log("sqaure Perimeter: ",sqaure.calcPerimeter())



function Triple(){
    
}

Triple.customName ="Triple";
Triple.description ="I triple any number you provide";
Triple.calculate =function(n=1){
    return n*3;
}

function SquaredTriple(){
    Triple.call(this);
}
SquaredTriple.prototype=Object.create(Triple.prototype);
SquaredTriple.prototype.constructor=SquaredTriple;

SquaredTriple.longDescription;
SquaredTriple.description="I square the triple of any number you provide"
SquaredTriple.calculate=function (n){
    return Triple.calculate(n)*Triple.calculate(n);
}

console.log("Triple: ",new Triple());
console.log("SquaredTriple: ",new SquaredTriple());


console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); //Triple