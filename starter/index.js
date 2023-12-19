const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");

// array of questions for user
const questions = [
  {
    title: "What's the new project's title?"
  },
  {
    description: "What is the project description?"
  },
  {
   contents: "What are the contents of your README.md file?" 
  },
  {
   installation: "How will a user be able to install the project locally?" 
  },
  {
   usage: "How will users be able to use your project?" 
  },
  {
    license: "What license does the project hold?"
  },
  {
   contributing: "How will users be able to contribute to the project?" 
  },
  {
  tests:
      "How could users test your project so that they can better understand it?"  
  },
  {
    questions:
     "What is your email address that can be contacted for questions about your project>"
  }
];
for (const question of questions){
    // const {...questions} = questions;
    const {questions} = questions;
}
// const {questions: newQuestions} = questions;
console.log(title);
// console.log(description);
// console.log(contents);
// console.log(installation);
// console.log(usage);
// console.log(license);
// console.log(contributing);
// console.log(tests);
// console.log(newQuestions);
// inquirer
// .prompt([
//     console.log(NewQuestions)
// ])
// the object above needs to be deconstructed for use in the below function
// for (let question of questions) {
//     prompt(`${questions}`);
// };
// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
