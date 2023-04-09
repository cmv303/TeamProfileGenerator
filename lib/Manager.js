const Employee = require('./Employee');

class Manager extends Employee {
  constructor(managerName, managerId, managerEmail, managerOfficeNumber) {
    super(managerName, managerId, managerEmail);
    this.managerOfficeNumber = managerOfficeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;