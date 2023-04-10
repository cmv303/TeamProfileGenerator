const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(engineerName, engineerId, engineerGitHub) {
    super(engineerName, engineerId);
    this.engineerGitHub = engineerGitHub;
  }

  getGithub() {
    return this.engineerGitHub;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;