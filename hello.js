// function Robot(name,model,year){
//     this.name = name;
//     this.model = model;
//     this.year = year;
// }
// const robot1= new Robot("Robot1","xx","2001");
// const robot2= new Robot("Robot2","yy","2003");

// console.log(robot1.name);
// console.log(robot2.year);
// console.log(robot1.model);

// Robot.prototype.greet=function(){
//     console.log(`Hello I am ${this.name}, model${this.model}`);
// };

// Robot.prototype.chargeBattery = function(amount) {
//   this.battery = Math.min(100, this.battery + amount);
//   console.log(`${this.name} charged. Battery: ${this.battery}%`);
// };

// Robot.prototype.work = function(hours) {
//   const drain = hours * 10;
//   this.battery = Math.max(0, this.battery - drain);
//   console.log(`${this.name} worked ${hours} hours. Battery: ${this.battery}%`);
// };

// robot1.greet(); 

// robot1.work(3);

// robot2.chargeBattery(20);

// function Student(name,course,marks){
//   this.name = Parika;
//   this.course=AIFT;
//   this.marks=99;
// };
// Student.prototype.greet=function(){
//   console.log(`Hi I am ${this.name}`);

// };

// class Robot {
//   constructor(name) {
//     this.name = name;
//   }
  
//   greet() {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }
