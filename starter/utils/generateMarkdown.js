// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ## Table of Contents  
 1. [Description](#Description])
 2. [Installation](#Installation])
 3. [Usage](#Usage)
 4. [Contributing](#Contributing])
 5. [Testing](#Testing])
 6. [Questions](#Questions])
 7. [License](#License])  

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