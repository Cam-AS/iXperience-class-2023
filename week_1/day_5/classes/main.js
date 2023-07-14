console.log('Connected!');

// Classes

class Person {
  constructor(firstName, lastName, age, address, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

  getFullName() {
    return `Full Name: ${this.firstName} ${this.lastName}`;
  }

  sayHello() {
    return `Good morning ${this.firstName} ${this.lastName}`;
  }

  addTwoNumbers(num1, num2) {
    return `Result: ${num1 + num2}`;
  }
}

const cam = new Person(
  'Cameron',
  'Kirkpatrick',
  29,
  '123 Meery Lane',
  '0635776444'
);

console.log(cam);
console.log(cam.getFullName());
console.log(cam.sayHello());
console.log(cam.addTwoNumbers(10, 5));

// Inheritance

class Customer extends Person {
  constructor(
    firstName,
    lastName,
    age,
    address,
    phoneNumber,
    dob,
    membershipType
  ) {
    // When we instantiate a Customer, we want to call the parent constructor
    super(firstName, lastName, age, address, phoneNumber);

    this.dob = dob;
    this.membershipType = membershipType;
  }

  // Static functions are not available on an instance
  // something that applies to all instances
  // Membership costs 500 dollars
  static getMembershipCost() {
    let cost = 500;
    return `Membership costs: $${cost}`;
  }

  getMembershipType() {
    return `${this.membershipType} membership`;
  }
}

const cameron = new Customer(
  'Cameron',
  'Kirkpatrick',
  29,
  '123 Meery Lane',
  '0635776444',
  '23/11/1993',
  'Premium'
);

const jamie = new Customer(
  'Jamie',
  'Finnegan',
  30,
  '143 Giant Avenue',
  '0678993442',
  '11/02/1993',
  'Premium'
);

console.log(jamie);
console.log(jamie.getMembershipType());
console.log(jamie.getFullName());
console.log(jamie.sayHello());

console.log(Customer.getMembershipCost());

const gertrude = new Customer(
  'Gertrude',
  'Von Blauscwitz',
  60,
  '88 Holy Lane',
  '011 426 4555',
  '02/02/1943',
  'Medallion'
);

const grant = new Customer(
  'Grant',
  'Jenkins',
  25,
  '77 Victory Street',
  '084 355 6445',
  '12/11/1998',
  'Basic'
);

let customers = [];
customers.push(cameron);
customers.push(gertrude);
customers.push(grant);
customers.push(jamie);
console.log(customers);

class UI {
  constructor() {
    this.tableBody = document.getElementById('table-body');
  }

  renderCustomers() {
    this.tableBody.innerHTML = [];

    for (let i = 0; i < customers.length; i++) {
      const tr = document.createElement('tr');

      let firstName = document.createElement('td');
      let lastName = document.createElement('td');
      let age = document.createElement('td');
      let address = document.createElement('td');
      let phoneNumber = document.createElement('td');
      let dob = document.createElement('td');
      let membershipType = document.createElement('td');

      firstName.innerHTML = customers[i].firstName;
      lastName.innerHTML = customers[i].lastName;
      age.innerHTML = customers[i].age;
      address.innerHTML = customers[i].address;
      phoneNumber.innerHTML = customers[i].phoneNumber;
      dob.innerHTML = customers[i].dob;
      membershipType.innerHTML = customers[i].membershipType;

      tr.appendChild(firstName);
      tr.appendChild(lastName);
      tr.appendChild(age);
      tr.appendChild(address);
      tr.appendChild(phoneNumber);
      tr.appendChild(dob);
      tr.appendChild(membershipType);

      this.tableBody.appendChild(tr);
    }
  }
}

const ui = new UI();
ui.renderCustomers();
