class  Ball extends BaseClass{
  constructor(x,y,width,height,angle){
    super(x,y,width,height);
    
  }
  display(){
    var angle=this.body.angle
    super.display();
    push()
    ellipse(RADIUS)
    ellipse(0,0,this.width,this.height)
    pop ()
    
  }


}