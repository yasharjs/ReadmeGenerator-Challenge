// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license){
    case "GNU AGPLv3":
        return 'https://img.shields.io/badge/License-GNU_AGPLv3-blue'
    case "GNU GPLv3":
      return 'https://img.shields.io/badge/License-GNU_GPLv3-blue'
    case "GNU LGPLv3":
      return 'https://img.shields.io/badge/License-GNU_LGPLv3-blue'
    case "Mozilla Public License 2.0":
      return 'https://img.shields.io/badge/License-Mozilla_Public_License_2.0-blue'
    case "Apache License 2.0":
      return 'https://img.shields.io/badge/License-Apache_License_2.0-blue'
    case "MIT License":
      return 'https://img.shields.io/badge/License-MIT_License-blue'
    case "Boost Software License 1.0":
      return 'https://img.shields.io/badge/License-Boost_Software_License_1.0-blue'
    case "The Unlicense":
      return 'https://img.shields.io/badge/License-The_Unlicense-blue'
    case "None":
      return 'https://img.shields.io/badge/License-None-blue'

    }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![img](${renderLicenseBadge(data.license)})

  ## Description

  ${data.description}

  ## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Credits and Questions](#Credits)
  - [License](#License)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.guidelines}

  ## Tests

  ${data.test}

  ## Credits and Questions

  Contact information is provided below in case you have any questions about the project:
  
  - Author : ${data.name}
  - GitHub : [${data.username}](https://github.com/${data.username})
  - Email : ${data.email}

  ## License 

  ![img](${renderLicenseBadge(data.license)})

`;
}

module.exports = generateMarkdown;