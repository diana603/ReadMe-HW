function generateMarkdown(data) {
  return `
  [![Generic badge](https://img.shields.io/badge/Maintained-yes-blue)](https://shields.io/)
  
  ## Description
  # ${data.userName}
  # ${data.title}
  # ${data.Installation}
  # ${data.usage}
  # ${data.license}
  # ${data.contributing}
  # ${data.tests}
  # ${data.questions}
  `;
}

module.exports = generateMarkdown;
