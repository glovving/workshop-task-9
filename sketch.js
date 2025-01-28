let webcam;
let shape_sys = [];
let scale = 18;
let canvas;

//adding audio file
let my_song;

let filter_added = false;
//random filer
let rand_effect;

function preload(){
  my_song = createAudio('myloveilove3.ogg');
}

function setup() {
  canvas = createCanvas(400, 400);
  pixelDensity(1);
  canvas.position((windowWidth - 400)/2, (windowHeight-400)/2);
  
 my_song.loop();

  webcam = createCapture(VIDEO);
  webcam.size(width/scale, height/scale);
  webcam.hide();
  
  
  
  for(let x = 0; x < 1000; x++){
    let rx = random(15, width-15);
    let ry = random(15, height -15);
    let rr = random(4, 15);
    let r_shape_num = floor(random(1, 4));
    shape_sys[x] = new Shape(rx, ry, rr, r_shape_num);
  }
}

function draw() {
  //background(220);
  
  

  webcam.loadPixels();
  
  
  if(rand_effect === 2){
    filter(POSTERIZE);
  }
  if(rand_effect === 3){
    filter(ERODE);
  }
  if(rand_effect === 4){
    filter(DILATE);
  }
  if(rand_effect === 5){
    filter(BLUR, 3);
  }
  
  //image(webcam, 0, 0, width, height);
  
  for(let x = 0; x < shape_sys.length; x++){
    shape_sys[x].move();
    shape_sys[x].show();
    shape_sys[x].checkEdges();

  }
  fill('blue');
  stroke('yellow')
  textSize(20);
  textAlign(CENTER, CENTER);
  text('click to see your reflection change', canvas.width/2, 50);
}

class Shape {
  constructor(x, y, r, r_num){
    this.x = x;
    this.y = y;
    this.r = r;

    //random numbers to determine shape type
    this.r_shape_num = r_num;

  }

  move(){
    this.x = this.x + random(-8, 8);
    this.y = this.y + random (-8, 8);

  }

  show(){
    let px= this.x / scale;
    let py = this.y / scale;
    let pixelColour = webcam.get(px, py);

    //inverting each pixel
    if(filter_added && rand_effect === 1){
      
      pixelColour[0] = 255 - pixelColour[0];
      pixelColour[1] = 255 - pixelColour[1];
      pixelColour[2] = 255 - pixelColour[2];}
    
    

    fill( pixelColour[0], pixelColour[1], pixelColour[2], 150);
    noStroke();
    
    //random shape
    if(this.r_shape_num === 1){
    ellipse(this.x, this.y, this.r);}
    if(this.r_shape_num ===2){
      //using r as width and height of rect
      rect(this.x, this.y, this.r, this.r);
    }
    if(this.r_shape_num ===3){
      triangle(this.x, this.y, this.x + this.r, this.y, this.x + (this.r/2), this.y - sqrt(3) * this.r/2);
    }
  }

  checkEdges(){
    if(this.x<15){
      this.x = 15;
    }
    else if(this.x> width - 15){
      this.x = width - 15;
    }
    if (this.y < 15){
      this.y = 15;
    }
    else if(this.y > height - 15){
      this.y = height - 15;
    }
  }
}

function mousePressed(){
  filter_added = true;
  rand_effect = floor(random(1, 6));
  
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

