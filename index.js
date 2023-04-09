//dependencies
const inquirer = require('inquirer')

//Classes

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


//Array of team members
const teamMembers = [];

//Inquirer prompt for Employee
const employeeQuestions = [{
  type: 'input',
  name: 'employeeId',
  message: "What's the ID of your Employee?",
  default: '02'
}];
inquirer.prompt(employeeQuestions).then(employeeAnswers => {
    console.log(`Hi employee with ID ${employeeAnswers['employeeId']}!`);
    const employee = new Employee(employeeAnswers['employeeId']);
    teamMembers.push(employee);
  });


//Inquirer prompt for Engineer
const enginnerQuestions = [{
    type: 'input',
    name: 'engineerName',
    message: "What's the name of your Engineer?",
    default: "Temy"
  },
  {
    type: 'input',
    name: 'engineerId',
    message: "What's the employee ID of your Engineer?",
    default: "01"
  },
  {
    type: 'input',
    name: 'engineerGitHub',
    message: "What's the GitHub Username of your Engineer?",
    default: "temy3732"
  },
]
  inquirer.prompt(enginnerQuestions).then(engineerAnswers => {
    console.log(`Hi engineer, ${engineerAnswers['engineerName']}!`);
    const engineer = new Engineer(engineerAnswers['engineerName'], engineerAnswers['engineerId'], engineerAnswers['engineerGitHub']);
    teamMembers.push(engineer);
  });


  //Inquirer prompts for Intern
  const internQuestions = [{
    type: 'input',
    name: 'internName',
    message: "What's the name of your Intern?",
    default: "Zoe"
  },
  {
    type: 'input',
    name: 'internId',
    message: "What's the employee ID of your Intern?",
    default: "16"
  },
  {
    type: 'input',
    name: 'internEmail',
    message: "What's the email address of your Intern?",
    default: "thisiszoe@gmail.com"
  },
  {
    type: 'input',
    name: 'internSchool',
    message: "What's your Intern's school?",
    default: "UNC"
  },
]
  inquirer.prompt(internQuestions).then(internAnswers => {
    console.log(`Hi intern, ${internAnswers['internName']}!`);
    const intern = new Intern(internAnswers['internName'], internAnswers['internId'], internAnswers['internEmail'], internAnswers['internSchool']);
    teamMembers.push(intern);
  });

  //Inquirer prompts for Manager
  const managerQuestions = [{
    type: 'input',
    name: 'managerName',
    message: "What's the name of your Manager?",
    default: "Sara"
  },
  {
    type: 'input',
    name: 'managerId',
    message: "What is your manager's employee ID?",
    default: "5"
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is your manager's email?",
    default: "sarahasbeenhere@aol.com"
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: "What is your manager's office number?",
    default: "555-555-5555"
  }
];
  

  inquirer.prompt(managerQuestions)
  .then(managerAnswers => {
    console.log(`Hi manager, ${managerAnswers['managerName']}!`);
    const manager = new Manager(managerAnswers['managerName'], managerAnswers['managerId'], managerAnswers['managerEmail'], managerAnswers['managerOfficeNumber']);
    teamMembers.push(manager);
  });