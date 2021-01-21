
function generateREADME(answers) {
  return `
<!-- PROJECT LOGO -->
<br />
<p align="center">
  https://github.com/${answers.githubUsername}/${answers.repoName}
  <br />
   

  <h3 align="center">${answers.projectTitle}</h3>

  <p align="center">
    <a href="https://github.com/${answers.githubUsername}/${answers.repoName}"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/${answers.githubUsername}/${answers.repoName}">View Demo</a>
    ·
    <a href="https://github.com/${answers.githubUsername}/${answers.repoName}/issues">Report Bug</a>
    ·
    <a href="https://github.com/${answers.githubUsername}/${answers.repoName}/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#Screenshot">Screenshots</a>
      <ul>
        <li><a href="#Demo">Project Demo</a></li>
      </ul>
    </li>
    <li>
      <a href="#Short-Description">Project Objective</a>
      <ul>
        <li><a href="#Project-Description">Project Description</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#Technologies">Technologies</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#How-to-test">How to Test</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

##Title

${answers.projectTitle}

## Screenshots
${answers.screenshots}

### ✨Demo

Project Link: [https://github.com/${answers.projectLink}/${answers.repoName}](https://github.com/${answers.githubUsername}/${answers.repoName})
https://github.com/${answers.githubUsername}/${answers.repoName}<br>


<!-- ABOUT THE PROJECT -->

## Project Objective
  ${answers.objective}

## Preject Description
${answers.projectDesc}

### Prerequisites
${answers.prerequisites}

## Technologies 
\`\`\`
${ answers.technologies}
\`\`\`

## Installation
${answers.installation}

## Usage 
\`\`\`
${answers.usage}
\`\`\`

## How to test
\`\`\`
${answers.test}
\`\`\`

<!-- LICENSE -->
## License
This project is [${answers.license}](https://choosealicense.com/licenses/${answers.license}/) licensed.<br />

  Copyright © 2021 [${answers.authorName}}](https://github.com/${answers.githubUsername}})
  


<!-- CONTACT -->
## Contact
Contact the author with any questions!<br>
* Twitter:      [${answers.twitterHandle}](https://twitter.com/${answers.twitterHandle})
* Github link:  @[${answers.githubUsername}](https://github.com/${answers.githubUsername})<br>
* Email:        ${answers.email}
`;
}
module.exports = generateREADME;