let srpl="Hello this is frontend"
console.log(srpl.replace("Hello","Welcome"))
srpl=srpl.replace("Hello","Good")
console.log(srpl)
console.log(srpl.startsWith("Go")) //it will show in boolean values 
console.log(srpl.endsWith("nd"))

// Search methods
let sear="Find a Swords by using Search methods"
console.log(sear.search("b")) // the search methods will show index value
console.log(sear.search(/s/i)) //i methods is incase sensitive(upper or lower )methods  //regular expression

// match methods
console.log("match methods Start")
console.log(sear.match("s")) 
console.log(sear.match(/s/i)) 
console.log(sear.match(/s/ig)) //when we use /g here it will show all the value in sear
let mat=sear.match(/s/ig)
console.log("Sear's S length:",mat.length)

// Match All
console.log("Match all Start Here")
console.log(sear.matchAll("s"))
let StrinToO=sear.matchAll("s")
console.log(Array.from(StrinToO))   
// console.log(Array.from(StrinToO)[1].input) 
// console.log(Array.from(StrinToO)[1].index)
// console.log(Array.from(StrinToO)[1])   

// Interwive Questions 1.Search 2.Sort 3.occurance 4.Duplicate 5.pattern 6.Filter


//Array's Inbuild Methods

let arr1=[4,6,2,9,5]
arr1.push(9.5) //push the last value of array in array
console.log(arr1) 
arr1.unshift(1) // add array value in starting of array
console.log(arr1)
console.log("Pop values:")
arr1.pop() // pop helps to delete the array last value
console.log(arr1)
console.log("Shift values:")
arr1.shift() //shift helps to remove the array first value
console.log(arr1)

console.log("Array Length =",arr1.length)
console.log(arr1.toString()) //to change array to string once it's change to  string u can use all string methods
let arr2=[10,30,20,40]
console.log(arr1.concat(arr2)) //using cancat u can add two array 
console.log(arr1.concat(["hello",30,"good",69])) //cancat we can add two array and we can create new one here also

//Spread Operators or Three Dot
console.log("\nSpread Operators or Three Dot Start ")

arr3=[arr1,[44,33,66,77],arr2,[55,99,29,49,59]] //it print all array into one large array 
console.log(arr3) //normal spread operatos
console.log(arr3[1][2]) // u can use the index value of both to print some specific value

arr4=[...arr1,...arr2,...[11,22,33,44]] //it will print all value in one single array
console.log(arr4)
console.log(arr4[10])

arr4.sort() //assending order sorting methods use sort methos and same elements sort
console.log(arr4)

arr4.splice(4,2,"Im","u") //splice to insert value based on index value, and remove value ,and add many value 
console.log(arr4)
arr4.splice(4,5) //splice to insert value based on index value and remove value and add value 
console.log(arr4)
console.log(arr4.slice(1,4)) // it print first index to last index before value, array only have slice methods
console.log(arr4.includes(10)) // in array us have to give exact elements to find includes 
console.log(arr4.join(" (^_^) ")) // u can use join(any symbols) to seperate array instead of , comma
console.log(arr4.join("(^_^)")[0,5])
let arr5=[1,2,3,6,9,10]
arr5.reverse() // using reverse methods u can reverse array 
console.log(arr5)
arr5.fill(0,1,5) // to fill the value u want, from where to where by using index value,it will work untill before the index value
console.log(arr5)