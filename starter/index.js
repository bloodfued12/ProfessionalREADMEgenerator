const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");

// array of questions for user
const questionsArray = [
  {
    type: "input",
    name: "title",
    message: "What's the new project's title?"
  },
  {
    type: "input",
    name: "description",
    message: "What is the project description?"
  },
  {
    type: "input",
    name: "contents",
    message: "What are the contents of your README.md file?"
  },
  {
    type: "input",
    name: "installation",
    message: "How will a user be able to install the project locally?" 
  },
  {
    type: "input",
    name: "usage",
    message: "How will users be able to use your project?"
  },
  {
    type: "list",
    name: "license",
    message: "What license does the project hold?",
    choices: ['Academic Free License v3.0	AFL-3.0',
        'Apache license 2.0	Apache-2.0',
        'Artistic license 2.0	Artistic-2.0',
        'Boost Software License 1.0	BSL-1.0',
        'BSD 2-clause "Simplified" license	BSD-2-Clause',
        'BSD 3-clause "New" or "Revised" license	BSD-3-Clause',
        'BSD 3-clause Clear license	BSD-3-Clause-Clear',
        'BSD 4-clause "Original" or "Old" license	BSD-4-Clause',
        'BSD Zero-Clause license	0BSD',
        'Creative Commons license family	CC',
        'Creative Commons Zero v1.0 Universal	CC0-1.0',
        'Creative Commons Attribution 4.0	CC-BY-4.0',
        'Creative Commons Attribution ShareAlike 4.0	CC-BY-SA-4.0',
        'Do What The F*ck You Want To Public License	WTFPL',
        'Educational Community License v2.0	ECL-2.0',
        'Eclipse Public License 1.0	EPL-1.0',
        'Eclipse Public License 2.0	EPL-2.0',
        'European Union Public License 1.1	EUPL-1.1',
        'GNU Affero General Public License v3.0	AGPL-3.0',
        'GNU General Public License family	GPL',
        'GNU General Public License v2.0	GPL-2.0',
        'GNU General Public License v3.0	GPL-3.0',
        'GNU Lesser General Public License family	LGPL',
        'GNU Lesser General Public License v2.1	LGPL-2.1',
        'GNU Lesser General Public License v3.0	LGPL-3.0',
        'ISC	ISC',
        'LaTeX Project Public License v1.3c	LPPL-1.3c',
        'Microsoft Public License	MS-PL',
        'MIT	MIT',
        'Mozilla Public License 2.0	MPL-2.0',
        'Open Software License 3.0	OSL-3.0',
        'PostgreSQL License	PostgreSQL',
        'SIL Open Font License 1.1	OFL-1.1',
        'University of Illinois/NCSA Open Source License	NCSA',
        'The Unlicense	Unlicense',
        'zLib License	Zlib']
  },
  {
    type: "input",
    name: "contributing",
    message: "How will users be able to contribute to the project?" 
  },
  {
    type: "input",
    name: "tests",
    message: "How could users test your project so that they can better understand it?" 
  },
  {
    type: "input",
    name: "newQuestions",
    message: "What is your email address that can be contacted for questions about your project?"
  }
];
// function to initialize program
function init() {
inquirer.prompt(questionsArray).then((inquirerResponses) => {
    console.log("Responses", generateMarkdown({ ...inquirerResponses }));
    // for (let key of inquirerResponses.keys(inquirerResponses)){
    //   return `key.${message}`;
    // }
    
  });
}
// console.log(title);
// function call to initialize program
// const fileName = inquirerResponses.data.title;
// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(`${title}.md`, data, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });
// };
// init();