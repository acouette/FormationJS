class Shape {

    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    draw() {
        console.log('drawing a nice shape');
    }

}


class Rectangle extends Shape{

    constructor(color, width, length) {
        super(color);
        this.width = width;
        this.length = length;
    }

    draw() {
        console.log('drawing a nice rectangle');
    }

    getArea() {
        return this.width * this.height;
    }

    getCircumference() {
        return this.width * 2 + this.heigth * 2;
    }

}

class Square extends Rectangle{

    constructor(color, side) {
        super(color, side, side);
    }

    draw() {
        console.log('drawing a nice litte square');
    }

}