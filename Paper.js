class Paper{

	constructor(x,y,radius){

		var paperOpt = {isStatic:false,restitution:0.3,friction:0.5,density:1.2}
		ellipseMode(RADIUS);
		this.body = Bodies.circle(x,y,radius,paperOpt);
		this.radius = radius;
		World.add(world,this.body);
		this.pos = this.body.position;
	}

	display(){
		var angle = this.body.angle;
		push();
		fill("pink");
		translate(this.pos.x,this.pos.y);
		rotate(angle);
		ellipse(0,0,this.radius,this.radius);
		pop();

	}
}