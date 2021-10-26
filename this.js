const instructor = {
    name: "Jon",
    whatIsThis: function() {console.log('this is', this)},
    sayName: function() {console.log(this.name)}

}
instructor.whatIsThis()
instructor.sayName()


