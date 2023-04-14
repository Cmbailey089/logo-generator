const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { generator } = require('./generator');
const RenderShape = require('./generator');
const { Circle, Triangle, Square } = require('./shapes');
const RenderSVG = require('./generator');

class Logo {



    run() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter characters',
                maxLength: 3,
                default: 'Must be no more than 3 chars long'

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
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter color for selected shape',
            }
        ])
            .then(({ text, textColor, shape, shapeColor }) => {
                let newShape;
                switch (shape) {
                    case "circle":
                        newShape = new Circle()
                        break;
                    case "triangle":
                        newShape = new Triangle()
                        break;
                    default:
                        newShape = new Square()
                }

                newShape.userColor(shapeColor)

                const svg = new RenderSVG()
                svg.setTextAndColor(text, textColor)
                svg.setChosenShape(newShape)

                writeFile('logo.svg', svg.render())
            }).then(() => {
                console.log('created svg');

            })
    }
}
// function renderShape(shape,shapeColor) {
//     // let sleShape = shape;
//     let selection = '';
//     if (shape === 'circle') {
//         selection = `circle cx="150" cy="100" r="80" fill="${shapeColor}"/> `
//     } else if (shape === 'sqaure') {
//         selection = `rect x="10" y="10" width="30" height="30" fill="${shapeColor}"/>`
//     } else if (shape === 'triangle') {
//         selection = `polygon points="150, 10 250, 151 50, 150" fill="${shapeColor}"/>`
//     } else {
//           console.log('err');
//     }  
//     return selection;
// }


module.exports = Logo;