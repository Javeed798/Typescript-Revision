"use strict";
console.log("ts");
class Instagram {
    constructor(cameraMode, filter, burst, 
    // we can add more parameters if we want
    shot) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shot = shot;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, 
    // we can add more parameters if we want
    shot) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shot = shot;
    }
    createStory() {
        console.log("Youtube Story");
    }
}
