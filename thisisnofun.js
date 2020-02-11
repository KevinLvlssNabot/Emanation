var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },
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
	this.load.image('objectif','obj.png');
}



function create(){
		this.add.image(400,300,'perso');
		this.add.image(400,300,'horizontale');
		this.add.image(400,300,'verticale');
	}




function update(){

}
