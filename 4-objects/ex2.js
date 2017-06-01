const customer = {
    name: 'Joe',
    address1: '9 sentier des Crissets',
    address2: 'au fond à gauche',
    zipCode: '95170',

  get fullAddress(){
        return `
        ${this.address1}
        ${this.address2}
        ${this.zipCode}
        `
  }
};


console.log(customer.fullAddress);