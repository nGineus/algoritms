import Item from './Item';
import Comparator from './Comparator';
import ItemComparator from './ItemComparator';

export default class Inventory {
  private items: Item[] = [];

  constructor() {
  }

  public addItem(item: Item) {
    this.items.push(item);
  }

  public sort();
  public sort(comparator: ItemComparator);
  public sort(comparator?: ItemComparator) {
    console.log('Sorting...');
    if (comparator) {
      this.items.sort((a, b) => comparator.compare(a, b));
    } else {
      this.items.sort((a, b) => a.compareTo(b));
    }
  }

  public toString(): string {
    return 'Inventory: \n...' + this.items.map(item => `ID: ${ item.id } ${ item.name } ${ item.value }`).join('\n...');
  }
}
