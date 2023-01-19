
//Array
//1 concat array1 and array2 in array3
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log("array3: ",array3);    // Expected output: Array ["a", "b", "c", "d", "e", "f"]

//2 using forEach to copy data from one array to another array
const reversed=[];
array3.forEach((s,i)=>reversed[i]=s);

array3.forEach((s)=>console.log(s));//using forEach to to print data

//3 reversing  array
console.log("reversed: ",reversed.reverse()); //reversing array


//4 joining elements of the array
console.log("joined elements: ",array3.join(","));
array3.forEach((s,i)=>reversed[i]=s);

//5
//array3 = ["a", "b", "c", "d", "e", "f"];

// Copy to index 0 the element at index 3
console.log(array3.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array3.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

//6 using filter method to filter  for numbers > 6
const numbers = [2,4,5,0,12,20,-5,12,9,15];

const result = numbers.filter(num => num > 6);

console.log("numbers >6: ",result);// Expected output: Array [12, 20, 12, 9, 15]

/*7 using every function to check whether all elements in the array 
pass the test implemented by the provided function. 
It returns a Boolean value.
*/
const isBelowThreshold = (currentValue) => currentValue > 0;

// numbers = [2,4,5,0,12,20,-5,12,9,15];

console.log("output of every method: ",numbers.every(isBelowThreshold)); // Expected output: false

//8 find last index of element passes a certain condition

// numbers = [2,4,5,0,12,20,-5,12,9,15];
console.log("last index of element<5:",numbers.findLastIndex((element) => element <5)); // index=6


//9 map()
const numberscopy=numbers.map((n)=>n);// copy numbers to a new array
console.log("using map to copy: ",numberscopy);
numberscopy.map((n,i,ar)=>ar[i]=n*2);// double every element  in the array
console.log("numberscopy after doubling: ",numberscopy);


//10 flatmap
const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => num);

console.log("flattened array: ",flattened);
// Expected output: Array [1, 2, 3, 4, 5, 6]()



//object
var emps = [
    {
        name:"ahmed",
        age:30,
        salary:3000
    },{
        name:"ali",
        age:40,
        salary:4000
    },{
        name:"mohamed",
        age:35,
        salary:10000
    }
]
//1 keys()
console.log(Object.keys(emps[0])); //get list of keys 

//2 values()
console.log(Object.values(emps[0])); //get list of values 

//3 entries()
for (const [key, value] of Object.entries(emps[0])) {// used to get key value pairs from object 
    console.log(`${key}: ${value}`);
  }

//4 fromEntries()
const entries = new Map([ //creating key value pairs
['name', 'hisham'],
['age', 42],
["salary",15000]
]);

const obj = Object.fromEntries(entries);// assigning the entries to obj
console.log(obj);

//5 hasOwn()
// hasOwn() method check if object has the specified key
console.log("emp obj don't have prop key: ",Object.hasOwn(emps[0], 'prop')); // false
console.log("emp obj have name key: ",Object.hasOwn(emps[0], 'name')); // true

//6 is() check if the object have the same value
console.log("emp[0] is emp[1]:: ",Object.is(emps[0], emps[1])); // false
console.log("emp[0] is emp[0]: ",Object.is(emps[0], emps[0])); // true
console.log("'ahmed' is 'mahmoud': ",Object.is('ahmed' , 'mahmoud')); // false
console.log("'mahmoud' is 'mahmoud': ",Object.is('mahmoud' , 'mahmoud')); // true





//7 getOwnPropertyNames() used to get name of keys from object 
console.log("getOwnPropertyNames: ",Object.getOwnPropertyNames(emps[0]));


//8 toString() is used to convert object to string
function empToString(obj) {
    return `name:${obj.name}\nage:${obj.age}\nsalary:${obj.salary}`;
  }
  
let employee=new Object({
    name:"mohamed",
    age:35,
    salary:10000,
    toString(){
        return `\nname:${this.name}\nage:${this.age}\nsalary:${this.salary}`;
      }
})
console.log("to string():",employee.toString()); 

//9 isExtensible() static method determines if an object is extensible (whether it can have new properties added to it)


console.log("object is extendable:",Object.isExtensible(employee));
console.log("object is extendable:",Object.isExtensible(emps[0]));


//10 freeze()
//Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
//A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed


console.log("freezing object employee:",Object.freeze(employee));
console.log("object is extendable:",Object.isExtensible(employee));