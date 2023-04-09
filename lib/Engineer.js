const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(engineerName, engineerId, engineerGitHub) {
    super(engineerName, engineerId);
    this.engineerGitHub = engineerGitHub;
  }

  getSchool() {
    return this.engineerGitHub;
  }

  getRole() {
    return 'engineer';
  }
}

module.exports = Engineer;