function generateMarkdown(data) {
  return `
  [![Generic badge](https://img.shields.io/badge/Maintained-yes-blue)](https://shields.io/)
  
  # ${data.title} 
  
  ## User ID
  ### ${data.userName}
  ## Description
  ### ${data.description}
  ## Installation
  ### ${data.Installation}
  ## Usage
  ### ${data.usage}
  ## License
  ### ${data.license}
  ## Contributors
  ### ${data.contributing}
  ## Tests
  ### ${data.tests}
  ## Contact
  ### ${data.questions}
  `;
}

module.exports = generateMarkdown;
