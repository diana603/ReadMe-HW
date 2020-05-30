function generateMarkdown(data) {
  return `
  [![Generic badge](https://img.shields.io/badge/Maintained-yes-blue)](https://shields.io/)
  
  # User ID
  ## ${data.userName}
  # Name of Project
  ## ${data.title}
  # Description
  ## ${data.Description}
  # Installation
  ## ${data.Installation}
  # Usage
  ## ${data.usage}
  # License
  ## ${data.license}
  # Contributors
  ## ${data.contributing}
  # Tests
  ## ${data.tests}
  # Contact
  ## ${data.questions}
  `;
}

module.exports = generateMarkdown;
