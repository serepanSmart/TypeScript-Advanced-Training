/* eslint-disable no-underscore-dangle */
import { positiveInteger } from '../decorators';
import { ReferenceItem } from './refereneceItem';

export default class Encyclopedia extends ReferenceItem {

  private _copies: number;

  @positiveInteger
  get copies(): number {
    return this._copies;
  }

  set copies(value: number) {
    this._copies = value;
  }

  constructor(id: number, title: string, year: number, public edition: number) {
    super(id, title, year);
  }

  prinItem(): void {
    super.prinItem();
    console.log(`Encyclopedia Class Edition ${this.edition} in ${this.year}`);
  }

  printCitation() {
    console.log(`ABSTRACT ${this.title} - ${this.year}`);
  };
};