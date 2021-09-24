import { format, logger, logMethod, logParameter, sealed, writable } from '../decorators';
import * as Interfaces from './../interface';

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian, Interfaces.Person {
  @format()
  name: string;
  email: string;
  department: string;
  test: string;
  @logMethod
  assistCustomer(@logParameter castName: string): void {
    console.log(`${this.name} is assiting ${castName}`);
  }

  @writable(true)
  assistFaculty() {
    console.log('Assisting faculty');
  }

  @writable(false)
  teachCommunity() {
    console.log('b.	teachCommunity');
  }
}

export { UniversityLibrarian };