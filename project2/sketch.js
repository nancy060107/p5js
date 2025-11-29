function setup() {
  createCanvas(600, 400);
  background('#E5FFE5');
  
  fill('#402000');
  arc(300, 200, 220, 290, radians(180), radians(360));
  quad(190, 200, 410, 200, 410, 400, 190, 400);
  arc(250, 140, 50, 50, radians(0), radians(90));
// 머리 뒤
  
  noStroke();
  fill('#FFF0ED'); 
  ellipse(210, 210, 50, 50);
  ellipse(390, 210, 50, 50);
// 귀
  
  noStroke();
  fill('#FFF0ED'); 
  ellipse(300, 200, 190, 240);
// 얼굴
  
  fill('#402000');
  ellipse(260, 200, 13, 17);
  ellipse(340, 200, 13, 17);
  noFill();
  strokeWeight(2)
  stroke('#402000');
  arc(253, 199, 25, 20, radians(180),radians(360));
  arc(347, 199, 25, 20, radians(180),radians(360));
  noStroke();
  fill('#402000');
  triangle(242, 194, 240, 200, 234, 194);
  triangle(358, 194, 360, 200, 366, 194);
// 눈
  
  fill(255);
  noStroke();
  ellipse(263, 200, 3, 3);
  ellipse(343, 200, 3, 3);
// 눈 반짝
  
  fill('#402000');
  arc(240, 100, 170, 150, radians(-30), radians(120));
  arc(380, 100, 150, 150, radians(70), radians(200));
// 앞머리
  
  noFill();
  stroke('#402000');
  strokeWeight(2);
  arc(255, 190, 60, 25, radians(200), radians(340));
  arc(345, 190, 60, 25, radians(200), radians(340));
// 눈썹
  
  stroke('#402000');
  strokeWeight(1);
  triangle(300, 220, 300, 230, 295, 230);
// 코
  
  noStroke();
  fill('#FFB2B2')
  arc(300, 250, 90, 70, radians(0), radians(180));
// 입
  
  noStroke();
  fill('#FFF0ED'); 
  quad(270, 300, 330, 300, 330, 400, 270, 400);
// 목 1
  
  noStroke();
  fill(255);
  square(150, 360, 300, 50);
// 옷
  
  noStroke();
  fill('#FFF0ED'); 
  arc(300, 360, 60, 50, radians(0), radians(180));
  // 목 2
  
  stroke('#402000');
  strokeWeight(1.5);
  point(250, 250);
  point(255, 245);
// 점
}