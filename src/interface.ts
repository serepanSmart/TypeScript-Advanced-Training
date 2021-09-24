import { Category } from './enums';

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  // markDamaged?: (reason: string) => void;
  // markDamaged?(reason: string): void;
  markDamaged?: DamageLogger;
}

interface DamageLogger {
  (reason: string): void;
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void;
}

// Task 07.02. Generic Interfaces and Classes

interface Magazine {
  title: string;
  publisher: string;
}

interface ShelfItem {
  title: string;
}

interface LibMgrCallback {
  (err: Error, tites: string[]): void;
}

interface CallBack<T> {
  (err: Error, data: T): void;
}

export { Book, DamageLogger as Logger, LibMgrCallback, CallBack, Person, Author, Librarian, Magazine, ShelfItem };