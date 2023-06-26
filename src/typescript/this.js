function Welcome() {
  // console.log(this)
}

class User {
  name;
  constructor(name) {
    this.name = name;
  }
  test() {
    // console.log(this)
  }
  printName() {
    console.log(this.name);
  }

  printName2 = () => {
    console.log(this.name);
  };
}

export const run = () => {
  Welcome();

  const markus = new User("Markus");
  const tobi = new User("Tobi");
  markus.printName = markus.printName.bind(tobi);
  markus.printName2 = markus.printName2.bind(tobi);

  markus.printName2();
};
