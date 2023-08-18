class Wall 
{
  constructor(x, y, w, h) 
  {
    let options = {
     isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show(){
    if(this.body != null){
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(150,0,0);
    rect(pos.x,pos.y, this.w, this.h);
    pop();
    }
  }
  
  break(){
    if(this.body != null){
      World.remove(world, this.body);
      this.body = null;
    };
  }
}
