import Item from './Item';
import Weapon from './Weapon';

export default class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('bow', baseDamage, baseDurability, value, weight);
    console.log(`Constructing bow ID: ${ this.id }, VALUE: ${ this.value }, NAME: ${ this.name }, WEIGHT: ${ this.weight }`);
  }

  public polish() {
    console.log('Polishing Bow');
  }
}
