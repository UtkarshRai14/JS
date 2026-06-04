const sym1 = Symbol("key1")
const myobj = {
    name : "Harry Potter",
    "full name": "Harry James Potter",
    age : 11,
    email: "harry@hogwards.com",
    greeting: function(){
        console.log("Hello User")
    },
    [sym1]: "symvalue"
}
myobj.bestfriend = "Ron"
console.log(myobj[1])

