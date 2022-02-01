// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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

  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

  ## Usage

  Provide instructions and examples for use. Include screenshots as needed.
  
  ## Contributing

  If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

  ## Tests

  Go the extra mile and write tests for your application. Then provide examples on how to run them.

  ## Credits and Questions

  List your collaborators, if any, with links to their GitHub profiles.

  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

  If you followed tutorials, include links to those here as well.

  ## License 

  The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)









  
`;
}

module.exports = generateMarkdown;