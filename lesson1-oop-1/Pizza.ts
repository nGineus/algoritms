import Consumable from './Consumable';

export default class Pizza extends Consumable {
  slicesEaten: number;

  constructor(protected numberOfSlices: number, protected spoiled: boolean) {
    super('pizza', 50, 12, spoiled);
  }

  eat(): string {
    if(this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;
      this.consumed = true;
    }
    return this.slicesEaten < this.numberOfSlices
      ? `You eat the ${ this.name }.${ this.spoiled ? 'You feel sick.' : '' }`
      : ``;
  }

  use(): string {
    return this.eat();
  }
}
