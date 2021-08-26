class COUMPUTERARCHER{
    constructor(x,y,width,height){
   var options = {
       isStatc:true
   }
    
   this.body =Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   this.image = loadImage("./assets/computerArcher.png")
   World.add(world, this.body)
   Matter.Body.setAngle(this.body,PI/2)
   }
   
   display(){
    
   var pos = this.body.position;
   var angle = this.body.angle;
   
/*if(keyIsDown(UP_ARROW) || this.body.angle > 1.77){
 angleValue = 0.1;
}


if(move === "UP" && this.body.angle > 1.77){
angleValue = 0.1;
}else{
    angleValue =-0.1;
}*/

   push();
   translate(pos.x,pos.y);

   rotate(angle)
  
  
   imageMode(CENTER);
   image(this.image,0,0,this.width,this.height)
   pop();
   
   }
   
   
   
   
   
   
   }