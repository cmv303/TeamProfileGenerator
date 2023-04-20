const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("managerName", () => {
        it("returns the Manager's name", () => {
            const name = "Sara";
            const newManagerName = new Manager(name);
            expect(newManagerName.getName()).toEqual(name);
            
        })
    });
    describe("managerId", () => {
        it("returns the Manager's Id", () => {
            const id = "05";
            const newManagerId = new Manager(id);
            expect(newManagerId.getId()).toEqual(id);
        })
    });
     describe("managerEmail", () => {
        it("returns Manager's email address", () => {
            const email = "sarahasbeenhere@aol.com"
            const newManagerEmail = new Manager(email);
            expect(newManagerEmail.getEmail()).toEqual(email);
        })
    });
    describe("ManagerOfficeNumber", () => {
        it("returns Manager's office number", () => {
            const officeNum= "thisiszoe@gmail.com"
            const managerNumber = new Manager(officeNum);
            expect(managerNumber.getOfficeNumber()).toEqual(officeNum);
        })
    });
});