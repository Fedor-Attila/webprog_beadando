class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name} (${this.age} éves)`;
    }
}

class Dog extends Animal {
    constructor(name, breed, age) {
        super(name, age);
        this.breed = breed;
    }

    describe() {
        return `${this.name} (${this.breed}, ${this.age} éves)`;
    }
}

const dogs = [];

function addDog() {
    const name = document.getElementById('dogName').value.trim();
    const breed = document.getElementById('dogBreed').value.trim();
    const age = document.getElementById('dogAge').value.trim();

    if (!name || !breed || !age) {
        alert("Kérlek töltsd ki az összes mezőt!");
        return;
    }

    const newDog = new Dog(name, breed, age);
    dogs.push(newDog);
    displayDogs();
}

function displayDogs() {
    const dogList = document.getElementById('dogList');
    dogList.innerHTML = "";

    dogs.forEach(dog => {
        const p = document.createElement('p');
        p.innerText = dog.describe();
        dogList.appendChild(p);
    });
}
