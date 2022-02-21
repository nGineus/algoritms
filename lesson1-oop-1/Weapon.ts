import Item from './Item';

export default abstract class Weapon extends Item {
  protected currentDamage: number;
  static MODIFIER_CHANGE_RATE: number = 20;

  constructor(name: string,
              protected baseDamage: number,
              protected baseDurability: number,
              value: number,
              weight: number) {
    super(name, value, weight);
    this.currentDamage = baseDamage;
  }

  public abstract polish(): void;

  use(): string {
    this.currentDamage -= Weapon.MODIFIER_CHANGE_RATE;
    return this.currentDamage > 0
      ? `You use the ${ this.name }, dealing ${ this.currentDamage } points of damage.`
      : `You can't use the ${ this.name }, it is broken.`;
  }

  override toString(): string {
    return `${ super.toString() }, Damage: ${ this.currentDamage }, Durability: ${ this.baseDurability }`;
  }
}
