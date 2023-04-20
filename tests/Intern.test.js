const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("internName", () => {
        it("returns the Intern's name", () => {
            const name = "Zoe";
            const newInternName = new Intern(name);
            expect(newInternName.getName()).toEqual(name);
            
        })
    });
    describe("internId", () => {
        it("returns the Intern's Id", () => {
            const id = "16";
            const newInternId = new Intern(id);
            expect(newInternId.getId()).toEqual(id);
        })
    });
     describe("internEmail", () => {
        it("returns Intern's email address", () => {
            const email = "thisiszoe@gmail.com"
            const newInternEmail = new Intern(email);
            expect(newInternEmail.getGitHub()).toEqual(email);
        })
    });
    describe("internSchool", () => {
        it("returns name of Intern's school", () => {
            const school= "thisiszoe@gmail.com"
            const newInternSchool = new Intern(school);
            expect(newInternSchool.getGitHub()).toEqual(school);
        })
    });
});