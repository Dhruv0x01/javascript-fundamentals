
class Character{

    constructor(name, health, maxHealth, attackPower){
        this.name = name;
        this.health = health;
        this.maxHealth = maxHealth;
        this.attackPower = attackPower;
    }

    attack(target){
        console.log(`${this.name} attacks ${target.name}!!`);
        target.takeDamage(this.attackPower);
    }

    takeDamage(amount){
        this.health = Math.max(this.health - amount, 0);
        console.log(`${this.name} takes ${amount} damage! (${this.health}/${this.maxHealth} HP remaining)`);
        
        if(this.health === 0){console.log(`${this.name} has fallen!`)}
    }

    isAlive(){
        return this.health > 0;
    }
}

// Warrior -> Tanky (120 HP), Moderate Attack(25) 
class Warrior extends Character{
    constructor(name){
        super(name, 120, 120, 25);
    }

    // Special ability of warrior
    berserk(target){
        console.log(`${this.name} flies into a rage!!`);
        console.log(`${this.name} uses berserk!!!`);
        target.takeDamage(2*this.attackPower);
        this.takeDamage(10);
    }
}
// Mage -> Glass canon(70 HP), High magic damage
class Mage extends Character{
    constructor(name){
        super(name, 70, 70, 18);
        this.mana = 50;
    }

    attack(target){
        super.attack(target);
        this.mana = Math.min(this.mana + 10, 50); // Making sure mana is capped at 50
        console.log(`${this.name} gained 10 mana!! (${this.mana}/50 mana remaining)`);
    }

    fireball(target){
        if(this.mana >= 20){
            console.log(`${this.name} used fireball on ${target.name}`);
            target.takeDamage(45);
            this.mana -= 20;
            console.log(`${this.name} has ${this.mana} mana left.`);
        }else{
            console.log(`${this.name}'s fireball attack failed!!`);
            console.log(`Not enough mana!`);
        }
    }
}

// Archer -> Balanced
class Archer extends Character{
    constructor(name){
        super(name, 90, 90, 22);
        this.arrows = 6;
    }

    attack(target){
        super.attack(target);
        this.arrows = Math.min(this.arrows + 2, 6);
        console.log(`${this.name} gained 2 arrows!! (${this.arrows}/6 arrows left)`);
    }

    multiShot(target){
        console.log(`${this.name} uses multishot!!!`);
        if(this.arrows >= 3){
            for(let i=0; i<3; i++){
                console.log(`Arrow ${i+1} hit ${target.name}!!`);
                target.takeDamage(12);
            }
            this.arrows -= 3;
            console.log(`${this.name} has ${this.arrows} arrow/s left!`);
        }else{
            console.log(`Not enough arrows!!`);
        }
    }

}

console.log("⚔️ ═══ BATTLE START ═══ ⚔️");
console.log("Igris the Warrior  vs  Goblin the Mage\n");

const igris = new Warrior("Igris");
const goblin = new Mage("Goblin");

let round = 1;

while(igris.isAlive() && goblin.isAlive()){
    console.log(`\n--- Round ${round} ---`);

    // Igris randomly berserks or attacks
    if(Math.random() < 0.5){
        igris.berserk(goblin);
    }else{
        igris.attack(goblin);
    }

    if(!goblin.isAlive()){
        console.log(`\n🏆 ${igris.name} wins!`);
        break;
    }

    // Goblin randomly fireballs or attacks
    if(Math.random() < 0.5){
        goblin.fireball(igris);
    }else{
        goblin.attack(igris);
    }

    if(!igris.isAlive()){
        console.log(`\n💀 ${goblin.name} wins!`);
        break;
    }

    round++;
}




