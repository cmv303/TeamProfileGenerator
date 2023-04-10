//dependencies and modules
const { promptManager, promptEmployee, promptEngineer, promptIntern, teamMembersArray } = require('./team');
const fs = require("fs");
const path = require("path");
const generateHTML = require("./dis");

async function createTeam() {
  await promptManager();
  await promptEmployee();
  await promptEngineer();
  await promptIntern();
  
  console.log("teamMembersArray", teamMembersArray);
  
  writeToFile ("index.html", generateHTML({...createTeam}));
}


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
};
createTeam();