//dependencies and modules
const { promptManager, promptEmployee, promptEngineer, promptIntern } = require('./team');

async function createTeam() {
  await promptManager();
  await promptEmployee();
  await promptEngineer();
  await promptIntern();
  
  console.log("teamMembers", teamMembers);
}

createTeam();