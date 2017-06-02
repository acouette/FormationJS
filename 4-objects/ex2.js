const customer = {
  name: 'Joe',
  address1: '9 sentier des Crissets',
  address2: 'au fond à gauche',
  _zipCode: '95170',

  get fullAddress() {
    return `
        ${this.address1}
        ${this.address2}
        ${this._zipCode}
        `
  },

  get zipCode() {
    return this._zipCode;
  },

  set zipCode(zipCode) {
    if (zipCode.match(/\d{5}/)) {
      this._zipCode = zipCode;
    }
  }

};

console.log(customer.fullAddress);

const hiddenCustomer = (function () {

  const name = 'Joe';
  const address1 = '9 sentier des Crissets';
  const address2 = 'au fond à gauche';
  let _zipCode = '95170';

  return {

    get fullAddress() {
      return `
        ${address1}
        ${address2}
        ${_zipCode}
        `
    },

    get zipCode() {
      return _zipCode;
    },

    set zipCode(zipCode) {
      if (zipCode.match(/\d{5}/)) {
        _zipCode = zipCode;
      }
    }

  }

})();


console.log(hiddenCustomer.zipCode);
