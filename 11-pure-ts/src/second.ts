console.log("ts");

interface TakePhoto {
  cameraMode : string
  filter : string
  burst : number
}

interface Story {
  createStory() : void
}

class Instagram implements  TakePhoto {
  
  constructor (
    public cameraMode : string,
    public filter : string,
    public burst : number,
    // we can add more parameters if we want
    public shot : boolean
  ) {
  }
}



class Youtube implements  TakePhoto, Story {
  
  constructor (
    public cameraMode : string,
    public filter : string,
    public burst : number,
    // we can add more parameters if we want
    public shot : boolean
  ) {
  }

  createStory(): void {
      console.log("Youtube Story");
  }
}
