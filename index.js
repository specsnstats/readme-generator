// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Project Title:',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Project Description:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Installation Instructions:',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Usage Information:',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Contribution Guidelines:',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Test Instructions:',
            name: 'test'
        },
        {
            type: 'list',
            message: 'License Type:',
            name:'license',
            choices: [
                {name: 'Apache'},
                {name: 'Boost'},
                {name: 'Eclipse'},
                {name: 'GNU'},
                {name: 'MIT'},
                {name: 'WTFPL'},
            ]
        },
        {
            type: 'input',
            message: 'GitHub Username',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Email Address:',
            name: 'email'
        },
    ])

    .then(({title,description,installation,usage,contribution,test,license,github,email}) => {
        switch(license) {
            case "Apache":
                var licenseType =  `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
                break;

            case "Boost":
                var licenseType = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
                break;

            case 'Eclipse':
                var licenseType = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
                break;
            
            case "GNU":
                var licenseType = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
                break;

            case "MIT":
                var licenseType = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
                break;
            
            case 'WTFPL':
                var licenseType = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`

        }
        console.log(licenseType);
        const resultingReadme = 
        `# ${title}

## Table of Contents

- [Project Description](./newREADME#project-description)
- [Installation Guide](./newREADME#installation-guide)
- [Usage Information](./newREADME#usage-information)
- [Contribution Guidelines](./newREADME#contribution-guidelines)
- [Test Instructions](./newREADME#test-instructions)
- [Questions](./newREADME#questions)

## Project Description:
${description}

## Installation Guide:
${installation}

## Usage Information:
${usage}

## Contribution Guidelines:
${contribution}

## Test Instructions:
${test}

## License Type:
${licenseType}

## Questions:
${github}
${email}`

        fs.writeFile("newREADME.md", resultingReadme, (err) =>
        err? console.log(error): console.log("README Generated!"));
    });

