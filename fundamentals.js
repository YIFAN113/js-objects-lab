const aCar = {
    owner : "Joe Bloggs",
    type : 'Toyota Corolla 1.8',
    registration : '201WD1058'
  };
  
  console.log(aCar.owner);
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  const bCar = {
    owner : 'Joe Bloggs',
    type : {
        make : 'Toyota',
        model : 'Corolla',
        cc : 1.8
    },
    registration : '201WD1058'
};
console.log(aCar.owner + ' drives a ' + aCar.type.make);

const cCar = {
  owner: "Joe Bloggs",
  type: {
    make: "Toyota",
    model: "Corolla",
    cc: 1.8
  },
  registration: { year: 201, county: "WD", number: 1058 }
};

console.log(aCar.owner + " drives a " + aCar.type.make);
console.log(
  "Reg. = " +
    aCar.registration.year +
    "-" +
    aCar.registration.county +
    "-" +
    aCar.registration.number
);

const dCar = {
  owner: "Joe Bloggs",
  previous_owners: [
    "Pat Smith - 1 Main Street",
    "Sheila Dwyer - 2 High Street"
  ],

};