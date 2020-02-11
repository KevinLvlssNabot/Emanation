var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
scene: {
		init: init,
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

function init(){
	var murs;
	var player;
	var objectif;

}

function preload(){
	this.load.image('perso','unnamed.png');
	this.load.image('horizontale','obstacles_hori.png');
	this.load.image('verticale','obstacles_droit.png');
	this.load.image('objectif','objectif.png');
	this.load.image('fond','western.png');
}



function create(){
	this.add.image(400,300,'fond');
	this.add.image(750,550,'objectif');





	platforms = this.physics.add.staticGroup();
		platforms.create(400,200,'horizontale');
		platforms.create(1000,300,'horizontale');
		platforms.create(55,155,'verticale');
		platforms.create(250,10,'horizontale');
		platforms.create(500,300,'horizontale');
		platforms.create(800,300,'verticale');

		player = this.physics.add.sprite(10,10,'perso');
		player.setCollideWorldBounds(true);
		player.setBounce(0);
		player.body.setGravityY(0);
		this.physics.add.collider(player,platforms);

cursors = this.input.keyboard.createCursorKeys();

	}



function update(){
	if(cursors.left.isDown){
		player.setVelocityX(-100);
	}else if(cursors.right.isDown){
		player.setVelocityX(100);
	}else if (cursors.down.isDown) {
		player.setVelocityY(100);
	} else if (cursors.up.isDown) {
		player.setVelocityY(-100);
	}else {
		player.setVelocityX(0);
		player.setVelocityY(0);
	}
}
