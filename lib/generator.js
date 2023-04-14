// const shapes = require('./shapes');


class RenderSVG {
  constructor () {
  this.text = '';
  this.shape =''
  }

  render(){
    // have this return the actual svg
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
  }

  // create a method that will set the text and te color
  setTextAndColor(text, color){
    if(text.length > 3){
      throw new Error('text cant be more than 3 chars')
    }
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }

  // create a method taht will set the shape once it has been chosen
  setChosenShape(shape){  
    this.shape = shape.render()
  }

}

module.exports = RenderSVG