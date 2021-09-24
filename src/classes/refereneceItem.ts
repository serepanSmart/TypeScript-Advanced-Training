import { timeout } from "../decorators";

/* eslint-disable no-underscore-dangle */
abstract class ReferenceItem {
  // title: string;
  // year: number;

  // constructor(newTitle: string, newYear: number) {
  //   console.log('Creating a new ReferenceItem...');

  //   this.title = newTitle;
  //   this.year = newYear;
  // }

  private _publisher: string;

  #id: number;

  static department = 'Research Dep.';

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }
  constructor(id: number);
  constructor(
    id: number,
    title: string,
    year: number
  );
  constructor(
    id: number,
    public title?: string,
    protected year?: number
  ) {
    console.log('Creating a new ReferenceItem...');
    this.#id = id;
  }

  @timeout()
  prinItem(): void {
    console.log(`ReferenceItem CLASS ${this.title} was published in ${this.year}`);
    console.log(`ReferenceItem CLASS Department ${ReferenceItem.department}`);
  }

  getId(): number {
    return this.#id;
  }
  abstract printCitation(): void;
}

export { ReferenceItem };
