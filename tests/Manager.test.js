const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("managerName", () => {
    it("returns the Manager's name", () => {
      const name = "Sara";
      const newManagerName = new Manager(
        name,
        "sarahasbeenhere@aol.com",
        "555-555-5555",
        "Manager"
      );
      expect(newManagerName.getmanagerName()).toEqual(name);
    });
  });
  describe("managerEmail", () => {
    it("returns Manager's email address", () => {
      const email = "sarahasbeenhere@aol.com";
      const newManagerEmail = new Manager(
        "Sara",
        "555-555-5555",
        email,
        "Manager"
      );
      expect(newManagerEmail.getEmail()).toEqual(email);
    });
  });
  describe("ManagerOfficeNumber", () => {
    it("returns Manager's office number", () => {
      const officeNum = "555-555-5555";
      const managerNumber = new Manager(
        "Sara",
        "sarahasbeenhere@aol.com",
        "Manager",
        officeNum
      );
      expect(managerNumber.getOfficeNumber()).toEqual(officeNum);
    });
  });
  describe("managerRole", () => {
    it("returns Manager's role", () => {
      const role = "Manager";
      const newManagerRole = new Manager(
        "Sara",
        "sarahasbeenhere@aol.com",
        "555-555-5555",
        role
      );
      expect(newManagerRole.getRole()).toEqual(role);
    });
  });
});
