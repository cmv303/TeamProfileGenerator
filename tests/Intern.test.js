const Intern = require("../lib/Intern");

describe("Intern", () => {
     describe("internEmail", () => {
        it("returns Intern's email address", () => {
            const email = "thisiszoe@gmail.com"
            const newInternEmail = new Intern("Zoe", "UNC", email, "16");
            expect(newInternEmail.getEmail()).toEqual(email);
        })
    });
    describe("internSchool", () => {
        it("returns name of Intern's school", () => {
            const school= "UNC"
            const newInternSchool = new Intern("Zoe", "thisiszoe@gmail.com", "16", school);
            expect(newInternSchool.getSchool()).toEqual(school);
        })
    });
    describe("internRole", () => {
        it("returns Intern's role", () => {
            const role = "Intern"
            const newInternRole = new Intern("Zoe", "thisiszoe@gmail.com", "UNC", role);
            expect(newInternRole.getRole()).toEqual(role);
        })
    });
});