const inquirer = require('inquirer');
const fs = require('fs');
const generator = require('./assets/generator');


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter characters',
        default: 'Must be no more than 3 characters long',
    },

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
    }];


function drawLogo(fileName,data) {
    inquirer.prompt(questions)
    fs.writeFile(fileName,data, function(err) {
        console.log("done")
        if(err) {
            return console.log(err)
        } else {
            console.log("finished")
        }
    });
};

function create() {
    inquirer.prompt(questions)
    .then(function(data) {
        drawLogo('logo.svg', generator(data));
    })
}
create()