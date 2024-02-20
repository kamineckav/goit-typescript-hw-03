class Key {
  private signature: number = Math.random() * 10;

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key, public name: string) {
    this.key = key;
    this.name = name;
  }

  getKey(): Key {
    return this.key;
  }
  getName(): string {
    return this.name;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(personKey: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      console.log(`${person.name} entered the house.`);
    } else {
      console.log("The door is closed. You cannot come in.");
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(personKey: Key): void {
    if (personKey.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is unlocked. You can come in!");
    } else {
      console.log("You do not have the correct key to open the door.");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key, "Bobo");

house.openDoor(person.getKey());
house.comeIn(person);

export {};
