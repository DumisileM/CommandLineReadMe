// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ## Table of Contents  
 1. [Description](#description)
 2. [Installation](#installation)
 3. [Usage](#usage)
 4. [Contributing](#contributing)
 5. [Testing](#testing)
 6. [Questions](#questions)
 7. [License](#license)

 ## Description <br>
 ${data.description}

 ## Installation <br>
 ${data.installation}

 
 ## Usage <br>
 ${data.usage}
 

 ## Contributing <br>
 ${data.contributing}


 ## Testing <br>
 ${data.tests}


 ## Questions <br>
 ${data.github}
 ${data.email}


 ## License <br>
 ${data.license}





`;
}

module.exports = generateMarkdown;
