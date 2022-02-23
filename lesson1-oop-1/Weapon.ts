import Item from './Item';

export default abstract class Weapon extends Item {
  static MODIFIER_CHANGE_RATE: number = 0.05;
  protected damageModifier: number;
  protected durabilityModifier: number;

  constructor(name: string, protected baseDamage: number, protected baseDurability: number, value: number, weight: number) {
    super(name, value, weight);
    this.damageModifier = Weapon.MODIFIER_CHANGE_RATE;
    this.durabilityModifier = Weapon.MODIFIER_CHANGE_RATE;
  }

  get currentDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  get currentDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  public abstract polish(): void;

  use(): string {
    let result: string;
    if (this.currentDamage > 0) {
      result = `You use the ${ this.name }, dealing ${ this.currentDamage } points of damage.`;
      this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;
      this.damageModifier -= Weapon.MODIFIER_CHANGE_RATE;
      if (this.currentDamage <= 0) {
        result += `\nThe ${ this.name } breaks.`;
      }
    } else {
      result = `You can't use the ${ this.name }, it is broken.`;
    }
    return result;
  }

  override toString(): string {
    return `${ super.toString() }, Damage: ${ this.currentDamage }, Durability: ${ this.currentDurability }`;
  }
}
