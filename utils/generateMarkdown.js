function generateMarkdown(data) {
  return `
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
