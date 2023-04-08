function renderShape(shape) {
    let sleShape = shape;
    let selection = ``
    if (sleShape === 'circle') {
        selection = `circle cx="150" cy="100" r="80" fill="${shapeColor}" `
    } else if (sleShape === 'sqaure') {
        selection = `rect x="10" y="10" width="30" height="30" fill="${shapeColor}"`
    } else if (sleShape === 'triangle') {
        selection = `polygon points="150, 10 250, 151 50, 150" fill="${shapeColor}"`
    } else {
        shape = ``
    }
    return selection;
};

function generator(data) {
`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${renderShape(data.shape)}/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>
`
}




module.exports = generator;
