class Books {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Vrko i Cvrko';
    }
}

//Instantiate Object
const bookP = new Books('Book One', 'Brko Brkonis', 2013);




// console.log(bookP);
// bookP.revise(2005);
// console.log(bookP);
// console.log(Books.topBookStore());


