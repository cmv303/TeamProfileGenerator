//dependencies
const inquirer = require("inquirer");

//Classes

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Array of team members
const teamMembersArray = [];

//Inquirer prompts for Manager
async function promptManager() {
  const managerQuestions = [
    {
      type: "input",
      name: "managerName",
      message: "What's the name of your Manager?",
      default: "Sara",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is your manager's employee ID?",
      default: "5",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is your manager's email?",
      default: "sarahasbeenhere@aol.com",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is your manager's office number?",
      default: "555-555-5555",
    },
  ];
  const managerAnswers = await inquirer.prompt(managerQuestions);
  console.log(`Hi manager ${managerAnswers["managerName"]}!`);
  const manager = new Manager(
    managerAnswers["managerName"],
    managerAnswers["managerId"],
    managerAnswers["managerEmail"],
    managerAnswers["managerOfficeNumber"]
  );
  teamMembersArray.push(manager);
}

//Inquirer prompts for How to Proceed

async function addOptions() {
    const choiceData = await inquirer
    .prompt([
      {
        type: "list",
        message: "What role are you looking to add to your team?",
        name: "options",
        choices: ["Add Engineer", "Add Intern", "I'm done building my team"],
      },
    ]);
      switch (choiceData.options) {
        case "Add Engineer":
          promptEngineer();
          console.log("promptEngineer", promptEngineer())
          break;
        case "Add Intern":
          promptIntern();
          console.log("promptEngineer", promptIntern())
          break;
       case "Finish building team":
          //finish building team
          const finishBuilding = await inquirer.prompt (choiceData.options);
          console.log("team roster is ready!");
          teamMembersArray.push(finishBuilding);
          
          break;
      }
    };


//Inquirer prompt for Employee
async function promptEmployee() {
  const employeeQuestions = [
    {
      type: "input",
      name: "employeeId",
      message: "What's the ID of your Employee?",
      default: "02",
    },
  ];
  const employeeAnswers = await inquirer.prompt(employeeQuestions);
  console.log(`Hi employee with ID ${employeeAnswers["employeeId"]}!`);
  const employee = new Employee(employeeAnswers["employeeId"]);
  teamMembersArray.push(employee);
}

//Inquirer prompt for Engineer
async function promptEngineer() {
  const engineerQuestions = [
    {
      type: "input",
      name: "engineerName",
      message: "What's the name of your Engineer?",
      default: "Camila",
    },
    {
      type: "input",
      name: "engineerId",
      message: "What's the employee ID of your Engineer?",
      default: "01",
    },
    {
      type: "input",
      name: "engineerGitHub",
      message: "What's the GitHub Username of your Engineer?",
      default: "cmv303",
    },
  ];
  const engineerAnswers = await inquirer.prompt(engineerQuestions);
  console.log(`Hi engineer ${engineerAnswers["engineerName"]}!`);
  const engineer = new Engineer(
    engineerAnswers["engineerName"],
    engineerAnswers["engineerId"],
    engineerAnswers["engineerGitHub"]
  );
  teamMembersArray.push(engineer);
  addOptions();
}

//Inquirer prompts for Intern
async function promptIntern() {
  const internQuestions = [
    {
      type: "input",
      name: "internName",
      message: "What's the name of your Intern?",
      default: "Zoe",
    },
    {
      type: "input",
      name: "internId",
      message: "What's the employee ID of your Intern?",
      default: "16",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What's the email address of your Intern?",
      default: "thisiszoe@gmail.com",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What's your Intern's school?",
      default: "UNC",
    },
  ];
  const internAnswers = await inquirer.prompt(internQuestions);
  console.log(`Hi intern ${internAnswers["internName"]}!`);
  const intern = new Intern(
    internAnswers["internName"],
    internAnswers["internId"],
    internAnswers["internEmail"],
    internAnswers["internSchool"]
  );
  teamMembersArray.push(intern);
  addOptions();
}

module.exports = {
  addOptions,
  promptEmployee,
  promptEngineer,
  promptIntern,
  promptManager,
  teamMembersArray,
};
