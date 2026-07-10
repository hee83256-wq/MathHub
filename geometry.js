const Geometry = {
  // Rectangle
  rectangleArea(length, width) {
    return length * width;
  },

  rectanglePerimeter(length, width) {
    return 2 * (length + width);
  },

  // Square
  squareArea(side) {
    return side * side;
  },

  squarePerimeter(side) {
    return 4 * side;
  },

  // Circle
  circleArea(radius) {
    return Math.PI * radius * radius;
  },

  circleCircumference(radius) {
    return 2 * Math.PI * radius;
  },

  // Triangle
  triangleArea(base, height) {
    return 0.5 * base * height;
  },

  trianglePerimeter(a, b, c) {
    return a + b + c;
  },

  // Cube
  cubeVolume(side) {
    return Math.pow(side, 3);
  },

  cubeSurfaceArea(side) {
    return 6 * Math.pow(side, 2);
  },

  // Sphere
  sphereVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
  },

  sphereSurfaceArea(radius) {
    return 4 * Math.PI * Math.pow(radius, 2);
  },

  // Cylinder
  cylinderVolume(radius, height) {
    return Math.PI * Math.pow(radius, 2) * height;
  },

  // Distance between two points
  distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  },

  // Pythagorean theorem
  hypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
  }
};

// Example usage
console.log("Circle Area:", Geometry.circleArea(5).toFixed(2));
console.log("Rectangle Area:", Geometry.rectangleArea(10, 4));
console.log("Triangle Area:", Geometry.triangleArea(8, 6));
console.log("Cube Volume:", Geometry.cubeVolume(3));
console.log("Sphere Volume:", Geometry.sphereVolume(5).toFixed(2));
console.log("Distance:", Geometry.distance(0, 0, 3, 4));
console.log("Hypotenuse:", Geometry.hypotenuse(3, 4));