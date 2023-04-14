class Shape {
    constructor() {
        this.color = ''
    }
    userColor(input) {
        this.color = input
    }
    
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/> `
    }
}

class Triangle extends Shape { 
    render() {
        return `<polygon points="150, 10 250, 151 50, 150" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
    }
 }

 module.exports = { Circle, Triangle, Square}