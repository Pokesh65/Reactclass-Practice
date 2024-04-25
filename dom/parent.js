function parent(){
    console.log("Outer Parent")
    return function child(){
        console.log("Inner Child")
    }
}
parent()()
// LocalStorage and SessionStorage
