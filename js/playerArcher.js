class PLAYERARCHER{
    constructor(x,y,width,height){
   var options = {
       isStatc:true
   }
    
   this.body =Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   this.image = loadImage("./assets/playerArcher.png")
   World.add(world, this.body)
   Matter.Body.setAngle(this.body,-PI/2)
   }
   
   display(){
   var pos = this.body.position;
   var angleValue = this.body.angle;
   
   if(keyIsDown(UP_ARROW)&&this.body.angle > -1.9){
    this.angle -=0.01 
    Matter.Body.setAngle(this.body,angleValue)
  }

  if(keyIsDown(DOWN_ARROW)&&this.body.angle < -1.2){
    this.angle += 0.01
    Matter.Body.setAngle(this.body,angleValue)
  }
/*
if (playerArcher ==="UP" && this.body.angle < 1.77){
    angleValue = 0.10;

}else{
    angleValue = -0.1;
}
*/
   
   push();
   translate(pos.x,pos.y);

   rotate(angleValue)
   
  
   imageMode(CENTER);
   image(this.image,0,0,this.width,this.height)
   pop();
   
   }
   
   
   
   
   
   
   }