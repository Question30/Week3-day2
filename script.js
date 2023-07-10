
//Class Cat

class Cat{
    constructor(name, color, age, type){
        this.name = name;
        this.color = color;
        this.age = age;
        this.type = type;
        this.isAwake = true;
    }

    takeNap(){
        this.isAwake = false;
        console.log("Taking a cat nap");
    }

    toString(){
        console.log(`${this.name} is a ${this.color} ${this.type} cat.`);
    }

    meow(){
        console.log(`${this.name} meows....`);
    }
}

const bombay = new Cat("Kage", "Black", 1, "Bombay");
const mancoon = new Cat("Meliodas", "Yellow", 3, "Mancoon");

bombay.meow();
bombay.takeNap();
bombay.toString();

mancoon.meow();
mancoon.takeNap();
mancoon.toString();

//Pirate Class

class Pirate {

    constructor(name , bounty, epithet, crew){
       this.name = name;
       this.bounty = bounty;
       this.epithet = epithet;
       this.crew = crew;
    }

    getBounty(){
        console.log(`${this.epithet} ${this.name}'s bounty is $${this.bounty}`);
    }

    getName(){
        console.log(`${this.epithet} ${this.name}`);
    }

    getCrew(){
        console.log(`${this.epithet} ${this.name} of the ${this.crew}`);
    }

  }

  const strawHats =[];
  const yonkos = [];

  //Strawhat pirates
  const luffy = new Pirate("Luffy", 30000000, "Straw Hat", "Straw Hat Pirates");
  const zoro = new Pirate("Zoro", 1200000, "Pirate Hunter", "Straw Hat Pirates");
  const sanji = new Pirate("Sanji", 70000, "Black Leg", "Straw Hat Pirates");

  strawHats.push(luffy);
  strawHats.push(zoro);
  strawHats.push(sanji)

  //Yonko Pirates
  const shanks = new Pirate('Shanks', 40000000, 'Red Haired', 'Red Hair Pirates');
  const kaido = new Pirate('Kaido', 40000000, 'The Strongest Creature', 'Beast Pirates');
  const linlin = new Pirate('Charlotte Linlin', 40000000, 'Big Mom', 'Big Mom Pirates');

  yonkos.push(shanks);
  yonkos.push(kaido);
  yonkos.push(linlin);

  strawHats.forEach(function(strawHat) {
    console.log(strawHat.name);
    console.log(strawHat.crew);
    console.log(strawHat.epithet);
  });

  yonkos.forEach(function(yonko) {
    console.log(yonko.name);
    console.log(yonko.crew);
    console.log(yonko.epithet);
  });


  