import Comparable from './Comparable';

let id = 0;

export default abstract class Item implements Comparable<Item> {
  _numberOfItems: number = 0;

  constructor(protected _name: string, protected _value: number, protected _weight: number) {
    this._id = Item.getId();
    console.log(`Constructing Item with ID: ${ this.id }, VALUE: ${ this.value }, NAME: ${ this.name }, WEIGHT: ${ this.weight }`);
  }

  protected _id: number;

  get id(): number {
    return this._id;
  }

  get value(): number {
    return this._value;
  }
  set value(value: number) {
    this._value = value;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get weight(): number {
    return this._weight;
  }
  set weight(value: number) {
    this._weight = value;
  }

  static reset() {
    id = 0;
  }

  static getId() {
    return id++;
  }

  public compareTo(other: Item): number {
    if (this.value !== other.value) {
      return this.value > other.value ? 1 : -1;
    }
    return this.name.toLowerCase().localeCompare(other.name.toLowerCase());
  }

  public abstract use(): void;

  toString(): string {
    return `${ this.name } - Value ${ this.value }, Weight: ${ this.weight }`;
  }
}
