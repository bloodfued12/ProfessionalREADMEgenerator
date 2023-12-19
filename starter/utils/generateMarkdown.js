// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}<br>
  ## Description<br>
  ${data.description}<br>
  ## Contents<br>
  ${data.contents}<br>
  ## Installation<br>
  ${data.installation}<br>
  ## Usage<br>
  ${data.usage}<br>
  ## License<br>
  ${data.license}<br>
  ## Contributing<br>
  ${data.contributing}<br>
  ## Testing<br>
  ${data.tests}<br>
  ## Questions<br>
  For any questions about the project,
  please contact ${data.newQuestions}
`;
}

module.exports = generateMarkdown;
