import inquirer from "inquirer";
import fs from "fs/promises";

// import { title } from "process";

let licenseText = "";
let licenseimg = "";

let {
  title,
  description,
  image,
  installation,
  usage,
  license,
  contributing,
  tests,
  githubrepo,
  email
} = await inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "Enter the title of your README file:",
  },

  {
    type: "input",
    name: "description",
    message: "Enter a description for your project:",
  },
  {
    type: "input",
    name: "image",
    message: "Do you have a screenshot, enter name of file:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter user installation instructions for your app:",
  },

  {
    type: "input",
    name: "usage",
    message: "Enter user instructions for your app:",
  },

  {
    type: "list",
    name: "license",
    message: "Choose your license from the list and then press enter:",
    choices: [
      "GNU GPL v3",
      "Apache 2.0 License",
      "The MIT License",
      "Mozilla Public License 2.0",
    ],
  },

  {
    type: "input",
    name: "contributing",
    message: "Enter the contribution guidlines:",
  },

  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
  },

  {
    type: "input",
    name: "githubrepo",
    message: "Enter the developer's GitRepository address:",
  },

  {
    type: "input",
    name: "email",
    message: "Enter contact details:",
  },
]);
// "GNU GPL v3 License"
switch (license) {
  case (license = "GNU GPL v3"):
    licenseText = license;
    licenseimg =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    break;

  case (license = "Apache 2.0 License"):
    licenseText = license;
    licenseimg =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    break;

  case (license = "The MIT License"):
    licenseText = license;
    licenseimg =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;

  case (license = "Mozilla Public License 2.0"):
    licenseText = license;
    licenseimg =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    break;
}

let readmeText = `


# ${title}
${licenseimg}
## Description
#
${description}
<br>
<br>

![](./${image})

## Table of Contents
#

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
<br>
<br>
## Installation
#
${installation}
<br>
<br>

## Usage
#
${usage}
<br>
<br>

## License
#
### This roject is covered under the
* ${licenseText}
<br>
<br>

## Contributing
#
${contributing}
<br>
<br>

## Tests
#
${tests}
<br>
<br>

## Questions
#

### GitHub repository for the developer:
- ${githubrepo}
<br>

### Contact details:
- ${email}
<br>
<br>
<br>
<br>

##### <center>QByter 2023</center>
`;

fs.writeFile("README.md", readmeText);