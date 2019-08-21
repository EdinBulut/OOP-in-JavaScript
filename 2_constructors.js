//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    } 
}

//Instantiate an object

const bookA = new Book('Book One', 'Brko Brkonis', '2013');
const bookB = new Book('Book Two', 'Šmrko Šmrkonis', '2016');



// console.log(bookA.getSummary());
