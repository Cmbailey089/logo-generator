const shapes = require('./shapes');


function generator(text,textColor,shapeColor,shape) {
return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${renderShape(shape)}${shapeColor}"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
`
}




module.exports = { generator };
