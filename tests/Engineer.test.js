const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("engineerName", () => {
        it("returns the Engineer's name", () => {
            const name = "Camila";
            const newEngineerName = new Engineer(name);
            expect(newEngineerName.getName()).toEqual(name);
            
        })
    });
    describe("engineerId", () => {
        it("returns the Engineer's Id", () => {
            const id = "01";
            const newEngineerId = new Engineer(id);
            expect(newEngineerId.getId()).toEqual(id);
        })
    });
     describe("engineerGitHub", () => {
        it("returns Engineer's usename on GitHub", () => {
            const gitHub = "cmv303"
            const newEngineerGitHub = new Engineer(role);
            expect(newEngineerGitHub.getGitHub()).toEqual(gitHub);
        })
    });
});