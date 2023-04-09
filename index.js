//dependencies and modules
const { promptManager, promptEmployee, promptEngineer, promptIntern, teamMembersArray } = require('./team');

async function createTeam() {
  await promptManager();
  await promptEmployee();
  await promptEngineer();
  await promptIntern();
  
  console.log("teamMembers", teamMembersArray);
}

createTeam();