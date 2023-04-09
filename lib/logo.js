const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const generator = require('./generator');

class Logo {
    constructor () {
        this.set = '';
        this.answers = [];
    }

    run() {
        return inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter characters',
        default: 'Must be no more than 3 characters long',
    },
])

.then(({ text }) =>
this.set = `${text}`)
    }

question() {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter color for text',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape',
        choices:['cirlce','triangle','square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter color for selected shape',
    }
]);
    
    }
// function drawLogo(fileName, data) {
//     let json =JSON.stringify
//     inquirer.prompt(questions)
//     fs.writeFile(fileName,data,json, function(err) {
//         console.log("done")
//         if(err) {
//             return console.log(err)
//         } else {
//             console.log("finished")
//         }
//     });
// };

// function create() {
//     inquirer.prompt(questions)
//     .then(function(data) {
//         drawLogo('logo.svg', generator(data));
//         console.log(data)
//     });
// };
}
create();

module.exports = Logo;