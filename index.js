"use strict"; {
    let position = 0;
    let direction = true;
  
    const moveForward = function(distance) {
      if (direction) {
        position += distance;
      } else {
        position -= distance;
      }
    return position;
    } 
    const moveBackward = function(distance) {
      if (direction) {
        position -= distance;
      } else {
        position += distance;
      }
      return position;
    }
    const turnAround = function() {
      direction = false;
    }
    const printLocation = function() {
      console.log(position);
    }
    moveForward(5);
    moveBackward(3);
    printLocation();
    turnAround();
    moveForward(10);
    moveBackward(5);
    printLocation();
}