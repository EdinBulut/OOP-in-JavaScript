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

//Magazine constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

//Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate magazine object
const magazine1 = new Magazine('Magazine One', 'Brko Brkson', 2018, 'Aug');

//Use magazine constructor
Magazine.prototype.constructor = Magazine;



// console.log(magazine1);
// console.log(magazine1.getSummary());
