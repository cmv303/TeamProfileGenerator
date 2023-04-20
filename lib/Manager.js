const Employee = require("./Employee");

class Manager extends Employee {
  constructor(managerName, managerId, managerEmail, managerOfficeNumber) {
    super(managerName, managerId);
    this.managerEmail = managerEmail;
    this.managerOfficeNumber = managerOfficeNumber;
  }

  getEmail() {
    return this.managerEmail;
  }

  getOfficeNumber() {
    return this.managerOfficeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
