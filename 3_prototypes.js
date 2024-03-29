//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year
    // this.getSummary = function() {
    //     return `${this.title} was written by ${this.author} in ${this.year}`
    // } 
}

//Get summary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

//Get age
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
}

//Revise / Change year
Book.prototype.revise  = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

//Instantiate an object
const book1 = new Book('Book One', 'Brko Brkonis', 2013);
const book2 = new Book('Book Two', 'Šmrko Šmrkonis', 2016);




// console.log(book2.getSummary());
// console.log(book1.getAge());

// console.log(book2);
// book2.revise(2010);
// console.log(book2);

