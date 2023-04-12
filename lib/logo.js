const inquirer = require('inquirer');

const { writeFile } = require('fs/promises');
const { generator } = require('./generator');

class Logo {
    constructor(text,textColor,shape,shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    

    run() {
        return inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter characters',
        maxLength: 3,
        default: 'Must be no more than 3 characters long'
        
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
    }
])

// .then(() => {
// return this.questions();
// })
.then(() => {

return writeFile('logo.svg', generator(text,textColor,shapeColor,shape))
    
    })
}

   

// questions() {
//     return inquirer.prompt([
   
// ]);
    
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
// }


module.exports = Logo;