//Object of protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    } 
}

//Create object
// const bookM = Object.create(bookProtos);
// bookM.title = 'Book One';
// bookM.author = 'Brko Brkson';
// bookM.year = '2013';

const bookM = Object.create(bookProtos, {
    title: {value: 'Book One'},
    author: {value: 'Brko Brkson'},
    year: {value: 2013}
});



// console.log(bookM);
