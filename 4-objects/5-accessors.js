const person = {

  //getter qui retourne l'attribut _name
  get name() {
    return this._name;
  },

  //setter qui ne définit le _name que si le type est string et est non vide
  set name(name) {
    if (typeof name === 'string' && name.length > 0) {
      this._name = name;
    }
  }

};

//on set une string
person.name = 'John';
//ok
console.log(person.name);

//on set un number
person.name = 4;
//not ok
console.log(person.name);

