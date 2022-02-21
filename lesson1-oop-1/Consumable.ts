import Item from './Item';

export default abstract class Consumable extends Item {
  private _consumed: boolean;
  get consumed(): boolean {
    return this._consumed;
  }
  set consumed(value: boolean) {
    this._consumed = value;
  }
  
  constructor(name: string, value: number, weight: number, protected spoiled: boolean) {
    super(name, value, weight);
  }

  use(): string {
    return 'USE Consumable';
  }
}
