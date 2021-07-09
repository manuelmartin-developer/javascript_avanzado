class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }
    attack(){
        return this.power;
    };
    defend(damage){
        this.life -= damage; 
    };
};

class Maya extends Warrior {
constructor(life, power) {
        super(life, power);
    }
    drinkColacao(){
        return this.life +=10;
    }
};

class Aztec extends Warrior {
    constructor(life, power) {
            super(life, power);
        }
        drinkNesquick(){
            return this.life +=10;
        }
    };

let aztecaConCaraDeMalo = new Aztec(25, 10);
let mayaConCaraDeMalo = new Maya(35, 8);

aztecaConCaraDeMalo.drinkNesquick();
mayaConCaraDeMalo.drinkColacao();


aztecaConCaraDeMalo.defend(mayaConCaraDeMalo.attack());
mayaConCaraDeMalo.defend(aztecaConCaraDeMalo.attack());


console.log(aztecaConCaraDeMalo);
console.log(mayaConCaraDeMalo);
