const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("employeeName", () => {
        it("returns the Employee's name", () => {
            const name = "John";
            const newEmployeeName = new Employee(name);
            expect(newEmployeeName.getName()).toEqual(name);
            
        })
    });
    describe("employeeRole", () => {
        it("returns Employee's role", () => {
            const role = "Manager"
            const newEmployeeRole = new Employee(role);
            expect(newEmployeeRole.getRole()).toEqual(role);
        })
    });
    describe("employeeId", () => {
        it("returns the Employee's Id", () => {
            const id = "02";
            const newEmployeeId = new Employee(id);
            expect(newEmployeeId.getId()).toEqual(id);
        })
    })
})