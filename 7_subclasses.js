class OneBook {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

//Magazine subclass
class OneMagazine extends OneBook {
 constructor(title, author, year, month) {
     super(title, author, year);
     this.month = month;
 }
}

//Instantiate Magazine 
const mag1 = new OneMagazine('Magazine One', 'Brko Brkson', 2018, 'Aug');




console.log(mag1);
console.log(mag1.getSummary());
