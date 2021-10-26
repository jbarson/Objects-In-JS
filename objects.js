// <----- Objects ----->

const grace = {
    glasses: true,
    couch: "comfy",
    top: "white",
    favFood: ['broccoli', 'chocolate', 'oranges'],
    sayHi: function() {
        console.log("grace says hi!")
    },
    askCouchLevel: function() {
        console.log("couch", this.couch)
    }
}

console.log("Graces couch is", grace.couch)

console.log('Grace likes', grace.favFood[0])

console.log('Graces top is', grace["top"])

grace["good student"] = true

console.log(grace)

grace.sayHi()

grace.askCouchLevel()