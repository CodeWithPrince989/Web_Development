class Circle {
   constructor(radius, color) {
       this.radius = radius;  
       this.color = color;
   }

   area() {
      const area = this.radius * this.radius * Math.PI;
       return area;
   }
   
   paint() {
			console.log(`Painting with color ${this.color}`);
   }

}

const circle = new Circle(2, "red")
const area = circle.area();
console.log(area)


// Date 
const now = new Date(); // Current date and time
console.log(now.toISOString()); // Outputs the date in ISO format

// Maps 
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));