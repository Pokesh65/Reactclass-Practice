// Variables
    //  1,let 
    //  2,const
    //  3,var
// dataType
    // 1.string
    // 2.boolean
    // 3.Number
    // 4.array
    // 5.object
    // 6.undefined
    // 7.null
// String
let poke="Welcome This Is Pokesh"
console.log(poke)
poke="Pokesh Kumar"
console.log("name : "+poke)
// Number
let num=6383532388;
console.log("Phone: "+num)
// Array
let array1=["Pokesh",22,true]
let array2=["Pokesh",26,false]
array2[5]="dinesh"
console.log(array2)
console.log(array1[1],array2[2])
// Object 
let PObj={
    Name1 :"Malli",
    Agee1 :19,
    Gender1:"Female",

    Name  :"Pokesh",
    Agee  :22,
    Gender:"male"
    
}
PObj={

    Name2  :"kumar",
    Age2  :24,
    Gender2:"male" 
}
PObj["Relation"]="Married"
PObj["Bond"]="Friend"
console.log(PObj)

// Operators
// Arithmatic Operators

console.log("Real val:",array1[1]+3)
console.log("Addition",PObj.Agee1 + 10)
console.log("Subraction",PObj.Agee1 - 10)
console.log("Multipilication",PObj.Agee1 * 10)
console.log("Division",PObj.Agee1 / 10)
console.log("Reminder",PObj.Agee1 % 10)
let add=20;
array1[1]=array1[1]+10;
console.log(array1)
console.log("changed val:",array1[1]+3)

// Logical Operators
console.log(10>=10)
console.log(10==10)

// Logical Operators
// 1.&& if any one value is false then the answer is false
// 2.|| if any one value is true then the answer is true
// 3.!

console.log("Comparison Operator is Start....")

//Comparison Operators
// 1.equal to ==
// 2.equal value and equal type ===
// 3.not equal !=
// 4.not equal value or not equal type !==
// 5.less than <
// 6.greater tan >
// 7.less than or equalst to <=
// 8.greater than or equals to >=

console.log(10>5 && 2>5) //if any one value is false then the answer is false
console.log(2>5 || 10>5 ) //if any one value is true then the answer is true
console.log((10>5 && 2>5 )|| 100==100) // in this case the && is false but the outside of && i mean || is true so answer is true 
console.log((10>5 || 2>5 )&& 100==10) //in this case the || is true but the outside of || i mean && is false so answer is false

// Ternary Operators
let tny=100;
11>5? tny=tny+1:tny=0;
console.log(tny)

let tny1=""
12<18? tny1="too young to vote":tny1="old enough to vote";
console.log(tny1)

// Loop
let j=5;
for(i=0;i<array1.length;i++){
    console.log("Hello",i)
    console.log(array1[i] ,i)
   
}
//While Loop
console.log("While Started:")
let wh=0
while(wh<=array1.length){
    console.log("While",array1[wh])
    wh++
}
// If else Loop
console.log("If else Loop Started")
let loop=12;
if(loop!=10){
    console.log(loop)
    loop=loop+5;
    console.log(loop)
}else if(loop<5){
    loop=loop-2
    console.log("Sub",loop)
}else{
    console.log("Addition Faild")
}

    setTimeout(()=>{
        for(let i=0;i<3; i++){
        console.log(i)
        }
    },3000);
    
        for(let i=10;i<13;i++){
        setInterval(()=>{
        console.log(i)
        },3000);
    }
