// 1. Copy and paste your prototype in here and refactor into class syntax.
// Personal Refrence: Cannot multiple with the ${ } ${ this.legth } * ${ this.length };

console.log("# CuboidMaker2 classes.js # : convert prototypes to classes.")

class CuboidMaker2 {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  // Methods
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
} // CuboidMaker 


const cuboid2 = new CuboidMaker2({
  "length": 4,
  "width": 5,
  "height": 5,
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
  constructor(cubeAttributes) {
    super(cubeAttributes);
    this.length = cubeAttributes.length;
    this.width = cubeAttributes.width;
  }
  // Methods
  volumeCube() {
    return this.length * this.length * this.length;
  }
  surfaceAreaCube() {
    return this.length * this.width * 6;
  }
}

/*
Running out of time did it with L X W.

Volume:
L X L X L = 1728

Surface Area
L X W = 144 * 6(faces) = 864in²
*/
const cuboid3 = new CubeMaker({
  length: 12,
  width: 12,
  height: 12
});

console.log("# Stretch Task # : volume and surface area for cubes.");
console.log(cuboid3.volumeCube() + 'in³'); 
console.log(cuboid3.surfaceAreaCube() + 'in²'); // expecting 864in²