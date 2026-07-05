class Book{
    constructor(title, author, year, status, coverImage){
        this.title = title;
        this.author = author;
        this.year = year;
        this.status = status;
        this.coverImage = coverImage;
    }
}

let books = [];

function addBook(title, author, year, status, coverImage){
    const obj = new Book(title, author, year, status, coverImage);
    books.push(obj);
}

addBook("AOT", "Isayama", 2012, "completed");
addBook("Naruto", "idk", 2000, "plan-to-read");
addBook("Bleach", "idek", 2003, "reading");

function removeBook(){

}

console.log(books);