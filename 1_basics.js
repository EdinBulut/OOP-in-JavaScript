// const a1 = 'Hello';
// console.log(typeof a1);

// const a2 = new String('Hello');
// console.log(typeof a2);

// console.log(window);
// window.alert(1);
// alert(2);

// console.log(navigator.appVersion);

const bookOne = {
    title: 'Book One',
    author: 'Brko Brkonis',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    } 
}
// console.log(bookOne.getSummary());

const bookTwo = {
    title: 'Book Two',
    author: 'Šmrko Šmrkonis',
    year: '2015',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    } 
}
// console.log(bookTwo.getSummary());
// console.log(Object.values(bookTwo));
// console.log(Object.keys(bookTwo));
