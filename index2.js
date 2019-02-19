"use strict"; {
    let direction = 'N';
    let yposition = 0;
    let xposition = 0;
    let ydirection = 'N';
    let xdirection = 'E';
  
    const moveForward = function(distance) {
      if (direction === 'N') {
        yposition += distance;
      } else if (direction === 'S') {
        yposition -= distance;
      } else if (direction === 'E') {
        xposition += distance;
      } else if (direction === 'W') {
        xposition -= distance;
      } 
    }
    const moveBackward = function(distance) {
      if (direction === 'N') {
        yposition -= distance;
      } else if (direction === 'S') {
        yposition += distance;
      } else if (direction === 'E') {
        xposition -= distance;
      } else if (direction === 'W') {
        xposition += distance;
      } 
    }
    const turnRight = function() {
      if (direction === 'N') {
        direction = 'E'
      } else if (direction === 'E') {
        direction = 'S';
      } else if (direction === 'S') {
        direction = 'W';
      } else if (direction === 'W') {
        direction = 'N';
      }
    } 
    const turnLeft = function() {
      if (direction === 'N') {
        direction = 'W'
      } else if (direction === 'W') {
        direction = 'S';
      } else if (direction === 'S') {
        direction = 'E';
      } else if (direction === 'E') {
        direction = 'N';
      }
    } 
    const printLocation = function() {
      console.log(`${yposition} ${ydirection} , ${xposition} ${xdirection}`)
    }
    moveForward(5);
    turnRight();
    moveForward(2);
    printLocation();
    turnLeft();
    turnLeft();
    moveForward(7);
    turnRight();
    moveBackward(3);
    printLocation();
  }