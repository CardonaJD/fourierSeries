let time = 0;
let wave = [];
let slider;

function setup(){
  createCanvas(600, 400);
  slider = createSlider(1, 10, 1);
}

function draw(){
  background(0);
  translate(200, 200);
  let x = 0;
  let y = 0;

  for (let i = 0; i < slider.value(); i++){
    let prevx = x;
    let prevy = y;

    let n = 2 * i + 1;
    let radius = 50 * (4 / (n * PI)) ;
    x += radius * cos(n * time);
    y += radius * sin(n * time);
    // wave.unshift(y);

    stroke(255, 100);
    noFill();
    ellipse(prevx,prevy, radius*2);

    fill(255);
    stroke(255);
    line(prevx,prevy, x , y);
    // ellipse(x , y , 8);


  }

  translate(200 , 0);
  line(x-200, y, 0, y );
  wave.unshift(y);
  beginShape();
  noFill();
  for (let i in wave) {
    vertex(i, wave[i]);
  }
  endShape()

  time += 0.05;

  if(wave.length > 250 ){
    wave.pop();
  }
}
