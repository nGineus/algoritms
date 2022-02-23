// Create the inventory
import Inventory from './Inventory';
import Sword from './Sword';
import Bow from './Bow';
import Item from './Item';
import Pizza from './Pizza';
import ItemWeightComparator from './ItemWeightComparator';
import Weapon from './Weapon';

const inventory: Inventory = new Inventory();

// Create a set of items
const a: Weapon = new Sword(0.05, 0.7893, 300, 2.032);
const b: Weapon = new Bow(40, 0.7893, 200, 2);
const c: Weapon = new Sword(40, 1, 100, 3);
const pizza: Item = new Pizza(12, false);

// Add the items to the inventory
inventory.addItem(a);
inventory.addItem(b);
inventory.addItem(c);
inventory.addItem(pizza);

// Display the inventory
console.log(inventory.toString());

// Sort by natural order
inventory.sort();

// Display the new inventory
console.log(inventory.toString());

// Sort by weight
const comparator = new ItemWeightComparator();
inventory.sort(comparator);

// Display the inventory again
console.log(inventory.toString());

// Use the sword
console.log(a.use());
a.polish();
console.log(a.use());
console.log(a.use());
console.log(a.use());

// Use the bow
console.log(b.use());
b.polish();
console.log(b.use());
console.log(b.use());
