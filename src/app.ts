import { Library } from './classes/library';
import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import Encyclopedia from './classes/encyclopedia';
import { Category } from './enums';
import { createCustomer, getAllBooks, getBookByID, getBooksByCategory, getBooksByCategoryPromise, getProperty, logCategorySearch, logSearchResults, printBook, printRefBook, purge } from './functions';
import { Author, Book, Librarian, Logger, Magazine } from './interface';
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';

/* eslint-disable no-redeclare */
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// ============================ //
// BASICS

// logFirstAvailable();
// logBookTitles(getBookTitlesByCategory());
// console.log(getBookAuthorByIndex(20));
// console.log(calcTotalPages());

// ================== 03 FUNCTIONS ===================== //

// Task 03.01


// const myId: string = createCustomerID('Ann', 30);
// console.log(myId);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id} - ${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 20));
// let idGenerator2: typeof createCustomerID;

// Task 03.02. Optional, Default and Rest Parameters



// createCustomer('Ann'); // with one param or nmultiple
// console.log(getBookTitlesByCategory());
// console.log(getBookByID(1));
// const myBook = сheckoutBooks('Ann', 1, 2, 3);
// console.log(myBook);

// TASK 03.03


// console.log(getTitles(false));
// console.log(getTitles(1, true));


// Task 03.04. Assertion Functions


// console.log(bookTitleTransform('typescript'));
// console.log(bookTitleTransform(1213));


// =========================== 04 INTERFACES ====================== //

// Task 04.01. Defining an Interface

// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   // year: 2015,
//   // copies: 3
//   pages: 200,
//   markDamaged: (reason: string) => console.log(`Damaged ${reason}`),
// };

// printBook(myBook);
// myBook.markDamaged('FAILED');

// Task 04.02. Defining an Interface for Function Types

// const logDamage: Logger = (reason: string) => console.log(`Damaged ${reason}`);
// logDamage('LOGDAMAGE FAILED');

// Task 04.03. Extending Interface



// const favouriteAuthor: Author = {
//   name: 'Ann',
//   email: 'auth@google.com',
//   numBooksPublished: 200
// };

// const favoriteLibrarian: Librarian = {
//   name: 'Boris',
//   email: 'auth@google.com',
//   department: 'department',
//   assistCustomer: (name: string) => console.log(name)
// };

// Task 04.04. Optional Chaining

// const offer: any = {
//   book: {
//     title: 'Essential TypeScript',
//   },
// };

// console.log(); --->
// -->
// offer.magazine;
// offer.magazine?.getTitle();
// offer.book.getTitle?.();
// offer.book.authors?.[0];


// Task 04.05. Keyof Operator
// console.log(getProperty(myBook, 'title'));

// =========================== 05 CLASSES ====================== //
// Task 05.01. Creating and Using Classes

// const ref = new ReferenceItem(1, 'Learn TS', 2021);
// console.log('Task 05.01', ref);
// ref.prinItem();
// console.log(ref.getId());

// Task 05.02. Extending Classes, Task 05.03. Creating Abstract Classes 1

// console.log('Task 05.01', refBook);
// refBook.prinItem();
// refBook.printCitation();
// let pr = Object.getPrototypeOf(refBook);
// pr = Object.getPrototypeOf(pr);
// console.log('PR', pr);

// Task 05.04. Interfaces for Class Types

// const favLibrarian: Person = new UniversityLibrarian();
// favLibrarian.name = 'Anna';
// favLibrarian.assistCustomer('Boris'); // недоступно от Person, но есть в Librarian
// Task 05.05. Intersection and Union Types

// const pBook: PersonBook = {
//   name: 'Anna',
//   email: 'ww@nn.com',
//   id: 1,
//   author: 'Anna',
//   title: 'Anna Book',
//   available: true,
//   category: Category.JavaScript
// };

// ========================= 06. Modules and Namespaces ==================== //

// Task 06.03. Default Export
// const refBook = new RefBook(1, 'Learn TS', 2021, 2);
// printRefBook(refBook);
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// Task 06.05. Dynamic Import Expression

// const flag = true;
// if (flag) {
//   const module = await import('./classes');

//   const reader = new module.Reader();
//   reader.name = 'Anna';
//   console.log('READER', reader);
// }

// Task 06.06. Type-Only Imports and Exports

// let library: Library = new Library();
// library = {
//   id: 1,
//   name: 'National Library',
//   address: 'unknown'
// };
// console.log(library);

// Task 07.01. Generic Functions
// const inventory: Book[] =
//   [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
//   ];

// console.log(purge(inventory));
// console.log(purge<Book>(inventory));
// console.log(purge<number>([1, 2, 3, 4]));

// Task 07.02. Generic Interfaces and Classes

// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// Task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'title123')); // error

// Task 07.04

// const book: BookRequiredFields = {
//   author: 'Ann',
//   available: false,
//   category: Category.Angular,
//   id: 1,
//   markDamaged: null,
//   title: 'Ann Auth',
//   pages: 100
// };

// const updBook: UpdatedBook = {
// };

// const params: Parameters<СreateCustomerFunctionType> = ['Anna'];
// const params2: Parameters<typeof createCustomer> = ['Anna', 40];
// createCustomer(...params);

// 08. Decorators
// Task 08.01. 08.02 Class Decorators (sealed, logger)

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// UL.UniversityLibrarian['b'] = 1; // error
// Object.getPrototypeOf(favoriteLibrarian);
// // UL.UniversityLibrarian.prototype['c'] = 1; // error
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian['printLibrarian']();

// Task 08.03 Class Decorators (sealed, logger)
// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.assistFaculty = null;
// favoriteLibrarian.teachCommunity = null;

// Task 08.04. Method Decorator (timeout)

// const refBook = new RefBook(1, 'Learn TS', 2021, 2);
// refBook.prinItem();

// Task 08.05. Parameter Decorator (logParameter)
// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');
// console.log(favoriteLibrarian);
// console.log(favoriteLibrarian.name);

// Task 08.07. Accessor Decorator
// const refBook = new RefBook(1, 'Learn TS', 2021, 2);
// refBook.copies = 5;


// 09. Asynchronous Patterns
// Task 09.01. Callback Functions

// console.log('BEGIN');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('END');

// Task 09.02. Promises

// console.log('BEGIN');
// getBooksByCategoryPromise(Category.JavaScript)
//   .then(titles => {
//     console.log(titles);
//     return Promise.resolve(titles.length);
//   })
//   .then(titlesLength => {
//     console.log(titlesLength);
//   })
//   .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
//   .then(titles => console.log(titles))
//   .catch(reason => console.log(reason));

// console.log('END');

// Task 09.03. Async Functions

console.log('BEGIN');
// logSearchResults(Category.JavaScript);
logSearchResults(Category.CSS)
  .catch(reason => console.log(reason));
console.log('END');



















