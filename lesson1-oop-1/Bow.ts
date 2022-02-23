import Weapon from './Weapon';

export default class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('bow', baseDamage, baseDurability, value, weight);
  }

  public polish() {
    this.durabilityModifier += Weapon.MODIFIER_CHANGE_RATE;
    if (this.durabilityModifier > 1) {
      this.durabilityModifier = 1;
    }
  }
}
