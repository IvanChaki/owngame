class Hans{
constructor(x, y, width, height){
  var options={
      friction:1.0,
      density:1.0,
     // isStatic:true
    }
    this.body=Bodies.rectangle(x, y, width, height, options);
    this.image=loadImage("hansSpriteSheet.png")
    World.add(world, this.body);
}
display(){
    var pos =this.body.position; 
    var angle = this.body.angle; 
    push(); 
    translate(pos.x, pos.y); 
    rotate(angle); 
    imageMode(CENTER); 
    //strokeWeight(4); 
    //stroke("green"); 
    fill(255); 
    image(this.image,0, 0, this.width, this.height); 
    pop();

}




}