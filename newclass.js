function book(name, email, title, year, author, shortDescription) {
    this.name = name;
    this.email = email;
    this.title = title;
    this.year = year;
    this.author = author;
    this.shortDescription = shortDescription;
}

let nameB = "shit"
let titleB = "titi";
let yearB = 2021;
let authorB = "author";
let shortDescriptionB = "short description";
let emailB = "email";


let asd= new book(nameB, emailB, titleB, yearB, authorB, shortDescriptionB);
console.log(asd.name);