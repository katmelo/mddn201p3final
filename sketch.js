
// var x = 0;
// function preload() {
//   frame = loadImage('image/Frame.png');
//   dog1 = loadImage('image/Beagle.png');
//   dog2 = loadImage('image/Chihuahua.png');
//   dog3 = loadImage('image/Pug.png');
//   refresh1 = loadImage('image/Refresh1.png');
//   refresh2 = loadImage('image/Refresh2.png');
//   bow = loadImage('image/Bow.png');
//   ribbon = loadImage('image/Ribbon.png');
// }

// function setup() {
//   createCanvas(1024,768);
//   background(205,235,252);
  
// }

// function draw() {
  
//   push();
//   scale(0.4);
//   translate(200,0);
//   image(frame,0,0);
//   image(dog1,0,0);
//   image(bow,1500,0);
//   pop();
  
//   push();
//   scale(0.15);
//   image(refresh1,-500,0);
//   pop();
  
//   if (mouseButton == LEFT && mouseIsPressed)
//       if (mouseX > 0 && mouseX < 300 && mouseY < 180 && mouseY > 80) {
//       dog1 = dog2;
//       dot();
//       x = x + 1;
//       }
//     if (x > 1){
//       push();
//       scale(0.1);
//     image(refresh2,-220,440);
//     pop;
//     }
//     if (mouseX > 0 && mouseX < 300 && mouseY < 180 && mouseY > 80 && x > 5) {
//     dog2 = dog3; 
//     }  
// }
// function dot(){
//   ellipse(x,0,1,1);
// }
var word = 'Huahua';
var age1 = 'Four year-young';
var dislike = 'Dislike:';
var x = 0;

function preload() {
  frame = loadImage('image/Frame.png');
  dog1 = loadImage('image/chihuahua.png');
  bow = loadImage('image/bow.png');
  ribbon = loadImage('image/ribbon.png');
  
  ghost =loadImage('image/ghost.png');
  ghost1 = loadImage('image/ghost1.jpg');
  
  mail = loadImage('image/mail.png');
  mail1 = loadImage('image/mail1.jpg');
  
  cat = loadImage('image/cat.png');
  cat1 = loadImage('image/cat1.jpg');
  
  bone = loadImage('image/bone.png');
  bone1 = loadImage('image/bone1.jpg');
  
  tennis = loadImage('image/tennis.png');
  tennis1 = loadImage('image/tennis1.jpg');
  
  bird = loadImage('image/bird.png');
  bird1 = loadImage('image/bird1.jpg');
  
  male = loadImage('image/male.png');
  male1 = loadImage('image/male1.jpg');
  
  female = loadImage('image/female.png');
  female1 = loadImage('image/female1.jpg');
  
  love1 = loadImage('image/love.png');
  dislike1 = loadImage('image/dislike.png');
  
  
  button = loadImage('image/button.png');
}
function setup(){
  createCanvas(1024,768);
  background(205,235,252);
}
function draw(){
  push();
  
  push();
  textSize(50);
  text(word, 425, 80);
  pop();
  
  push();
  textSize(30);
  text(age1,770,250);
  text(dislike,770,400);
  pop();
  
  pop();
  
  push();
  scale(0.4);
  image(frame,200,100);
  image(dog1,200,100);
  image(male,0,300);
  image(love1,-350,700);
  image(dislike1,1500,700);
  image(button,680,1200);
  pop();
  
  push();
  scale(0.15);
  
  image(bird,4800,3500);
  image(cat,6000,3500);
  image(mail,5400,3500);
  
  image(bone,0,3500);
  image(tennis,600,3500);
  image(ghost,1200,3500);
  pop();
  
   if (mouseButton == LEFT && mouseIsPressed)
      if (mouseX > 500 && mouseX < 600 && mouseY < 600 && mouseY > 500) {
        dot();
        x = x+1;
      if(x>50){
        mail = ghost1;
      }
      if(x>80){
        bone = bird1;
      }
      if(x>110){
        tennis = mail1;
      }
      if(x>140){
        bird = ghost1;
      }
      if(x>170){
        cat = ghost1;
      }
      if(x>200){
        bird1 = ghost1;
      }
      if(x>230){
        mail1 = ghost1;
      }
      

      }
}
function dot(){
  ellipse(x,0,1,1);
}
