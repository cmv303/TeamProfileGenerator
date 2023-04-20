class Employee {
  constructor(employeeName, employeeId) {
    this.employeeName = employeeName;
    this.employeeId = employeeId;
  }
  getemployeeName() {
    return this.employeeName;
  }
  getemployeeId() {
    return this.employeeId;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
