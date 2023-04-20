const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("employeeName", () => {
        it("returns the Employee's name", () => {
            const name = "John";
            const newEmployeeName = new Employee(name, "Employee", "02");
            expect(newEmployeeName.getemployeeName()).toEqual(name);
            
        })
    });
    describe("employeeRole", () => {
        it("returns Employee's role", () => {
            const role = "Employee"
            const newEmployeeRole = new Employee("John", role, "02");
            expect(newEmployeeRole.getRole()).toEqual(role);
        })
    });
    describe("employeeId", () => {
        it("returns the Employee's Id", () => {
            const id = "02";
            const newEmployeeId = new Employee("John", id, "Employee");
            expect(newEmployeeId.getemployeeId()).toEqual(id);
        })
    })
})