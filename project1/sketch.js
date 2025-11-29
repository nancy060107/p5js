function setup() {
  createCanvas(600, 400);
  background(0);
  
  stroke(255);
  strokeWeight(2);
  point(300,30);
  point(30,20);
  point(10,100);
  point(500,200);
  point(388,190);
  point(183,55);
  point(586,40);
  point(200,160);
  point(50,230);
  point(450,80);
  point(300,300);
  // 별
  
  noStroke();
  fill('#c5bfaf');
  circle(470,300,160);
  // 행성
  
  noStroke();
  fill('#b3a998');
  arc(470,300,160,160,radians(20),radians(200));
  // 행성 그림자
  
  stroke(255);
  strokeWeight(1);
  noFill();
  arc(460,295,160,160,radians(0),radians(60));
  // 행성 하이라이트
  
  noFill();
  stroke('#eae6e0');
  strokeWeight(1);
  ellipse(470,300,200,25);
  // 행성 고리 #1
  
  noFill();
  stroke('#8b795f');
  strokeWeight(1);
  ellipse(470,310,200,25);
  // 행성 고리 #2

  stroke(255, 150);
  line(30,20,183,55);
  line(183,55,388,190);
  line(388,190,586,40);
  // 별자리
  
  stroke(246,192,181);
  strokeWeight(2);
  line(50,150,200,-80);    // 꼬리
  stroke(236,105,79);
  strokeWeight(3);
  line(60,155,220,-65);
  stroke(246,192,181);
  strokeWeight(2);
  line(68,160,240,-50);
  // 위성 꼬리

  fill(246, 192, 181, 120);
  noStroke();
  ellipse(50,170,70,70);
  // 위성 빛번짐

  fill(236,105,79);
  noStroke();
  ellipse(50,170,50,50);
  // 위성 본체
  
  noFill();
  stroke('#eae6e0');
  strokeWeight(0.5);
  ellipse(100,350,100,15);
  ellipse(100,350,110,25);
  ellipse(100,350,120,35);
  // 타원 꾸밈
  
  noFill();
  stroke('#eae6e0');
  strokeWeight(0.5);
  quad(130,200,190,160,250,200,190,240);
  quad(140,200,190,170,240,200,190,230);
  quad(150,200,190,180,230,200,190,220);
  quad(160,200,190,190,220,200,190,210);
  // 사변형 꾸밈
  
}