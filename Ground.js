class Ground{

	constructor(x,y,width,height){
		var GroundOpt = {isStatic:true}
		rectMode(CENTER);
		this.body = Bodies.rectangle(x,y,width,height,GroundOpt);
		this.width = width;
		this.height = height;
		World.add(world,this.body);
		this.pos = this.body.position;
	}

	display(){
		var angle = this.body.angle;
		push();
		fill("brown")
		translate(this.pos.x,this.pos.y);
		rotate(angle);
		rect(0,0,this.width,this.height)
		pop();
	}
}