class User {
  constructor(length: number) {
    this.length = length;
  }

  // JS kennt nur number, kein float/int
  length: number;
}

export function printUser(user: User) {
  console.log(user);
}

printUser("Annette"); // Ok, weil string eine length-property hat
// printUser({}); das leere objekt hat keine length-property
