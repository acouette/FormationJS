const person = {


    get name() {
        return this._name;
    },

    set name(name) {
        if (typeof name === 'string' && name.length > 0) {
            this._name = name;
        }
    }

};

person.name = 4;

console.log(person.name);


person.name = 'Antoine';

console.log(person.name);