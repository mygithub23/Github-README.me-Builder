const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const { promisify } = require('util');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');



const questions = require('./questions/questions')

const generateREADME = require('./templates/markup') 
const writeFileAsync = promisify(writeFile);


/* FUNCTIONS ==================================================================================================== */



clear();


console.log(
  chalk.yellow(
    figlet.textSync('Welcome to Github', { horizontalLayout: 'full' })
  )
);
console.log(
  chalk.yellow(
    figlet.textSync('README Generator', { horizontalLayout: 'full' })
  )
);
console.log(
  chalk.yellow(
    figlet.textSync('By Ali Alaoui', { horizontalLayout: 'full' })
  )
);
// Inital welcome message
console.log('                           ')
console.log('                           ')
console.log('                           ')
console.log (chalk.bold.blue('================================================================================'));

console.log(chalk.whiteBright.bold("All the questions are required."));
console.log(chalk.whiteBright.bold("To take the default answer just hit " + chalk.cyan.bold("<enter>")))

console.log (chalk.bold.blue('================================================================================'));
console.log('                           ')
console.log('                           ')
console.log('                           ')

chalk.dim('Press <enter> to launch your preferred editor.');

// check if the file exist
// if (files.directoryExists('.git')) {
//     console.log(chalk.red('Already a Git repository!'));
//     process.exit();
//   }

// const run = async () => {
//   const credentials = await inquirer.askGithubCredentials();
//   console.log(credentials);
// };



//Create a function to prompt user questions
function promptUser() {
	return prompt(questions);
}

// Use async... await
async function init() {
  //try ... catch block
	try {
    const answers = await promptUser();
    
    const output = (JSON.stringify(answers, null, '\t'));

    console.log('                           ')
    console.log('                           ')
    console.log('                           ')
    console.log(chalk.underline.yellowBright("*********************** Please review your answers below *******************************"))
    console.log('                           ')
    console.log('                           ')
    console.log('                           ')

    console.log(chalk.white(output))
    console.log('                           ')
    console.log('                           ')
    console.log('                           ')

	const readme = generateREADME(answers);

	await writeFileAsync('README.md', readme);
	

		console.log(chalk.green('Successfully wrote to README.md'));
	} catch (err) {
		console.log(err);
	}
}

init();
