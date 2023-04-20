const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("engineerGitHub", () => {
    it("returns Engineer's usename on GitHub", () => {
      const gitHub = "cmv303";
      const newEngineerGitHub = new Engineer("Sara", "01", gitHub);
      expect(newEngineerGitHub.getGithub()).toEqual(gitHub);
    });
  });
  describe("engineerRole", () => {
    it("returns Engineer's role", () => {
      const role = "Engineer";
      const newEngineerRole = new Engineer("Sara", role, "05");
      expect(newEngineerRole.getRole()).toEqual(role);
    });
  });
});
