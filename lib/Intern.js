const Employee = require("./Employee");

class Intern extends Employee {
  constructor(internName, internId, internEmail, internSchool) {
    super(internName, internId);
    this.internEmail = internEmail;
    this.internSchool = internSchool;
  }

  getEmail() {
    return this.internEmail;
  }
  getSchool() {
    return this.internSchool;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
