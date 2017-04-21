let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
//Object.assign (user, {name: "Pete", isAdmin: true})
delete user.name
//Object.assign (user, {name: "Pete", isAdmin: true})

console.log(user)
