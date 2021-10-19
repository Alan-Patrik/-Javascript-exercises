class Person {
  constructor(firstName, lastName, age, gender, interests) {
    this.name = [`${firstName} ${lastName}`];
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = {};
  }

  Bio() {
    return `${[this.name]} is ${this.age} years old. They like ${
      this.interests
    }`;
  }

  Greeting() {
    return `Hi! I'm ${[this.name]}.`;
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, age, gender, interests, subject) {
    super(firstName, lastName, age, gender, interests);
    this.subject = subject;
    this.prefix = "";
  }

  Greeting() {
    if(this.gender === "Masculine" || this.gender === "masculine" || this.gender === "M" || this.gender === "m") {
        this.prefix = "Sr";
    }

    if(this.gender === "Feminine" || this.gender === "feminine" || this.gender === "F" || this.gender === "f") {
        this.prefix = "Mrs";
    }

    return `Hello. My name is ${[this.prefix]} ${[this.lastName]}, and I teach ${[
      this.subject,
    ]}`;
  }
}

class Student extends Person {
  
    Greeting() {
      return `Yo! I'm ${[this.firstName]}.`;
    }
  }

let carlos = new Student("Carlos Alberto", "Cardozo", 30, "feminine", "Play video game!", "Math");

console.log(carlos.Greeting());
