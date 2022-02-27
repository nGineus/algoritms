import Weapon from './Weapon';

export default class Sword extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('sword', baseDamage, baseDurability, value, weight);
  }

  public polish() {
    this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
    if (this.damageModifier > (this.baseDamage * 1.25)) {
      this.damageModifier = this.baseDamage * 1.25;
    }
  }
}
