const customer = {
  birthDate: new Date(),
  firstName: 'Paul',
  lastName: 'Nord',
  accountBalance: 1232.12,
  premium: true,
  getName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};

for (let prop in customer) {
  if (typeof customer[prop] === 'string') {
    console.log(`attribute ${prop} has value ${customer[prop]}`)
  }
}

for (let prop in customer) {
  if (customer[prop] instanceof Date) {
    console.log(`attribute ${prop} has value ${customer[prop]}`)
  }
}

for (let prop in customer) {
  if (customer[prop] instanceof Function) {
    console.log(`attribute ${prop} has value ${customer[prop]()}`)
  }
}
