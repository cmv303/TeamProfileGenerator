//dependencies and modules
const { promptManager, promptEmployee, promptEngineer, promptIntern, teamMembersArray } = require('./team');
const fs = require("fs");
const path = require("path");
const generateHTML = require("./src/generateHTML");

async function createTeam() {
  await promptManager();
  await promptEmployee();
  await promptEngineer();
  await promptIntern();
  
  console.log("teamMembersArray", teamMembersArray);
  
  const html = generateHTML(teamMembersArray); 
  writeToFile ("index.html", html);
}


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
};
createTeam();