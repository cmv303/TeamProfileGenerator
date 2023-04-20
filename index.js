//dependencies and modules
const {
  addOptions,
  promptManager,
  promptEmployee,
  promptEngineer,
  promptIntern,
  teamMembersArray,
} = require("./team");
const fs = require("fs");
const path = require("path");
const generateHTML = require("./src/generateHTML");

async function createTeam() {
  await promptManager();
  // await promptEmployee();
  // await addOptions();
  // await promptEngineer();
  // await promptIntern();

  const html = generateHTML(teamMembersArray);
  console.log("html", html);
  writeToFile("./dis/index.html", html);
  process.exit(0); // This will terminate the program.
}

function writeToFile(fileName, data) {
  console.log("Am i hitting file");
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

createTeam();
