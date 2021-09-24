/* eslint-disable no-redeclare */
import { Category } from './enums';
import { Book, CallBack, LibMgrCallback } from './interface';
import { BookOrUndefined, BookProperties } from './types';
import RefBook from './classes/encyclopedia';

export function getAllBooks(): ReadonlyArray<Book> {
  const books: readonly Book[] = <const>[
    { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true },
    { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
    { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
  ];
  return books;
}

export function logFirstAvailable(books: ReadonlyArray<any> = getAllBooks()): void {
  const numberOfBooks: number = books.length;

  const title: string = books.find((book: { available: boolean }) => book.available)?.title;

  console.log(`Number of books: ${numberOfBooks}`);
  console.log(`First Available ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
  const books: any = getAllBooks();

  const titles = books.filter(book => book.category === category).map(book => book.title);

  return titles;
}

export function logBookTitles(titles: string[]): void {
  console.log(titles);
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
  const books: readonly any[] = getAllBooks();
  const { title, author } = books[index] ?? {};
  return [title, author];
}

export function calcTotalPages(): bigint {
  const data = <const>[
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
  ];

  return data.reduce((acc: bigint, obj) => {
    return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
  }, 0n);
}

export function createCustomerID(name: string, id: number): string {
  return `${id} - ${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer name ${name}`);

  if (age) {
    console.log(`Customer age ${age}`);
  }
  if (city) {
    console.log(`Customer city ${city}`);
  }
}

export function getBookByID(id: number): BookOrUndefined {
  const books = getAllBooks();
  return books.find((book) => book.id === id);
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Customer ${customer}`);
  return bookIDs.map(id => {
    const book = getBookByID(id);
    return book;
  }).filter(book => book.available)
    .map(book => book.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(id: number, available: boolean, author: string): number[];
export function getTitles(...args: any): (string | number)[] {
  const books: readonly any[] = getAllBooks();
  if (args.length === 1) {
    const [arg] = args;

    if (typeof arg === 'string') {
      return books.filter(book => book.author === arg).map(book => book.title);

    } else if (typeof arg === 'boolean') {
      return books.filter(book => book.available === arg).map(book => book.title);
    }
  } else if (args.length === 2) {
    const [id, available] = args;

    if (typeof id === 'number' && typeof available === 'boolean') {
      return books.filter(book => book.id === id && book.available === available).map(book => book.title);
    }
  } else if (args.length === 3) {
    const [id, available] = args;
    return books.filter(book => book.id === id && book.available === available).map(book => book.id);
  }
}

export function assertStringValue(val: any): asserts val is string {
  if (typeof val !== 'string') {
    throw new Error('value should have been a string');
  }
}

export function assertRefBookInstance(condition: any): asserts condition {
  if (!condition) {
    throw new Error('It is not instance of RefBook');
  }
}

export function bookTitleTransform(title: any) {
  assertStringValue(title);

  return [...title].reverse().join('');
}

export function printBook(book: Book): void {
  console.log(`Book title${book.title} author ${book.author}`);
}

// export function getProperty(book: Book, prop: BookProperties): any {
//   if (typeof book[prop] === 'function') {
//     return book[prop]['name'];
//   }
//   return book[prop];
// };

export function getProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
  if (typeof obj[prop] === 'function') {
    return obj[prop]['name'];
  }
  return obj[prop];
};

export function printRefBook(data: any): void {
  assertRefBookInstance(data instanceof RefBook);
  data.prinItem();
}

// 07. Generics
// Task 07.01. Generic Functions

export function purge<T>(inventory: T[]): Array<T> {
  return inventory.slice(2);
}

// 09. Asynchronous Patterns
// Task 09.01. Callback Functions

// export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
export function getBooksByCategory(category: Category, callback: CallBack<string[]>): void {
  setTimeout(() => {
    try {
      const titles = getBookTitlesByCategory(category);

      if (titles.length) {
        callback(null, titles);
      } else {
        throw new Error('No Books Found');
      }
    } catch (err) {
      callback(err, null);
    }
  }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
  if (err) {
    console.log(`Error Message ${err.message}`);
  } else {
    console.log(titles);
  }
}

// Task 09.02. Promises

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {
      const titles = getBookTitlesByCategory(category);

      if (titles.length) {
        resolve(titles);
      } else {
        reject('No Books Found');
      }
    }, 2000);
  });
}

// Task 09.03. Async Functions

export async function logSearchResults(category: Category): Promise<void> {
  const result = await getBooksByCategoryPromise(category);
  const result2 = await getBooksByCategoryPromise(category);
  console.log(result, result2);

  // Promise.all, Promise.race, Promise.allSettled, Promise.any
}
